
export class Product {
  readonly id: number
  images: string[] = []

  private constructor(
    public readonly name: string = 'no name',
    public readonly price: number = 0,
    public readonly description: string = 'no description',
    public readonly createdAt: Date = new Date()
  ) {
    this.id = Math.floor(Math.random() * 1000)
  }

  static create(name: string, price: number, description: string) {
    return new Product(name, price, description)
  }
}