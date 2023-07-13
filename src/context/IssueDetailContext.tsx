import { createContext, useContext, useState } from "react";
import { ListIssueType } from "./ListIssueContext";

export type DetailContextType = {
  detail: object | null;
  getNumber: Function;
};

const IssueDetailContext = createContext<DetailContextType | null>(null);

export const useIssueDetail = () =>
  useContext<DetailContextType | null>(IssueDetailContext);

export function IssueDeailProvider({
  children,
  ListIssueService,
}: ListIssueType) {
  const [detail, setDetail] = useState<Object | null>(null);

  const getNumber = async (number: number) => {
    const details: void | Function = await ListIssueService.getDetail(
      number
    ).then(setDetail);
    //undefined에러 if문 추가로 해결
    if (details) {
      setDetail(details);
    }
  };

  return (
    <IssueDetailContext.Provider value={{ detail, getNumber }}>
      {children}
    </IssueDetailContext.Provider>
  );
}
