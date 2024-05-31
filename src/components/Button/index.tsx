import './styles.css';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...buttonProps }: ButtonProps) => {
  return (
    <button
      className={className ? className + ' custom-btn' : 'custom-btn'}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
