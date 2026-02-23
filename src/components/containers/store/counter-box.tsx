import CounterItem from '@/components/base/common/counter-item';

interface Props {
  items: {
    label: string;
    value: string;
  }[];
}
export default function CounterBox({ items }: Props) {
  return (
    <div className='grid grid-cols-2'>
      {items.map((item, index) => (
        <CounterItem
          key={index}
          value={item.value}
          label={item.label}
          extraTop={index < 2}
        />
      ))}
    </div>
  );
}
