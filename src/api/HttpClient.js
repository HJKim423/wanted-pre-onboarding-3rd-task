//HttpClientInterface
//fetch(endPoint, options): Promise<Response>

export class HttpClient {
  constructor(baseURL, tokenRepository) {
    this.baseURL = baseURL;
    this.tokenRepository = tokenRepository;
  }

  fetch(endPoint, options = {}) {
    return window.fetch(`${this.baseURL + endPoint}`, {
      ...options,
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        Authorization: "Bearer " + this.tokenRepository.get(),
        ...options.headers,
      },
    });
  }
}
