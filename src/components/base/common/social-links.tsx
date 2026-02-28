import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import { GithubIcon, LinkedinIcon } from 'lucide-react';

interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
}

const defaultLinks: SocialLink[] = [
  { label: 'Github', href: '/#github', icon: GithubIcon },
  { label: 'Linkedin', href: '/#linkedIn', icon: LinkedinIcon },
];
export default function SocialLinks({
  links = defaultLinks,
  className,
}: SocialLinksProps) {
  return (
    <div
      className={cn('flex flex-wrap items-center @5xl:gap-5 gap-4', className)}
    >
      {links.map((link) => (
        <Link
          to={link.href}
          key={link.label}
          aria-label={link.label}
          target='_blank'
          className={cn(
            'inline-flex @5xl:size-14 @7xl:size-16 size-12 items-center justify-center rounded-xl bg-primary-80 text-dark-06 transition-colors hover:bg-accent hover:text-accent-foreground'
          )}
        >
          <link.icon className='@5xl:size-7 size-6' />
        </Link>
      ))}
    </div>
  );
}
