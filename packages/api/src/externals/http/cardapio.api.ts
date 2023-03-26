import { IApi } from "./i-api"
import { Express, Request, Response } from "express"
import { CardapioRepository } from "@/externals/repositories/Cardapio.repository"
import { Cardapio } from "@/app/entities/Cardapio.entity"
import CreateCardapiosUseCase from "@/app/usecases/create-cardapio"
import { DeleteCardapioUseCase } from "@/app/usecases/delete-cardapio"
import { ListCardapiosUseCase } from "@/app/usecases/list-cardapios"

class CardapioController {
  async list(req: Request, res: Response) {
    try {
      const cardapioRepository = new CardapioRepository()

      const result = new ListCardapiosUseCase().execute({
        cardapioRepository
      })

      res.json({ status: 'list ok', cardapios: result })
    } catch (error) {
      console.error(error)
      res.status(500).json({ status: 'error', error })
    }
  }

  async create(req: Request, res: Response) {
    try {

      const result = new CreateCardapiosUseCase().execute({
        cardapioRepository: new CardapioRepository(),
        data: req.body
      })

      res.json({ status: 'ok', data: result })
    } catch (error) {
      console.error(error)
      res.status(500).json({ status: 'error', error })
    }
  }

  async delete(req: Request, res: Response) {
    try {

      const result = new DeleteCardapioUseCase().execute({
        cardapioRepository: new CardapioRepository(),
        id: req.params.id
      })

      res.json({ status: 'ok', data: result })
    } catch (error) {
      console.error(error)
      res.status(500).json({ status: 'error', error })
    }
  }
}

export class CardapioAPI implements IApi {
  static configure(app: Express): void {

    const controller = new CardapioController()

    app.get('/cardapios', controller.list)
    app.post('/cardapios', controller.create)
    app.delete('/cardapios/:id', controller.delete)

  }
}