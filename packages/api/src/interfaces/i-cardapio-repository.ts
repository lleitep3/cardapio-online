import { Cardapio } from "@/entities/Cardapio.entity"

export interface ICardapioRepository {
  create(data: Cardapio): Promise<Cardapio>
  find(id: number): Promise<Cardapio>
  findAll(): Promise<Cardapio[]>
  delete(id: number): Promise<boolean>
}
