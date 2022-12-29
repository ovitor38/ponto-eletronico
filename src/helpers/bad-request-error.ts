export class BadRequestError extends Error {
  statusCode: number;
  constructor(msg: string) {
    super(msg);
    this.name = "BadRequest";
    this.statusCode = 400;
  }
}
