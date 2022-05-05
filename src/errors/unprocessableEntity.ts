export default class UnprocessableEntity extends Error {
  constructor() {
    super("Não foi possível processar os dados passados");

    this.name = "UnprocessableEntity";
    Object.setPrototypeOf(this, UnprocessableEntity.prototype);
  }
}
