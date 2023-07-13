import { createContext, useContext, useState } from "react";
import { ListIssueService } from "../services/ListIssuesService";

type ContextType = {
  listIssue: string[];
  getNextPage: Function;
};
export type ListIssueType = {
  children: React.ReactElement;
  ListIssueService: ListIssueService;
};

const ListIssueContext = createContext<ContextType | null>(null);

export const useListIssue = () => useContext(ListIssueContext);

export function ListIssueProvider({
  children,
  ListIssueService,
}: ListIssueType) {
  const [listIssue, setListIssue] = useState<string[]>([]);

  const getNextPage = async (page: number) => {
    const newIssues = await ListIssueService.get(page);
    if (newIssues) {
      setListIssue((prev: string[]) => [...prev, ...newIssues]);
    }
  };

  return (
    <ListIssueContext.Provider value={{ listIssue, getNextPage }}>
      {children}
    </ListIssueContext.Provider>
  );
}
