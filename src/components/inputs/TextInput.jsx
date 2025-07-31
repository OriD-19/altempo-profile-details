import React, { useState, forwardRef } from 'react';

// Input component... probably a better idea to use an external library.
// Sorry, not very good at designing stuff 😔

export const Input = forwardRef(({
    label,
    type = 'text',
    value = '',
    placeholder = ' ',
    variant = 'outlined', 
    error = false,
    errorMessage = '',
    required = false,
    disabled = false,
    options = [], 
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

    const baseInputStyles = "peer w-full text-base transition-all duration-300 outline-none";

    const outlinedStyles = `
    px-3 pt-4 pb-2 border-2 rounded-lg bg-transparent
    ${error
            ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'
            : 'border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10'
        }
    ${disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : ''}
  `;

    const filledStyles = `
    px-3 pt-5 pb-2 border-0 border-b-2 rounded-t-lg
    ${error
            ? 'bg-red-50 border-red-500 focus:border-red-500 focus:bg-red-50'
            : 'bg-gray-100 border-gray-300 focus:border-violet-500 focus:bg-gray-50'
        }
    ${disabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : ''}
  `;

    const inputStyles = variant === 'filled' ? filledStyles : outlinedStyles;

    const baseLabelStyles = "absolute pointer-events-none transition-all duration-300";

    const outlinedLabelStyles = `
    left-3 bg-white px-1
    ${isLabelFloated
            ? '-top-2 left-2 text-xs font-medium'
            : 'top-4 text-base'
        }
    ${error && isLabelFloated ? 'text-red-500' : isLabelFloated ? 'text-violet-600' : 'text-gray-500'}
  `;

    const filledLabelStyles = `
    left-3
    ${isLabelFloated
            ? '-top-2 left-3 text-xs font-medium'
            : 'top-4 text-base'
        }
    ${error && isLabelFloated ? 'text-red-500' : isLabelFloated ? 'text-violet-600' : 'text-gray-500'}
  `;

    const labelStyles = variant === 'filled' ? filledLabelStyles : outlinedLabelStyles;

    if (type === 'select') {
        return (
            <div className={`relative ${className}`}>
                <select
                    ref={ref}
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    required={required}
                    className={`${baseInputStyles} ${inputStyles} cursor-pointer`}
                    {...props}
                >
                    <option value="" disabled hidden></option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value || option}>
                            {option.label || option}
                        </option>
                    ))}
                </select>
                <label className={`${baseLabelStyles} ${labelStyles}`}>
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
                {error && errorMessage && (
                    <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
                )}
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <input
                ref={ref}
                type={type}
                value={inputValue}
                placeholder={placeholder}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                required={required}
                className={`${baseInputStyles} ${inputStyles}`}
                {...props}
            />
            <label className={`${baseLabelStyles} ${labelStyles}`}>
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {error && errorMessage && (
                <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
            )}
        </div>
    );
});