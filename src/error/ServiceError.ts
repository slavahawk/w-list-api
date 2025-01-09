export class ServiceError extends Error {
  constructor(
    message: string,
    public errorCode?: number,
  ) {
    super(message);
    this.name = "ServiceError";
  }
}
