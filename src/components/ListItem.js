import { Comment, Item, SubTitle, Title } from "./ListItemStyle";
import { useNavigate } from "react-router-dom";
import { getDateFormat } from "../utils/DateFormat";

function ListItem({ number, title, user, created_at, comments }) {
  const navigate = useNavigate();

  const goDetailPage = () => {
    navigate(`/detail/${number}`);
  };
  return (
    <Item onClick={goDetailPage}>
      <div>
        <Title>
          #{number} {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </Title>
        <SubTitle>
          작성자: {user} | 작성일: {getDateFormat(created_at)}
        </SubTitle>
      </div>
      <Comment>코멘트: {comments}</Comment>
    </Item>
  );
}

export default ListItem;
