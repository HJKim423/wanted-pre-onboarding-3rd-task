import HeaderComponent from "../components/Header";
import { useIssueDetail } from "../context/IssueDetailContext";
import { Avatar, Body, DetailTitle, Loading, Main } from "./Style";
import { Comment, SubTitle, Title } from "../components/ListItemStyle";
import { getDateFormat } from "../utils/DateFormat";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function DetailPage() {
  const { detail, getNumber }: any = useIssueDetail();
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
        <Loading>Loading...</Loading>
      ) : (
        <>
          <DetailTitle>
            <Avatar src={detail.user.avatar_url} />
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
          </DetailTitle>
          <Body>
            <ReactMarkdown>{detail.body}</ReactMarkdown>
          </Body>
        </>
      )}
    </Main>
  );
}

export default DetailPage;
