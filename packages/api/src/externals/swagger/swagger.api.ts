import { Express } from 'express'
import { IApi } from '../http/i-api'
// import { serve, setup } from 'swagger-ui-express'
import { config } from '@/configs/config'
// import { swaggerDocument } from './swaggerDocument';

const options = {
  swaggerOptions: {
    url: 'http://localhost:5000/swagger/swagger.json',
    validatorUrl: null
  }
};

export class SwaggerAPI implements IApi {
  static configure(app: Express): void {

    if (config.env !== 'production') {

      console.info('swagger api is enabled on "/swagger" path')

      // app.use('/docs/swagger.json', (req, res) => res.send(swaggerDocument))
      // app.use('/docs', serve, setup(swaggerDocument, options))
    }

  }
}