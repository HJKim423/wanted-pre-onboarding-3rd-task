//interface
//get(): Promise<Todo[]>

export class ListIssueService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async get() {
    const response = await this.httpClient.fetch("");

    return response.json();
  }
  async getDetail(number) {
    // console.log(number, "서비스");
    if (number) {
      const response = await this.httpClient.fetch(`/${number}`);

      return response.json();
    }
  }
}
