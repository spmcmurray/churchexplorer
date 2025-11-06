import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Loader, X } from 'lucide-react';

/**
 * Toast Notification Component
 * Shows temporary notifications at the bottom of the screen
 */
export const ToastContainer = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-sm">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={() => onDismiss(toast.id)} />
      ))}
    </div>
  );
};

const Toast = ({ toast, onDismiss }) => {
  const { type, title, message, duration = 5000, action } = toast;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onDismiss();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onDismiss]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-600" />,
    error: <XCircle className="w-5 h-5 text-red-600" />,
    info: <Loader className="w-5 h-5 text-blue-600 animate-spin" />
  };

  const backgrounds = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    info: 'bg-blue-50 border-blue-200'
  };

  return (
    <div
      className={`${backgrounds[type]} border rounded-lg shadow-lg p-4 flex items-start space-x-3 animate-slide-in-right`}
    >
      <div className="flex-shrink-0">{icons[type]}</div>
      <div className="flex-1">
        <h4 className="font-semibold text-slate-900">{title}</h4>
        {message && <p className="text-sm text-slate-600 mt-1">{message}</p>}
        {action && (
          <button
            onClick={action.onClick}
            className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            {action.label}
          </button>
        )}
      </div>
      <button onClick={onDismiss} className="flex-shrink-0 text-slate-400 hover:text-slate-600">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

// Hook to manage toasts
export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const showToast = (toast) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return { toasts, showToast, dismissToast };
};
