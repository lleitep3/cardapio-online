import { ICardapioRepository } from "@/interfaces/i-cardapio-repository"
import IUseCase from "@/interfaces/i-usecase"

type DeleteCardapioParams = {
  cardapioRepository: ICardapioRepository,
  id: number
}

export class DeleteCardapioUseCase implements IUseCase<DeleteCardapioParams, boolean> {

    async execute(params: DeleteCardapioParams): Promise<boolean> {
      const { cardapioRepository, id } = params

      try {
        await cardapioRepository.delete(id)
        return true
      } catch (error) {
        console.error(error)
        return false
      }
    }
}