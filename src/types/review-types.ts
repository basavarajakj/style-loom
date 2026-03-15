export interface Review {
  id: string;
  productName: string;
  productImage: string;
  customerName: string;
  customerAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  status: "published" | "pending" | "rejected";
}

export interface ReviewFormValues {
  productName: string;
  customerName: string;
  customerAvatar?: FileList | null;
  rating: number;
  comment: string;
  status: "published" | "pending" | "rejected";
}