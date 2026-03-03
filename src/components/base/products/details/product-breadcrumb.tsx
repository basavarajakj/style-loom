import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from '@tanstack/react-router';

interface BreadcrumbItemType {
  label: string;
  href: string;
}
interface ProductBreadcrumbProps {
  items: BreadcrumbItemType[];
}

export default function ProductBreadcrumb({ items }: ProductBreadcrumbProps) {
  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList className="flex-nowrap overflow-hidden whitespace-nowrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <BreadcrumbItem
              key={item.label}
              className="flex items-center shrink-0"
            >
              {isLast ? (
                <BreadcrumbPage className="truncate max-w-[200px]">
                  {item.label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link
                    to={item.href}
                    className="truncate max-w-[150px]"
                  >
                    {item.label}
                  </Link>
                </BreadcrumbLink>
              )}

              {!isLast && (
                <BreadcrumbSeparator className="shrink-0" />
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
