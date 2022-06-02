export default interface Product {
  id: number | string;
  sku?: string;
  name: string;
  description?: string;
  price?: number;
  categoryId?: number | string;
  stockId?: number | string;
}
