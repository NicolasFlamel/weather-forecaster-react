import './styles.css';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button = ({ children, type }: ButtonProps) => {
  return (
    <button type={type} className="custom-btn">
      {children}
    </button>
  );
};

export default Button;
