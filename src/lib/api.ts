import { IProduct } from "@/types";

const BASE_URL = "https://fakestoreapi.com/products";

export async function getProducts(category?: string): Promise<IProduct[]> {
  const cleanCategory = category?.trim().toLowerCase();

  const url = cleanCategory
    ? `${BASE_URL}/category/${cleanCategory}`
    : `${BASE_URL}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.warn("API returned non-array data:", data);
      return [];
    }

    return data;
  } catch (error) {
    console.error("API Call Error:", error);
    throw error;
  }
}
