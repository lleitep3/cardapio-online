import { IApi } from "./i-api"
import { Express, Request, Response } from "express"

class CardapioController {
  list(req: Request, res: Response) {
    res.json({ status: 'list ok', cardapios: [] })
  }

  create(req: Request, res: Response) {
    res.json({ status: 'create ok' })
  }

  delete(req: Request, res: Response) {
    res.json({ status: 'delete ok' })
  }
}

export class CardapioAPI implements IApi {
  configure(app: Express): void {

    const controller = new CardapioController()

    app.get('/', controller.list)
    app.post('/', controller.create)
    app.delete('/', controller.delete)

  }
}