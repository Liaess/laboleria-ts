export default class Unauthorized extends Error {
  constructor() {
    super("Você deve ter digitado algo errado, por favor confira os dados!");

    this.name = "Unauthorized";
    Object.setPrototypeOf(this, Unauthorized.prototype);
  }
}
