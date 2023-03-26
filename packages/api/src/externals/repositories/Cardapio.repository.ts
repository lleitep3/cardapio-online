import { Cardapio } from "@/app/entities/Cardapio.entity"
import { ICardapioRepository } from "@/app/interfaces/i-cardapio-repository"
import { CardapioModel } from "@/externals/database/Cardapio.model"

export class CardapioRepository implements ICardapioRepository {
  async find(id: string): Promise<Cardapio | null> {
    return CardapioModel.findOne({ id })
  }

  async list(): Promise<Cardapio[]> {
    try {
      return await CardapioModel.find()
    } catch (error) {
      console.error(error)
      return []
    }
  }

  async create(cardapio: Cardapio): Promise<Cardapio | null> {
    try {
      return await CardapioModel.create(cardapio)
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await CardapioModel.deleteOne({ id })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}