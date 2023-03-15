import { IApi } from "./i-api"
import { Express, Request, Response } from "express"
import { CardapioRepository } from "@/externals/repositories/Cardapio.repository"
import { Cardapio } from "@/entities/Cardapio.entity"

class CardapioController {
  async list(req: Request, res: Response) {
    try {
      const cardapioRepository = new CardapioRepository()
      const cardapios = await cardapioRepository.list()

      res.json({ status: 'list ok', cardapios })
    } catch (error) {
      console.error(error)
      res.status(500).json({ status: 'error', error })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const cardapioRepository = new CardapioRepository()
      const { name, description, items } = req.body
      const cardapio = Cardapio.create(name, description, items)
      const newCardapio = await cardapioRepository.create(cardapio)

      res.json({ status: 'ok', newCardapio })
    } catch (error) {
      console.error(error)
      res.status(500).json({ status: 'error', error })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const cardapioRepository = new CardapioRepository()
      const { id } = req.body
      const deleted = await cardapioRepository.delete(id)

      res.json({ status: 'ok', deleted })
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