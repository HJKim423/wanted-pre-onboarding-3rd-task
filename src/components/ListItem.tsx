import { Comment, Item, SubTitle, Title } from "./ListItemStyle";
import { useNavigate } from "react-router-dom";

function ListItem() {
  const navigate = useNavigate();
  const goDetailPage = () => {
    navigate("/1");
  };
  return (
    <Item onClick={goDetailPage}>
      <div>
        <Title>#111 issue title</Title>
        <SubTitle>작성자: 기모정 | 작성일: 2022년 11월 11일</SubTitle>
      </div>
      <Comment>코멘트: 1</Comment>
    </Item>
  );
}

export default ListItem;
