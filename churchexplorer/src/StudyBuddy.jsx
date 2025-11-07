import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Loader, Sparkles, X, Minimize2 } from 'lucide-react';
import UpgradeModal from './UpgradeModal';
import { useLocation } from 'react-router-dom';

const StudyBuddy = ({ currentUser }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm your Study Buddy. Ask me anything about Christianity, the Bible, theology, or church history!"
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [subscriptionLoading, setSubscriptionLoading] = useState(true);
  const [hasUnreadMessage, setHasUnreadMessage] = useState(false);
  const [lastPath, setLastPath] = useState(location.pathname);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    // Mark as read when chat is open
    if (isOpen) {
      setHasUnreadMessage(false);
    }
  }, [messages, isOpen]);

  // Load subscription status
  useEffect(() => {
    const loadSubscription = async () => {
      if (!currentUser?.uid) {
        setSubscriptionLoading(false);
        return;
      }
      
      setSubscriptionLoading(true);
      try {
        const { getUserSubscription } = await import('./firebase/subscriptionService');
        const result = await getUserSubscription(currentUser.uid);
        console.log('Study Buddy - getUserSubscription result:', result);
        
        if (result.success && result.subscription) {
          console.log('Study Buddy - Subscription tier:', result.subscription.tier);
          console.log('Study Buddy - Subscription status:', result.subscription.status);
          setSubscription(result.subscription);
        } else {
          console.error('Study Buddy - Failed to load subscription:', result.error);
          setSubscription(null);
        }
      } catch (error) {
        console.error('Error loading subscription:', error);
        setSubscription(null);
      } finally {
        setSubscriptionLoading(false);
      }
    };

    loadSubscription();
  }, [currentUser]);

  // Reset chat when navigating to a different page for fresh context
  useEffect(() => {
    if (location.pathname !== lastPath) {
      console.log('Page changed from', lastPath, 'to', location.pathname, '- resetting chat context');
      setMessages([
        {
          role: 'assistant',
          content: "Hi! I'm your Study Buddy. Ask me anything about Christianity, the Bible, theology, or church history!"
        }
      ]);
      setLastPath(location.pathname);
    }
  }, [location.pathname, lastPath]);

  // Extract page context for context-aware responses
  const getPageContext = () => {
    const context = {
      pageType: 'general',
      path: location.pathname
    };

    console.log('Extracting page context from pathname:', location.pathname);

    // Try to extract content from the DOM with various selectors
    // Prioritize lesson-specific containers
    let mainContent = document.querySelector('main') || 
                      document.querySelector('[class*="lesson"]') || 
                      document.querySelector('article') ||
                      document.querySelector('[role="main"]') ||
                      document.querySelector('.content') ||
                      document.querySelector('#root > div > div:not(nav)'); // Skip nav
    
    console.log('Found main content element:', mainContent?.tagName || 'none', mainContent?.className || '');
    
    if (mainContent) {
      // Extract lesson title - try multiple selectors but skip navigation
      const h1 = mainContent.querySelector('h1:not(nav h1):not(header h1)') || 
                 mainContent.querySelector('h2:not(nav h2)') ||
                 document.querySelector('h1:not(nav h1):not(header h1)');
      
      if (h1 && h1.innerText && !h1.innerText.includes('Menu') && !h1.innerText.includes('Church Explorer')) {
        context.lessonTitle = h1.innerText;
        console.log('Extracted lesson title:', context.lessonTitle);
      }
      
      // Extract text content but exclude navigation, header, and footer
      let textContent = '';
      
      // Clone the content to avoid modifying the actual DOM
      const contentClone = mainContent.cloneNode(true);
      
      // Remove navigation, header, footer elements from clone
      // Be selective with buttons - only remove navigation-related ones
      contentClone.querySelectorAll('nav, header:not([class*="lesson"]), footer, [role="navigation"], .navigation, [class*="hamburger"], [class*="mobile-menu"]').forEach(el => el.remove());
      
      textContent = contentClone.innerText || contentClone.textContent;
      
      console.log('Raw extracted text length:', textContent?.length || 0);
      
      if (textContent && textContent.length > 100) {
        // Further clean the content
        const cleanedContent = textContent
          .replace(/Sign In.*?Sign Up/gs, '')
          .replace(/Home.*?Leaderboard/gs, '')
          .replace(/Menu/g, '')
          .replace(/\s+/g, ' ') // Normalize whitespace
          .trim();
        
        if (cleanedContent.length > 100) {
          context.lessonContent = cleanedContent.substring(0, 3000);
          console.log('Extracted lesson content length:', context.lessonContent.length);
          console.log('First 200 chars:', context.lessonContent.substring(0, 200));
        }
      }
      
      // Try to detect current slide/section with more selectors
      const activeSlide = mainContent.querySelector('[class*="active"]:not(nav *)') || 
                         mainContent.querySelector('[class*="current"]:not(nav *)') ||
                         mainContent.querySelector('[aria-current="true"]') ||
                         mainContent.querySelector('.slide.visible');
      if (activeSlide) {
        const slideText = activeSlide.innerText?.substring(0, 500);
        if (slideText && !slideText.includes('Menu') && !slideText.includes('Sign In')) {
          context.currentSlide = slideText;
          console.log('Extracted current slide:', context.currentSlide?.substring(0, 100));
        }
      }
    }

    // Detect page type from URL
    if (location.pathname.includes('/ai-lesson')) {
      context.pageType = 'AI Lesson';
    } else if (location.pathname.includes('/study-guide')) {
      context.pageType = 'Church History Lesson';
    } else if (location.pathname.includes('/bible-history')) {
      context.pageType = 'Bible History Lesson';
    } else if (location.pathname.includes('/apologetics')) {
      context.pageType = 'Apologetics Lesson';
    } else if (location.pathname.includes('/ai-paths')) {
      context.pageType = 'AI Learning Paths Overview';
    } else if (location.pathname.includes('/ai-path/')) {
      context.pageType = 'AI Learning Path Details';
    } else if (location.pathname.includes('/learn')) {
      context.pageType = 'Curated Learning';
    } else if (location.pathname === '/' || location.pathname === '') {
      context.pageType = 'Home Page';
    }

    console.log('Final page context:', context);
    return context;
  };

  const handleSendMessage = async (e) => {
    // Prevent any default behavior if called from button click
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (!inputMessage.trim() || isLoading) {
      console.log('Cannot send: message empty or loading', { inputMessage, isLoading });
      return;
    }

    // Check if user is authenticated
    if (!currentUser?.uid) {
      alert('Please sign in to use Study Buddy');
      return;
    }

    // Wait for subscription to load if it's still loading
    if (subscriptionLoading) {
      console.log('Subscription still loading, please wait...');
      return;
    }

    // Check if premium (only when trying to send message)
    console.log('Checking subscription tier:', subscription?.tier);
    console.log('Full subscription object:', subscription);
    
    if (!subscription || subscription.tier !== 'premium') {
      console.log('Not premium, showing upgrade modal. Tier:', subscription?.tier);
      setShowUpgradeModal(true);
      return;
    }

    console.log('Sending message:', inputMessage);

    const userMessage = {
      role: 'user',
      content: inputMessage.trim()
    };

    // Add user message to UI immediately
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    console.log('About to extract page context...');

    try {
      const API_ENDPOINT = process.env.REACT_APP_AI_API_ENDPOINT || 'http://localhost:3001/api/ai';
      
      // Get current page context
      console.log('Calling getPageContext()...');
      const pageContext = getPageContext();
      console.log('Sending page context to API:', pageContext);
      
      const response = await fetch(`${API_ENDPOINT}/study-buddy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          userId: currentUser?.uid,
          pageContext: pageContext // Include page context for context-aware responses
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        
        // Check if upgrade is needed
        if (errorData.upgradeNeeded) {
          setShowUpgradeModal(true);
          setMessages(prev => prev.slice(0, -1)); // Remove user message
          return;
        }
        
        throw new Error(errorData.error || 'Failed to send message');
      }

      const data = await response.json();
      
      // Add assistant response
      const assistantMessage = {
        role: 'assistant',
        content: data.message
      };
      setMessages(prev => [...prev, assistantMessage]);
      
      // Show unread indicator if chat is minimized or closed
      if (isMinimized || !isOpen) {
        setHasUnreadMessage(true);
      }

    } catch (error) {
      console.error('Chat error:', error);
      
      // Add error message
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I encountered an error. Please try again in a moment."
      }]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const suggestedQuestions = [
    "What does the Bible say about prayer?",
    "Explain the Trinity in simple terms",
    "What are the key differences between Catholic and Protestant beliefs?",
    "How do I start studying the Bible?",
    "What is grace according to Christian theology?"
  ];

  const handleSuggestionClick = (question) => {
    setInputMessage(question);
    inputRef.current?.focus();
  };

  const handleToggleChat = () => {
    if (!currentUser?.uid) {
      alert('Please sign in to use Study Buddy');
      return;
    }
    setIsOpen(!isOpen);
    setIsMinimized(false);
    setHasUnreadMessage(false);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    setIsMinimized(false);
    setHasUnreadMessage(false);
  };

  // Don't render anything if not authenticated
  if (!currentUser?.uid) {
    return null;
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={handleToggleChat}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full p-4 shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110 group"
          aria-label="Open Study Buddy"
        >
          <MessageCircle className="w-6 h-6" />
          {hasUnreadMessage && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          )}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Study Buddy
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed z-50 transition-all inset-x-4 sm:inset-x-auto sm:right-6 ${
          isMinimized 
            ? 'bottom-6 sm:w-80' 
            : 'bottom-6 sm:w-96 h-[600px] max-h-[calc(100vh-8rem)]'
        }`}>
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 flex flex-col h-full overflow-hidden">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">
                    Study Buddy
                  </h3>
                  <p className="text-xs text-purple-100">Ask me anything!</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={isMinimized ? handleMaximize : handleMinimize}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition"
                  aria-label={isMinimized ? "Maximize" : "Minimize"}
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Content - only show when not minimized */}
            {!isMinimized && (
              <>
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                            : 'bg-white text-slate-900 border border-slate-200'
                        }`}
                      >
                        {message.role === 'assistant' && (
                          <div className="flex items-center gap-1 mb-1">
                            <Sparkles className="w-3 h-3 text-purple-600" />
                            <span className="text-xs font-semibold text-purple-600">Study Buddy</span>
                          </div>
                        )}
                        <div className="whitespace-pre-wrap leading-relaxed">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white rounded-xl px-3 py-2 border border-slate-200">
                        <div className="flex items-center gap-2">
                          <Loader className="w-3 h-3 animate-spin text-purple-600" />
                          <span className="text-xs text-slate-600">Thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested Questions (only show at start) */}
                {messages.length === 1 && !isLoading && (
                  <div className="px-4 py-2 bg-slate-50 border-t border-slate-200">
                    <p className="text-xs font-semibold text-slate-600 mb-2">Try asking:</p>
                    <div className="flex flex-col gap-1">
                      {suggestedQuestions.slice(0, 2).map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(question)}
                          className="text-xs px-2 py-1.5 bg-white text-purple-700 rounded-lg hover:bg-purple-50 transition border border-purple-200 text-left"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="border-t-2 border-slate-200 p-3 bg-white">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Ask about Christianity..."
                      className="flex-1 px-3 py-2 text-sm border-2 border-slate-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={(e) => handleSendMessage(e)}
                      disabled={!inputMessage.trim() || isLoading}
                      className="px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Upgrade Modal */}
      {showUpgradeModal && subscription?.tier !== 'premium' && (
        <UpgradeModal
          currentUser={currentUser}
          onClose={() => setShowUpgradeModal(false)}
          feature="Study Buddy"
          description="Get unlimited AI-powered chat to explore the Bible, theology, church history, and deepen your faith while you learn."
        />
      )}
    </>
  );
};

export default StudyBuddy;
