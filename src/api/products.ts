import type { Product } from '../types/product'

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${import.meta.env.VITE_API_MELI_URL}/sites/MLA/search?q=celular`)
  const data = await response.json()
  data.results = data.results.slice(0, 4)
  return data.results
}
