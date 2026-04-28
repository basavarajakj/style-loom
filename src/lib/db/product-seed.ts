/**
 * Universal Seed Script
 *
 * Seeds the database with sample data for all major entities.
 * Run with: npx tsx src/lib/db/seeding.ts
 */

import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import seedDataRaw from '../../data/product-seed.json';
import {
  productAttributes,
  productImages,
  productShippingMethods,
  products,
  productTags,
} from './schema/products-schema';

// Initialize database connection
const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({ client: sql });

// Cast seedData to any to match the dynamic structure
const seedData = seedDataRaw as any;


async function seedAll() {
  console.log('🌱 Starting universal seed...\n');

  const {
    products: productsList,
  } = seedData;

  // 10. Seed Products with Images, Tags, Attributes, and Shipping
  console.log(`📦 Seeding ${productsList.length} products...`);
  for (const product of productsList) {
    try {
      // Insert product
      await db
        .insert(products)
        .values({
          id: product.id,
          shopId: product.shopId,
          name: product.name,
          slug: product.slug,
          sku: product.sku,
          description: product.description,
          shortDescription: product.shortDescription,
          sellingPrice: product.sellingPrice,
          regularPrice: product.regularPrice,
          costPrice: product.costPrice,
          stock: product.stock,
          lowStockThreshold: product.lowStockThreshold,
          trackInventory: product.trackInventory,
          categoryId: product.categoryId || null,
          brandId: product.brandId || null,
          taxId: product.taxId || null,
          status: product.status as any,
          productType: product.productType as any,
          isFeatured: product.isFeatured,
          isActive: product.isActive,
          metaTitle: product.metaTitle,
          metaDescription: product.metaDescription,
          variationPrices:
            product.variationPrices &&
            Object.keys(product.variationPrices).length > 0
              ? JSON.stringify(product.variationPrices)
              : null,
        })
        .onConflictDoNothing();

      // Insert product images (thumbnail + gallery)
      if (product.images && product.images.length > 0) {
        for (const img of product.images) {
          await db
            .insert(productImages)
            .values({
              id: img.id,
              productId: product.id,
              url: img.url,
              alt: img.alt || null,
              sortOrder: img.sortOrder,
              isPrimary: img.isPrimary,
            })
            .onConflictDoNothing();
        }
      }

      // Insert product tags (junction table)
      if (product.tagIds && product.tagIds.length > 0) {
        for (const tagId of product.tagIds) {
          await db
            .insert(productTags)
            .values({
              productId: product.id,
              tagId,
            })
            .onConflictDoNothing();
        }
      }

      // Insert product attributes (junction table)
      if (product.attributeIds && product.attributeIds.length > 0) {
        for (const attrId of product.attributeIds) {
          await db
            .insert(productAttributes)
            .values({
              productId: product.id,
              attributeId: attrId,
              value: product.attributeValues[attrId]
                ? JSON.stringify(product.attributeValues[attrId])
                : null,
            })
            .onConflictDoNothing();
        }
      }

      // Insert product shipping methods (junction table)
      if (product.shippingMethodIds && product.shippingMethodIds.length > 0) {
        for (const shipId of product.shippingMethodIds) {
          await db
            .insert(productShippingMethods)
            .values({
              productId: product.id,
              shippingMethodId: shipId,
            })
            .onConflictDoNothing();
        }
      }
    } catch (error) {
      if (!(error as any).toString().includes('duplicate key')) {
        console.warn(`  ⚠️ Failed to seed product ${product.name}:`, error);
      }
    }
  }

  console.log('\n✅ Universal seed complete!');
  console.log('   📊 Summary:');
  console.log(
    `   - ${productsList.length} products (with images, tags, attrs, shipping)`
  );
}

seedAll()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Fatal error during seeding:', error);
    process.exit(1);
  });
