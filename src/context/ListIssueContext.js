import { createContext, useContext, useEffect, useState } from "react";

const ListIssueContext = createContext(null);

export const useListIssue = () => useContext(ListIssueContext);

export function ListIssueProvider({ children, ListIssueService }) {
  const [listIssue, setListIssue] = useState([]);

  useEffect(() => {
    ListIssueService.get().then(setListIssue);
  }, [setListIssue, ListIssueService]);

  return (
    <ListIssueContext.Provider value={{ listIssue }}>
      {children}
    </ListIssueContext.Provider>
  );
}
