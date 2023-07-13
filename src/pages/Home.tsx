import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import BannerItem from "../components/BannerItem";
import HeaderComponent from "../components/Header";
import ListItem from "../components/ListItem";
import { useListIssue } from "../context/ListIssueContext";
import { Loading, Main } from "./Style";

type HomeType = {
  listIssue: string[];
  getNextPage: Function | null;
};

type ItemType = {
  number: number;
  title: string;
  user: {
    login: string;
  };
  created_at: string;
  comments: string;
};

function Home() {
  const target = useRef<HTMLDivElement | any>(null);

  const { listIssue, getNextPage }: any = useListIssue();

  const [page, setPage] = useState(1);

  useEffect(() => {
    observer.observe(target.current);
  }, []);

  useEffect(() => {
    if (getNextPage) {
      getNextPage(page);
    }
  }, [page, setPage]);

  const options = {
    threshold: 1.0,
  };

  const callback = () => {
    setPage(page => page + 1);
  };

  const observer = new IntersectionObserver(callback, options);
  return (
    <Main>
      <HeaderComponent />
      {listIssue.map((item: ItemType, index: number) => (
        <div key={index}>
          {(index + 1) % 4 === 0 ? (
            <>
              <ListItem
                number={item.number}
                title={item.title}
                user={item.user.login}
                created_at={item.created_at}
                comments={item.comments}
              />
              <BannerItem />
            </>
          ) : (
            <ListItem
              number={item.number}
              title={item.title}
              user={item.user.login}
              created_at={item.created_at}
              comments={item.comments}
            />
          )}
        </div>
      ))}

      <Loading ref={target}>Loading...</Loading>
    </Main>
  );
}

export default Home;
