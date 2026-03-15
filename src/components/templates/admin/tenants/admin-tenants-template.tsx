import VendorPageHeader from '@/components/base/common/page-header';
import AdminTenantTable from '@/components/containers/admin/tenant/admin-tenant-table';
import type { AdminTenant } from '@/types/tenant-types';

interface AdminTenantsTemplateProps {
  tenants: AdminTenant[];
}

export default function AdminTenantsTemplate({
  tenants,
}: AdminTenantsTemplateProps) {
  return (
    <>
      <VendorPageHeader
        title="Tenants"
        description="Manage all registered shops and vendors"
      />

      <AdminTenantTable tenants={tenants} />
    </>
  );
}