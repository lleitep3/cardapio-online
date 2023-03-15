import { ICardapioRepository } from "@/interfaces/i-cardapio-repository"
import { DeleteCardapioUseCase } from "@/usecases/delete-cardapio"

const cardapioRepository: ICardapioRepository = {
  create: jest.fn(),
  find: jest.fn(),
  findAll: jest.fn(),
  delete: jest.fn().mockImplementation((id) => id === 1
    ? Promise.resolve(true)
    : Promise.reject(new Error('unable to delete cardapio'))),
}

describe('Delete cardapio', () => {
  it('should delete a cardapio', async () => {
    const useCase = new DeleteCardapioUseCase()

    const ok = await useCase.execute({ cardapioRepository, id: 1 })

    expect(ok).toBeTruthy()
  })

  it('should NOT delete a cardapio', async () => {
    const useCase = new DeleteCardapioUseCase()

    const fail = await useCase.execute({ cardapioRepository, id: 2 })

    expect(fail).toBeFalsy()
  })
})