import { Product } from "./Product.entity"

export type CardapioItem = Product & { order: number }

export class Cardapio {
  readonly id: number
  name: string
  description = '-'
  items: CardapioItem[] = []
  status: 'active' | 'inactive' = 'active'
  createdAt: Date

  private constructor(name: string, description: string, items: CardapioItem[]) {
    this.id = Math.floor(Math.random() * 1000)
    this.name = name
    this.description = description
    this.items = items
    this.createdAt = new Date()
  }

  static create(name: string, description: string, items: CardapioItem[]) {
    return new Cardapio(name, description, items)
  }
}