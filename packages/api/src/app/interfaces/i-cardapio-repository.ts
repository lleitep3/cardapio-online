import { Cardapio } from "@/app/entities/Cardapio.entity"

export interface ICardapioRepository {
  create(data: Cardapio): Promise<Cardapio | null>
  find(id: number): Promise<Cardapio | null>
  list(): Promise<Cardapio[]>
  delete(id: number): Promise<boolean>
}
