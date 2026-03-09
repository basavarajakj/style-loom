import type { LucideIcon } from 'lucide-react';

interface VendorDashboardTemplateProps {
  stats: {
    title: string;
    value: string;
    change: string;
    icon: LucideIcon;
  }[];
}

export default function VendorDashboardTemplate({}: VendorDashboardTemplateProps) {
  return <div>VendorDashboardTemplate</div>;
}
