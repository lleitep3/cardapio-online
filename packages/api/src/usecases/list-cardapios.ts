import { Cardapio } from "@/entities/Cardapio.entity"
import { ICardapioRepository } from "@/interfaces/i-cardapio-repository"
import IUseCase from "@/interfaces/i-usecase"

type ListCardapiosParams = {
  cardapioRepository: ICardapioRepository
}

export class ListCardapiosUseCase implements IUseCase<ListCardapiosParams, Cardapio[]> {

  async execute(params: ListCardapiosParams): Promise<Cardapio[]> {
    const { cardapioRepository } = params

    try {
      const cardapios = await cardapioRepository.findAll()

      return cardapios
    } catch (error) {
      console.error(error)
      return []
    }
  }
}
