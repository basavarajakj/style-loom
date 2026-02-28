import Marquee from '@/components/containers/store/marquee';
import MarqueeBadge from '@/components/containers/store/marquee-badge';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

const brandsCategory = [
  'TANK TOP',
  'TSHIRT',
  'LONG-SLEEV TSHIRT',
  'RAGLAN SLEEVE SHIRT',
  'CROP TOP',
  'V-NECK SHIRT',
  'MUSCLE SHIRT',
];

export default function Brand({ className }: Props) {
  return (
    <section className={cn(className)}>
      <Marquee
        items={brandsCategory.map((c) => (
          <MarqueeBadge
            key={c}
            label={c}
          />
        ))}
        speed='slow'
        className='border-t-2'
      />
    </section>
  );
}
