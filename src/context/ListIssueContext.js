import { createContext, useContext, useEffect, useState } from "react";

const ListIssueContext = createContext(null);

export const useListIssue = () => useContext(ListIssueContext);

export function ListIssueProvider({ children, ListIssueService }) {
  const [listIssue, setListIssue] = useState([]);

  const getNextPage = async page => {
    const newIssues = await ListIssueService.get(page);
    if (newIssues) {
      setListIssue(prev => [...prev, ...newIssues]);
    }
  };

  useEffect(() => {
    getNextPage();
  }, [setListIssue, ListIssueService]);

  return (
    <ListIssueContext.Provider value={{ listIssue, getNextPage }}>
      {children}
    </ListIssueContext.Provider>
  );
}
