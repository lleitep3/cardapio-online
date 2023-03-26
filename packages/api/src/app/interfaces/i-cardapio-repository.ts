import { Cardapio } from "@/app/entities/Cardapio.entity"

export interface ICardapioRepository {
  create(data: Cardapio): Promise<Cardapio | null>
  find(id: string): Promise<Cardapio | null>
  list(): Promise<Cardapio[]>
  delete(id: string): Promise<boolean>
}
