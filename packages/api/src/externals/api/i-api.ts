
export abstract class IApi {
  static configure(app: Express.Application): void {
    throw new Error('Method not implemented.')
  }
}