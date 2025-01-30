export class ServiceError extends Error {
  constructor(
    message: string,
    public errorCode?: number,
    private isToast?: boolean,
  ) {
    super(message);
    this.name = "ServiceError";
  }
}
