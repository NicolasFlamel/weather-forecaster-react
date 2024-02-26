import './styles.css';
import { ReactNode } from 'react';

interface ForecastCardProps extends React.DOMAttributes<HTMLElement> {
  children: ReactNode;
  classNames?: string;
}

const ForecastCard = ({ children, classNames, onClick }: ForecastCardProps) => {
  const customClass = classNames
    ? [classNames, 'custom-forecast-card']
    : ['custom-forecast-card'];

  return (
    <section className={customClass.join(' ')} onClick={onClick}>
      {children}
    </section>
  );
};

export default ForecastCard;
