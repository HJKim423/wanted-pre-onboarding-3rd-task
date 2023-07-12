import React from "react";
import ReactDOM from "react-dom/client";
import { HttpClient } from "./api/HttpClient";
import App from "./App";
import { IssueDeailProvider } from "./context/IssueDetailContext";
import { ListIssueProvider } from "./context/ListIssueContext";
import { ListIssueService } from "./services/ListIssuesService";
import { TokenRepository } from "./services/TokenRepository";

const root = ReactDOM.createRoot(document.getElementById("root"));

const tokenRepository = new TokenRepository();
const httpClient = new HttpClient(
  `https://api.github.com/repos/${tokenRepository.getOwner()}/${tokenRepository.getRepo()}/issues`,
  tokenRepository
);
const listIssueService = new ListIssueService(httpClient);

root.render(
  <ListIssueProvider ListIssueService={listIssueService}>
    <IssueDeailProvider ListIssueService={listIssueService}>
      <App />
    </IssueDeailProvider>
  </ListIssueProvider>
);
