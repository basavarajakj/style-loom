import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';

interface NavItem {
  label: string;
  to: string;
}
interface Props {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
}
export default function Navbar({
  items,
  className,
  linkClassName = '',
  activeLinkClassName = '',
}: Props) {
  return (
    <nav
      className={cn('hidden items-center gap-6 text-sm @5xl:flex', className)}
    >
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={cn(
            'flex font-mono @7xl:items-center h-12 justify-center rounded-lg border-2 border-dashed bg-transparent px-[30px] text-lg hover:border-transparent hover:bg-primary hover:text-background dark:text-body-70 transition-all dark:hover:text-background',
            linkClassName
          )}
          activeProps={{
            className: cn(
              'rounded-lg text-lg text-background border-transparent dark:bg-body-10! hover:dark:text-foreground bg-foreground',
              activeLinkClassName
            ),
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
