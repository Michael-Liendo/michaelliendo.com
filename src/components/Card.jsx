import cn from 'classnames';

export default function Card({ className, children }) {
  return (
    <div
      className={cn(
        className,
        'bg-light-background dark:bg-dark-background rounded-xl',
      )}
    >
      {children}
    </div>
  );
}
