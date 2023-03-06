import cn from 'classnames';

export default function Card({ className, children }) {
  return (
    <div className={cn(className, 'bg-[#191625] rounded-xl')}>{children}</div>
  );
}
