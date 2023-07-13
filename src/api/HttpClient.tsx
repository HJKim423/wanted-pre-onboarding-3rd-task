//HttpClientInterface
//fetch(endPoint, options): Promise<Response>

import { TokenRepository } from "../services/TokenRepository";

export class HttpClient {
  tokenRepository: TokenRepository;
  baseURL: string;
  constructor(baseURL: string, tokenRepository: TokenRepository) {
    this.baseURL = baseURL;
    this.tokenRepository = tokenRepository;
  }

  fetch(endPoint: string, options = {}) {
    return window.fetch(`${this.baseURL + endPoint}`, {
      ...options,
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        Authorization: "Bearer " + this.tokenRepository.get(),
        // ...options.headers,
      },
    });
  }
}
