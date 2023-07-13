//interface
//get(): Promise<Todo[]>

import { HttpClient } from "../api/HttpClient";

export class ListIssueService {
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async get(page: number) {
    const response = await this.httpClient.fetch(
      `?sort=comments&page=${page}&per_page=4&state=open`
    );

    return response.json();
  }
  async getDetail(number: number) {
    if (number) {
      const response = await this.httpClient.fetch(`/${number}`);

      return response.json();
    }
  }
}
