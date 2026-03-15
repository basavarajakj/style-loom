export interface Tag {
  id: string;
  name: string;
  slug: string;
  description?: string;
  productCount: number;
}

export interface TagFormValues {
  name: string;
  description: string;
}