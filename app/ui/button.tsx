import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        buttonVariants({ variant: 'default', size: 'default' }),
        'bg-blue-500 hover:bg-blue-400 focus-visible:ring-blue-500',
        className,
      )}
    >
      {children}
    </button>
  );
}
