import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AILessonViewer from './AILessonViewer';

/**
 * Standalone page for viewing a single AI-generated lesson
 * Scalable for millions of lessons using dynamic routing with lesson ID
 */
const AILessonViewerPage = ({ currentUser }) => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load the specific lesson from localStorage
    const loadLesson = () => {
      try {
        const savedLessons = JSON.parse(localStorage.getItem('aiGeneratedLessons') || '[]');
        const foundLesson = savedLessons.find(l => l.id === lessonId);
        
        if (foundLesson) {
          setLesson(foundLesson);
        } else {
          // Lesson not found, redirect to AI paths
          navigate('/ai-paths');
        }
      } catch (error) {
        console.error('Error loading lesson:', error);
        navigate('/ai-paths');
      } finally {
        setLoading(false);
      }
    };

    loadLesson();
  }, [lessonId, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent mx-auto mb-4"></div>
          <p className="text-slate-600">Loading lesson...</p>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return null; // Will redirect via useEffect
  }

  return (
    <AILessonViewer
      lesson={lesson}
      currentUser={currentUser}
      onComplete={(result) => {
        console.log('Lesson completed:', result);
        navigate('/ai-paths');
      }}
      onGoBack={() => navigate('/ai-paths')}
    />
  );
};

export default AILessonViewerPage;
