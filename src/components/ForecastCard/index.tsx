import './styles.css';
import { ReactNode } from 'react';

interface ForecastCardProps {
  children: ReactNode;
  classNames?: string;
}

const ForecastCard = ({ children, classNames }: ForecastCardProps) => {
  const customClass = classNames
    ? [classNames, 'custom-forecast-card']
    : ['custom-forecast-card'];

  return <section className={customClass.join(' ')}>{children}</section>;
};

export default ForecastCard;
