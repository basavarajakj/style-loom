import VendorHeader from '@/components/base/vendors/vendor-header';
import VendorDashboardSidebar from '@/components/containers/vendors/vendor-dashboard-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { ReactNode } from 'react';

interface VendorDashboardLayoutProps {
  children: ReactNode;
  headerTitle?: string;
  showSearch?: boolean;
  className?: string;
}

export default function VendorDashboardLayout({
  children,
  headerTitle,
  showSearch,
  className,
}: VendorDashboardLayoutProps) {
  return (
    <SidebarProvider>
      <VendorDashboardSidebar />
      <SidebarInset>
        <VendorHeader
          title={headerTitle}
          showSearch={showSearch}
        />
        <main></main>
      </SidebarInset>
    </SidebarProvider>
  );
}
