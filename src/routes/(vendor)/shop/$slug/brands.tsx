import { useMemo } from 'react';
import { AddBrandDialog } from '@/components/containers/shared/brands/add-brand-dialog';
import { ShopBrandsTemplate } from '@/components/templates/vendor/shop-brands-template';
import { shopBySlugQueryOptions } from '@/hooks/vendors/use-shops';
import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { createVendorBrandsFetcher } from '@/hooks/vendors/use-vendor-entity-fetcher';
import { useBrands } from '@/hooks/vendors/use-brands';
import { useEntityCRUD } from '@/hooks/common/use-entity-curd';
import type { BrandFormValues, BrandItem } from '@/types/brands-types';
import { ConfirmDeleteDialog } from '@/components/base/common/confirm-delete-dialog';

export const Route = createFileRoute('/(vendor)/shop/$slug/brands')({
  component: BrandsPage,
});

function BrandsPage() {
  const { slug } = Route.useParams();

  // Get shop data to retrieve shopId
  const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
  const shopId = shopData?.shop?.id;

  // Create fetcher for server-side pagination
  const fetcher = useMemo(() => createVendorBrandsFetcher(shopId), [shopId]);

  const {
    createBrand,
    isCreating,
    updateBrand,
    isUpdating,
    deleteBrand,
    mutationState,
    isBrandMutating,
  } = useBrands(shopId);

  // Use shared CRUD hook
  const {
    isDialogOpen,
    setIsDialogOpen,
    editingItem: editingBrand,
    deletingItem: deletingBrand,
    setDeletingItem: setDeletingBrand,
    handleAdd: handleAddBrand,
    handleEdit: handleEditBrand,
    handleDelete: handleDeleteBrand,
    confirmDelete,
    handleDialogClose,
  } = useEntityCRUD<BrandItem>({
    onDelete: async (id) => {
      await deleteBrand(id);
    },
  });

  const handleBrandSubmit = async (data: BrandFormValues) => {
    try {
      if (editingBrand) {
        await updateBrand({
          id: editingBrand.id,
          name: data.name,
          slug: data.slug,
          description: data.description || undefined,
          website: data.website || undefined,
          logo: data.logo || undefined,
        });
      } else {
        await createBrand({
          name: data.name,
          slug: data.slug,
          description: data.description || undefined,
          website: data.website || undefined,
          logo: data.logo || undefined,
          sortOrder: 0,
          isActive: true,
        });
      }
      handleDialogClose();
    } catch (error) {
      console.error('Failed to save brand:', error);
    }
  };

  return (
    <>
      <ShopBrandsTemplate
        fetcher={fetcher}
        onAddBrand={handleAddBrand}
        onEditBrand={handleEditBrand}
        onDeleteBrand={handleDeleteBrand}
        mutationState={mutationState}
        isBrandMutating={isBrandMutating}
      />

      <AddBrandDialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) handleDialogClose();
        }}
        onSubmit={handleBrandSubmit}
        isSubmitting={isCreating || isUpdating}
        initialValues={
          editingBrand
            ? {
                name: editingBrand.name,
                slug: editingBrand.slug,
                description: editingBrand.description ?? '',
                logo: editingBrand.logo ?? null,
                website: editingBrand.website ?? '',
              }
            : null
        }
      />

      <ConfirmDeleteDialog
        open={!!deletingBrand}
        onOpenChange={(open) => !open && setDeletingBrand(null)}
        onConfirm={confirmDelete}
        itemName={deletingBrand?.name}
        entityType='brand'
      />
    </>
  );
}
