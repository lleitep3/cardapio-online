import { IApi } from "./i-api"
import { config } from "../../config"
import { Express, Request, Response } from "express"

export class HealthcheckAPI implements IApi {
  configure(app: Express): void {

    app.get('/healthcheck', (req: Request, res: Response) => {
      res.setHeader('Content-Type', 'application/json')
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')

      res.send({
        status: 'ok',
        env: config.env,
        appName: config.appName,
        currentTime: new Date().toISOString(),
        version: process.env.npm_package_version,
      })
    })

  }
}