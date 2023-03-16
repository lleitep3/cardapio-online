import { ICardapioRepository } from "@/app/interfaces/i-cardapio-repository"
import CreateCardapiosUseCase from "@/app/usecases/create-cardapio"

const cardapioRepository: ICardapioRepository = {
  create: jest.fn().mockImplementation((cardapio) => cardapio.name === 'Cardapio 1'
    ? Promise.resolve(cardapio)
    : Promise.reject(new Error('Cardapio already exists'))),

  find: jest.fn(),
  list: jest.fn(),
  delete: jest.fn()
}

describe('Create cardapio', () => {
  it('should create a cardapio', async () => {

    const createCardapioUseCase = new CreateCardapiosUseCase()
    const data = {
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

    const ok = await createCardapioUseCase.execute({ cardapioRepository, data })

    expect(ok).toBeTruthy()
  })

  it('should NOT create a cardapio', async () => {

    const createCardapioUseCase = new CreateCardapiosUseCase()
    const data = {
      name: 'Cardapio 2',
      description: 'Cardapio 2 description',
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

    const fail = await createCardapioUseCase.execute({ cardapioRepository, data })

    expect(fail).toBeFalsy()
  })
})