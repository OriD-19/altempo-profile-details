import React, { useState, forwardRef } from 'react';

// Social Media Input Component
export const SocialMediaInput = ({
  platform = 'email',
  label,
  value = '',
  onDisconnect,
  connected = false,
  className = ''
}) => {
  const platformConfig = {
    email: {
      icon: '📧',
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    facebook: {
      icon: '📘',
      color: 'bg-blue-600',
      textColor: 'text-blue-600', 
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    google: {
      icon: '🔍',
      color: 'bg-red-500',
      textColor: 'text-red-600',
      bgColor: 'bg-red-50', 
      borderColor: 'border-red-200'
    },
    twitter: {
      icon: '🐦',
      color: 'bg-sky-500',
      textColor: 'text-sky-600',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200'
    },
    linkedin: {
      icon: '💼',
      color: 'bg-blue-700',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    github: {
      icon: '⚫',
      color: 'bg-gray-800',
      textColor: 'text-gray-800',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200'
    }
  };

  const config = platformConfig[platform] || platformConfig.email;

  return (
    <div className={`relative ${className}`}>
      <div className={`
        flex items-center justify-between
        px-4 py-3 rounded-xl border-2
        transition-all duration-200 hover:shadow-md
      ` + "border-gray-300"}>
        {/* Left side - Icon and content */}
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          {/* Platform icon */}
          <div className={`
            w-8 h-8 rounded-full 
            flex items-center justify-center text-white text-sm
            flex-shrink-0
          `}>
            {config.icon}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className={`text-xs font-medium text-violet-500 mb-0.5`}>
              {label}
            </div>
            <div className="text-sm text-gray-800 font-medium truncate">
              {value}
            </div>
          </div>
        </div>

        {/* Right side - Disconnect button */}
        {connected && onDisconnect && (
          <button
            onClick={onDisconnect}
            className="text-red-500 hover:text-red-700 text-sm font-medium px-2 py-1 rounded-md hover:bg-red-50 transition-colors duration-200 flex-shrink-0"
          >
            Desconectar
          </button>
        )}
      </div>
    </div>
  );
};