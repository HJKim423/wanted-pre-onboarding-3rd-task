//interface
//get(): Promise<Todo[]>

export class ListIssueService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async get(page) {
    const response = await this.httpClient.fetch(
      `?sort=comments&page=${page}&per_page=4`
    );

    return response.json();
  }
  async getDetail(number) {
    if (number) {
      const response = await this.httpClient.fetch(`/${number}`);

      return response.json();
    }
  }
}
