// import React from "react";
import PropTypes from "prop-types";

export default function Button ({
  children,
  text = 'center',
  color = 'blue',
  rounded = 'base',
  variant = 'solid',
  size = 'md',
  onClick,
  classNames = "",
}) {


  const textClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    base: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    '2xl': "rounded-2xl",
    '3xl': "rounded-3xl",
    full: "rounded-full",
  };


  const variantClasses = {
    solid: {
      white: 'bg-white hover:bg-gray-100',
      black: 'bg-black hover:bg-gray-800',
      blue: 'bg-blue-500 hover:bg-blue-600',
      green: 'bg-green-500 hover:bg-green-600',
      orange: 'bg-orange-500 hover:bg-orange-600',
      yellow: 'bg-yellow-500 hover:bg-yellow-600',
      red: 'bg-red-500 hover:bg-red-600',
      gray: 'bg-gray-500 hover:bg-gray-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      pink: 'bg-pink-500 hover:bg-pink-600'
    },
    outline: {
      white: 'border border-gray-100 text-gray-100 hover:bg-gray-50',
      blue: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
      green: 'border border-green-500 text-green-500 hover:bg-green-50',
      orange: 'border border-orange-500 text-orange-500 hover:bg-orange-50',
      yellow: 'border border-yellow-500 text-yellow-500 hover:bg-yellow-50',
      red: 'border border-red-500 text-red-500 hover:bg-red-50',
      gray: 'border border-gray-500 text-gray-500 hover:bg-gray-50',
      purple: 'border border-purple-500 text-purple-500 hover:bg-purple-50',
      pink: 'border border-pink-500 text-pink-500 hover:bg-pink-50'
    },
    ghost: {
      white: 'text-gray-500 hover:bg-gray-100',
      blue: 'text-blue-500 hover:bg-blue-100',
      green: 'text-green-500 hover:bg-green-100',
      orange: 'text-orange-500 hover:bg-orange-100',
      yellow: 'text-yellow-500 hover:bg-yellow-100',
      red: 'text-red-500 hover:bg-red-100',
      gray: 'text-gray-500 hover:bg-gray-100',
      purple: 'text-purple-500 hover:bg-purple-100',
      pink: 'text-pink-500 hover:bg-pink-100'
    },
    link: {
      black: 'text-black hover:underline',
      white: 'text-gray-500 hover:underline',
      blue: 'text-blue-500 hover:underline',
      green: 'text-green-500 hover:underline',
      orange: 'text-orange-500 hover:underline',
      yellow: 'text-yellow-500 hover:underline',
      red: 'text-red-500 hover:underline',
      gray: 'text-gray-500 hover:underline',
      purple: 'text-purple-500 hover:underline',
      pink: 'text-pink-500 hover:underline'

    }
  };

  // Usa la clase de color correcta según el variante
  const variantClass = variantClasses[variant]?.[color] || '';

  return (
    <button
      onClick={onClick}
      className={`${classNames} ${textClasses[text]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${variantClass} ${classNames}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.oneOf(['left', 'center', 'right']),
  variant: PropTypes.oneOf(['solid', 'outline', 'ghost', 'link']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  color: PropTypes.string,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  rounded: PropTypes.oneOf(['sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', 'full']),
};
