import './styles.css';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button = ({
  children,
  type,
  onClick,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <button
      className={className ? className + ' custom-btn' : 'custom-btn'}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
