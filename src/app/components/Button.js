import React from 'react';
import './index.scss';

const Button = ({
  disabled,
  onClick,
  className = '',
  children,
  isPurple,
  isSquare,
  key,
}) => {
  return (
    <button
      key={key}
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`Button ${className} ${isPurple ? 'Button--purple' : ''}  ${
        isSquare ? 'Button--square' : ''
      }`}
    >
      {children}
    </button>
  );
};
export default Button;
