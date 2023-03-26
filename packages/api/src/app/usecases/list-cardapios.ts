import { Cardapio } from "@/app/entities/Cardapio.entity"
import { ICardapioRepository } from "@/app/interfaces/i-cardapio-repository"
import IUseCase from "@/app/interfaces/i-usecase"

type ListCardapiosParams = {
  cardapioRepository: ICardapioRepository
}

export class ListCardapiosUseCase implements IUseCase<ListCardapiosParams, Cardapio[]> {

  async execute(params: ListCardapiosParams): Promise<Cardapio[]> {
    const { cardapioRepository } = params

    try {
      const cardapios = await cardapioRepository.list()

      return cardapios
    } catch (error) {
      console.error(error)
      return []
    }
  }
}
