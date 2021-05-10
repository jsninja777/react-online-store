export type ProductColor = {
  name: string
  code: string
}

export type ProductType = {
  id?: string
  title: string
  picture: string
  description: string
  price: number
  sizes: string[]
  colors: ProductColor[]
}

export type CartItemType = {
  id: string
  product: ProductType
  color: string
  size: string
  quantity: number
}
