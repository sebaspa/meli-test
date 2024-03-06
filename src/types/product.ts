export interface Product {
  id: string
  title: string
  condition: string
  thumbnail_id: string
  catalog_product_id: string
  listing_type_id: string
  permalink: string
  buying_mode: string
  site_id: string
  category_id: string
  domain_id: string
  thumbnail: string
  currency_id: string
  order_backend: number
  price: number
  original_price: number | null
  sale_price: number | null
  available_quantity: number
  official_store_id: number
  official_store_name: string
  use_thumbnail_id: boolean
  accepts_mercadopago: boolean
  shipping: Shipping
  stop_time: string
  seller: Seller
  attributes: Attribute[]
  installments: Installments
  winner_item_id: number | null
  catalog_listing: boolean
  discounts: any
  promotions: any[]
  differential_pricing: DifferentialPricing
  inventory_id: number | null
}

export interface Shipping {
  store_pick_up: boolean
  free_shipping: boolean
  logistic_type: string
  mode: string
  tags: string[]
  benefits: any
  promise: any
}

export interface Seller {
  id: number
  nickname: string
}

export interface Attribute {
  id: string
  name: string
  value_id: string
  value_name: string
  attribute_group_id: string
  attribute_group_name: string
  value_struct?: ValueStruct
  values: Value[]
  source: number
  value_type: string
}

export interface ValueStruct {
  number: number
  unit: string
}

export interface Value {
  id: string
  name: string
  struct?: Struct
  source: number
}

export interface Struct {
  number: number
  unit: string
}

export interface Installments {
  quantity: number
  amount: number
  rate: number
  currency_id: string
}

export interface DifferentialPricing {
  id: number
}

export interface ProductSimple {
  id: string
  image: string
  price: number
  title: string
  officialStoreName: string
  domainId: string
}
