interface OrderItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface OrderItemListProps {
  items: OrderItem[];
}

export default function OrderItemList({ items }: OrderItemListProps) {
  return (
    <div className='space-y-4'>
      {items.map((item) => (
        <div
          key={item.id}
          className='flex items-center justify-between gap-2'
        >
          <div className='flex items-center gap-4'>
            <div className='max-h-16 max-w-16  overflow-hidden rounded-md border bg-muted'>
              <img
                src={item.image}
                alt={item.name}
                className='object-cover aspect-square'
              />
            </div>
            <p className='font-xl'>{item.name}</p>
          </div>
          <div className='text-right'>
            <p className='font-semibold text-lg'>{item.price.toFixed(2)}</p>
            <p className='text-muted-foreground text-sm'>
              Qty: {item.quantity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
