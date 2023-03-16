import { Cardapio, CardapioItem } from "@/app/entities/Cardapio.entity"
import { ICardapioRepository } from "@/app/interfaces/i-cardapio-repository"
import IUseCase from "@/app/interfaces/i-usecase"

type CreateCardapioParams = {
  cardapioRepository: ICardapioRepository,
  data: {
    name: string,
    description: string,
    items: CardapioItem[]
  }
}

class CreateCardapiosUseCase implements IUseCase<CreateCardapioParams, boolean> {

  async execute(params: CreateCardapioParams): Promise<boolean> {
    const { cardapioRepository, data } = params

    const cardapio = Cardapio.create(data.name, data.description, data.items)

    try {
      await cardapioRepository.create(cardapio)
      return true
    } catch (error) {
      console.error(error)
      return false
    }

  }
}

export default CreateCardapiosUseCase