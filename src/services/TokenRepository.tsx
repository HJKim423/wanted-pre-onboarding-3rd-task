export class TokenRepository {
  TOKEN_KEY = process.env.REACT_APP_API_KEY;

  get() {
    return this.TOKEN_KEY;
  }

  getOwner() {
    return "facebook";
  }

  getRepo() {
    return "react";
  }
}
