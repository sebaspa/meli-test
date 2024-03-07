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
  currencyId: string
}

export interface ProductSingle {
  id: string
  site_id: string
  title: string
  seller_id: number
  category_id: string
  official_store_id: number
  price: number
  base_price: number
  original_price: any
  currency_id: string
  initial_quantity: number
  sale_terms: SaleTerm[]
  buying_mode: string
  listing_type_id: string
  condition: string
  permalink: string
  thumbnail_id: string
  thumbnail: string
  pictures: Picture[]
  video_id: any
  descriptions: any[]
  accepts_mercadopago: boolean
  non_mercado_pago_payment_methods: any[]
  shipping: Shipping
  international_delivery_mode: string
  seller_address: SellerAddress
  seller_contact: any
  location: Location
  coverage_areas: any[]
  attributes: Attribute[]
  listing_source: string
  variations: any[]
  status: string
  sub_status: any[]
  tags: string[]
  warranty: string
  catalog_product_id: string
  domain_id: string
  parent_item_id: any
  deal_ids: any[]
  automatic_relist: boolean
  date_created: string
  last_updated: string
  health: any
  catalog_listing: boolean
}

export interface SearchProduct {
  product: ProductSingle
  filters: Filters[]
}

export interface SaleTerm {
  id: string
  name: string
  value_id?: string
  value_name: string
  value_struct?: ValueStruct
  values: Value[]
  value_type: string
}

export interface Picture {
  id: string
  url: string
  secure_url: string
  size: string
  max_size: string
  quality: string
}

export interface SellerAddress {
  city: City
  state: State
  country: Country
  search_location: SearchLocation
  id: number
}

export interface City {
  name: string
}

export interface State {
  id: string
  name: string
}

export interface Country {
  id: string
  name: string
}

export interface SearchLocation {
  neighborhood: Neighborhood
  city: City2
  state: State2
}

export interface Neighborhood {
  id: string
  name: string
}

export interface City2 {
  id: string
  name: string
}

export interface State2 {
  id: string
  name: string
}

export interface Value2 {
  id?: string
  name: string
  struct?: Struct2
}

export interface Struct2 {
  number: number
  unit: string
}

export interface PathFromRoot {
  id: string
  name: string
}

export interface valueFilter {
  id: string
  name: string
  path_from_root: PathFromRoot[]
}

export interface Filters {
  id: string
  name: string
  type: string
  values: valueFilter[]
}

export interface SearchResults {
  products: Product[]
  filters: Filters[]
}
