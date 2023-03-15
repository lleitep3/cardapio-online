
export class Product {
  readonly id: number
  name: string
  price: number
  description = '-'
  images: string[] = []

  private constructor(name: string, price: number, description: string) {
    this.id = Math.floor(Math.random() * 1000)
    this.name = name
    this.price = price
    this.description = description
  }

  static create(name: string, price: number, description: string) {
    return new Product(name, price, description)
  }
}