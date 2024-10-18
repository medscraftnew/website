import React from 'react';
import "./FloatingCallIcon.css";

const FloatingCallIcon = () => {
  return (
    <a
      href="tel:+918088435500"
      className="fixed bottom-6 right-6 z-50 sm:hidden"
    >
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-glow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8 text-white sm:hidden"
        >
          <path d="M21.42 15.77l-4.08-.84a1.003 1.003 0 0 0-1.03.3l-2.2 2.2a15.488 15.488 0 0 1-6.71-6.71l2.2-2.2a1 1 0 0 0 .3-1.03l-.84-4.08A1.003 1.003 0 0 0 8.04 3H3.5a1 1 0 0 0-1 1C2.5 14.55 9.45 21.5 20 21.5a1 1 0 0 0 1-1v-4.54a1.003 1.003 0 0 0-.58-.92z" />
        </svg>
      </div>
    </a>
  );
}

export default FloatingCallIcon;
