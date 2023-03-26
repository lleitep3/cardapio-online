import { Product } from "./Product.entity"

export type CardapioItem = Product & { order: number }

export class Cardapio {
  readonly id: string
  status: 'active' | 'inactive' = 'active'

  private constructor(
    public readonly name: string = 'no name',
    public readonly description: string = 'no description',
    public readonly items: CardapioItem[] = [],
    public readonly createdAt: Date = new Date()
  ) {
    this.id = '' + Math.floor(Math.random() * 1000)
  }

  static create(name: string, description: string, items: CardapioItem[]) {
    return new Cardapio(name, description, items)
  }
}