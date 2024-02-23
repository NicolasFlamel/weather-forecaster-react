import './styles.css';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button = ({ children, type, disabled }: ButtonProps) => {
  return (
    <button disabled={disabled} type={type} className="custom-btn">
      {children}
    </button>
  );
};

export default Button;
