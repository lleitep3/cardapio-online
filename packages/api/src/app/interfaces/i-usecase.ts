
export default interface IUseCase<T, R> {
  execute(params: T): Promise<R>
}