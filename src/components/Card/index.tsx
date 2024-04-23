import './styles.css';

interface CardProps extends React.HTMLAttributes<HTMLElement> {}

const Card = ({ children, className, onClick }: CardProps) => {
  const customClass = className ? [className, 'custom-card'] : ['custom-card'];

  return onClick ? (
    <button className={customClass.join(' ')} onClick={onClick}>
      {children}
    </button>
  ) : (
    <section className={customClass.join(' ')}>{children}</section>
  );
};

export default Card;
