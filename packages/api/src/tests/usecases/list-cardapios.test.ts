import { ICardapioRepository } from "@/interfaces/i-cardapio-repository"
import { ListCardapiosUseCase } from "@/usecases/list-cardapios"

describe('List cardapios', () => {
  it('should list a cardapio', async () => {

    const cardapioRepository: ICardapioRepository = {
      create: jest.fn(),
      find: jest.fn(),
      delete: jest.fn(),
      findAll: jest.fn().mockImplementation(() => Promise.resolve([
        {
          id: 1,
          name: 'Cardapio 1',
          description: 'Cardapio 1 description',
          items: [
            {
              id: 1,
              name: 'Item 1',
              description: 'Item 1 description',
              images: ['image.png'],
              order: 1,
              price: 10
            }
          ]
        }
      ]))
    }

    const useCase = new ListCardapiosUseCase()

    const ok = await useCase.execute({ cardapioRepository })

    expect(ok[0].id).toBe(1)
  })

  it('should NOT list a cardapio', async () => {

    const cardapioRepository: ICardapioRepository = {
      create: jest.fn(),
      find: jest.fn(),
      delete: jest.fn(),
      findAll: jest.fn().mockImplementation(() => Promise.resolve([]))
    }

    const useCase = new ListCardapiosUseCase()

    const fail = await useCase.execute({ cardapioRepository })

    expect(JSON.stringify(fail)).toBe('[]')
  })
})