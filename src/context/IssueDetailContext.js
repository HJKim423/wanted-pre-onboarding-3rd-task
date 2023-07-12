import { createContext, useContext, useEffect, useState } from "react";

const IssueDetailContext = createContext(null);

export const useIssueDetail = () => useContext(IssueDetailContext);

export function IssueDeailProvider({ children, ListIssueService }) {
  const [detail, setDetail] = useState(null);

  const getNumber = async number => {
    const details = await ListIssueService.getDetail(number).then(setDetail);
    if (details) {
      setDetail(details);
    }
  };

  useEffect(() => {
    getNumber();
  }, [ListIssueService]);

  return (
    <IssueDetailContext.Provider value={{ detail, getNumber }}>
      {children}
    </IssueDetailContext.Provider>
  );
}
