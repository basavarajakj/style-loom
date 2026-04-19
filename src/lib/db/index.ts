import { neon, type NeonQueryFunction } from '@neondatabase/serverless';
import { drizzle, type NeonHttpDatabase } from 'drizzle-orm/neon-http';
import { account, session, user, verification } from './schema/auth-schema';
import { shops, vendors } from './schema/shop-schema';
import { categories } from './schema/category-schema';
import { brands } from './schema/brand-schema';
import { taxRates, taxRatesRelations } from './schema/tax-schema';
import { tags, tagsRelations } from './schema/tags-schema';
import {
  productAttributes,
  productAttributesRelations,
  productImages,
  productImagesRelations,
  products,
  productsRelations,
  productTags,
  productTagsRelations,
} from './schema/products-schema';
import {
  attributes,
  attributesRelations,
  attributeValues,
  attributeValuesRelations,
} from './schema/attribute-schema';
import { shippingMethods, shippingMethodsRelations } from './schema/shipping-schema';
import { orderItems, orderItemsRelations, orders, ordersRelations } from './schema/order-schema';
import { productReviews, productReviewsRelations, reviewHelpfulVotes, reviewHelpfulVotesRelations } from './schema/review-schema';
import { cartItems, cartItemsRelations, cartSessions, cartSessionsRelations } from './schema/cart-schema';
import { wishlistItems, wishlistItemsRelations } from './schema/wishlist-schema';

const schema = {
  user,
  account,
  session,
  verification,
  vendors,
  shops,
  categories,
  brands,
  taxRates,
  taxRatesRelations,
  attributes,
  attributeValues,
  attributesRelations,
  attributeValuesRelations,
  tags,
  tagsRelations,
  productAttributes,
  productAttributesRelations,
  productImages,
  productImagesRelations,
  products,
  productsRelations,
  productTags,
  productTagsRelations,
  shippingMethods,
  shippingMethodsRelations,
  orderItems,
  orderItemsRelations,
  orders,
  ordersRelations,
  productReviews,
  productReviewsRelations,
  reviewHelpfulVotes,
  reviewHelpfulVotesRelations,
  cartSessions,
  cartItems,
  cartItemsRelations,
  cartSessionsRelations,
  wishlistItems,
  wishlistItemsRelations,
};

// Lazy initialization - only connect to DB when first accessed
let sqlClient: NeonQueryFunction<false, false> | null = null;
let dbClient: NeonHttpDatabase<typeof schema> | null = null;

function getSql() {
  if (!sqlClient) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error(
        'DATABASE_URL environment variable is not set, please check your .env file'
      );
    }
    sqlClient = neon(url);
  }

  return sqlClient;
}

function getDb() {
  if (!dbClient) {
    dbClient = drizzle({
      client: getSql(),
      schema,
    });
  }

  return dbClient;
}

// Export getters that lazily initialize
export const sql = new Proxy({} as NeonQueryFunction<false, false>, {
  get(_, prop) {
    return Reflect.get(getSql(), prop);
  },
  apply(_, thisArg, args) {
    return Reflect.apply(getSql(), thisArg, args);
  },
});

export const db = new Proxy({} as NeonHttpDatabase<typeof schema>, {
  get(_, prop) {
    return Reflect.get(getDb(), prop);
  },
});
