import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import type { AdminTenant } from '@/types/tenant-types';
import { mockTenants } from '@/data/tenants';
import AdminTenantsTemplate from '@/components/templates/admin/tenants/admin-tenants-template';

export const Route = createFileRoute('/(admin)/admin/tenants/')({
  component: AdminTenantsPage,
});

function AdminTenantsPage() {
  const [tenants] = useState<AdminTenant[]>(mockTenants);

  return <AdminTenantsTemplate tenants={tenants} />;
}