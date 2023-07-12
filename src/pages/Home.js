import { useEffect, useRef } from "react";
import BannerItem from "../components/BannerItem";
import HeaderComponent from "../components/Header";
import ListItem from "../components/ListItem";
import { useListIssue } from "../context/ListIssueContext";
import { Main } from "./Style";

function Home() {
  const target = useRef(null);

  const { listIssue } = useListIssue();
  console.log(listIssue);

  useEffect(() => {
    observer.observe(target.current);
  }, []);

  const options = {
    threshold: 1.0,
  };

  const callback = () => {
    //데이터 가져오기
    // target.current.innerText += "관측되었습니다";
  };

  const observer = new IntersectionObserver(callback, options);
  return (
    <Main>
      <HeaderComponent />
      {listIssue.map((item, index) => (
        <ListItem
          key={index}
          number={item.number}
          title={item.title}
          user={item.user.login}
          created_at={item.created_at}
          comments={item.comments}
        />
      ))}

      <BannerItem />
      <div ref={target}>ref</div>
    </Main>
  );
}

export default Home;
