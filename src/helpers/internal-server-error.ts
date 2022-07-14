export class InternalServerError extends Error {
  statusCode: number;
  constructor(msg: string) {
    super(msg);
    this.name = "InternalServerError";
    this.statusCode = 500;
  }
}
