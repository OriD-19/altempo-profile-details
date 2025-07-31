import React, { useState, forwardRef } from 'react';

// TextArea Component
export const TextArea = forwardRef(({
  label,
  value = '',
  placeholder = ' ',
  variant = 'outlined', // 'outlined' or 'filled'
  error = false,
  errorMessage = '',
  required = false,
  disabled = false,
  rows = 4,
  maxLength,
  resize = true, // Allow resizing
  className = '',
  onChange,
  onBlur,
  onFocus,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const hasValue = inputValue && inputValue.toString().length > 0;
  const isLabelFloated = isFocused || hasValue;

  // Base styles for different variants
  const baseTextAreaStyles = "peer w-full text-base transition-all duration-300 outline-none";
  
  const outlinedStyles = `
    px-3 pt-6 pb-2 border-2 rounded-lg bg-transparent
    ${error 
      ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
      : 'border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10'
    }
    ${disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : ''}
    ${resize ? 'resize-y' : 'resize-none'}
  `;

  const filledStyles = `
    px-3 pt-7 pb-2 border-0 border-b-2 rounded-t-lg
    ${error 
      ? 'bg-red-50 border-red-500 focus:border-red-500 focus:bg-red-50' 
      : 'bg-gray-100 border-gray-300 focus:border-violet-500 focus:bg-gray-50'
    }
    ${disabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : ''}
    ${resize ? 'resize-y' : 'resize-none'}
  `;

  const textAreaStyles = variant === 'filled' ? filledStyles : outlinedStyles;

  // Label styles
  const baseLabelStyles = "absolute pointer-events-none transition-all duration-300";
  
  const outlinedLabelStyles = `
    left-3 bg-white px-1
    ${isLabelFloated 
      ? '-top-2 left-2 text-xs font-medium' 
      : 'top-6 text-base'
    }
    ${error && isLabelFloated ? 'text-red-500' : isLabelFloated ? 'text-violet-600' : 'text-gray-500'}
  `;

  const filledLabelStyles = `
    left-3
    ${isLabelFloated 
      ? '-top-2 left-3 text-xs font-medium' 
      : 'top-6 text-base'
    }
    ${error && isLabelFloated ? 'text-red-500' : isLabelFloated ? 'text-violet-600' : 'text-gray-500'}
  `;

  const labelStyles = variant === 'filled' ? filledLabelStyles : outlinedLabelStyles;

  return (
    <div className={`relative ${className}`}>
      <textarea
        ref={ref}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        required={required}
        rows={rows}
        maxLength={maxLength}
        className={`${baseTextAreaStyles} ${textAreaStyles} min-h-[100px]`}
        {...props}
      />
      <label className={`${baseLabelStyles} ${labelStyles}`}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex justify-between items-center mt-1">
        {error && errorMessage && (
          <p className="text-sm text-red-500">{errorMessage}</p>
        )}
        {maxLength && (
          <p className="text-xs text-gray-400 ml-auto">
            {inputValue.length}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
});