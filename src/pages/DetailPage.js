import HeaderComponent from "../components/Header";
import { useIssueDetail } from "../context/IssueDetailContext";
import { Body, Main } from "./Style";
import { Comment, Item, SubTitle, Title } from "../components/ListItemStyle";
import { getDateFormat } from "../utils/DateFormat";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { detail, getNumber } = useIssueDetail();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNumber(id);
  }, []);

  useEffect(() => {
    if (detail) {
      setLoading(false);
    }
  }, [detail, getNumber]);

  return (
    <Main>
      <HeaderComponent />
      {loading ? (
        <div>로딩중</div>
      ) : (
        <>
          <Item>
            <div>
              <Title>
                #{detail.number}
                {detail.title}
              </Title>
              <SubTitle>
                작성자 : {detail.user.login} | 작성일 :
                {getDateFormat(detail.created_at)}
              </SubTitle>
            </div>
            <Comment>코멘트: {detail.comments}</Comment>
          </Item>
          <Body>{detail.body}</Body>
        </>
      )}
    </Main>
  );
}

export default DetailPage;
