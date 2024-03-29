import type { ProductSingle, SearchResults } from '../types/product'

/**
 * Fetches a list of products from the specified API endpoint and returns a subset of the results.
 *
 * @return {Promise<Product[]>} The subset of product results
 */
export const getProducts = async (limit = 4, offset = 0): Promise<SearchResults> => {
  const response = await fetch(`${import.meta.env.VITE_API_MELI_URL}/sites/MLA/search?q=:query&limit=${limit}&offset=${offset}`)
  const data = await response.json()
  const dataResults = {
    products: data.results,
    filters: data.filters,
    paging: data.paging
  }
  return dataResults
}

/**
 * Retrieves a single product by its ID using an asynchronous request.
 *
 * @param {string} id - The ID of the product to retrieve
 * @return {Promise<ProductSingle>} The product data retrieved from the API
 */
export const getProduct = async (id: string): Promise<ProductSingle> => {
  const response = await fetch(`${import.meta.env.VITE_API_MELI_URL}/items/${id}`)
  const data = await response.json()
  return data
}

/**
 * Retrieves a list of products by name from an external API.
 *
 * @param {string} name - The name of the product to search for
 * @return {Promise<Product[]>} An array of products matching the provided name
 */
export const getProductsByName = async (name: string, limit = 4, offset = 0): Promise<SearchResults> => {
  const response = await fetch(`${import.meta.env.VITE_API_MELI_URL}/sites/MLA/search?q=${name}&limit=${limit}&offset=${offset}`)
  const data = await response.json()
  const dataResults = {
    products: data.results,
    filters: data.filters,
    paging: data.paging
  }
  return dataResults
}

/**
 * Retrieves products by category from an external API.
 *
 * @param {string} category - The category of products to retrieve.
 * @return {Promise<SearchResults>} The search results containing products and filters.
 */
export const getProductsByCategory = async (category: string): Promise<SearchResults> => {
  const response = await fetch(`${import.meta.env.VITE_API_MELI_URL}/sites/MLA/search?category=${category}&limit=6&offset=0`)
  const data = await response.json()
  const dataResults = {
    products: data.results,
    filters: data.filters,
    paging: data.paging
  }
  return dataResults
}
