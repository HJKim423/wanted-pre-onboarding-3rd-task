import { useEffect, useRef } from "react";
import BannerItem from "../components/BannerItem";
import ListItem from "../components/ListItem";
import { Header, Main } from "./Style";

function Home() {
  const target = useRef<any>(null);

  useEffect(() => {
    observer.observe(target.current);
  }, []);

  const options = {
    threshold: 1.0,
  };

  const callback = () => {
    //데이터 가져오기
    target.current.innerText += "관측되었습니다";
  };

  const observer = new IntersectionObserver(callback, options);
  return (
    <Main>
      <Header>React / facebook</Header>
      <ListItem />
      <ListItem />
      <ListItem />
      <BannerItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <BannerItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <BannerItem />
      <div ref={target}>ref</div>
    </Main>
  );
}

export default Home;
