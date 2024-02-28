import './styles.css';
import { ReactNode } from 'react';

interface CardProps extends React.DOMAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className, onClick }: CardProps) => {
  const customClass = className
    ? [className, 'custom-forecast-card']
    : ['custom-forecast-card'];

  return onClick ? (
    <button className={customClass.join(' ')} onClick={onClick}>
      {children}
    </button>
  ) : (
    <section className={customClass.join(' ')}>{children}</section>
  );
};

export default Card;
