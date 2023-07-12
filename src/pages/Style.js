import styled from "styled-components";
import { Item } from "../components/ListItemStyle";

export const Main = styled.div`
  border: 2px solid black;
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 650px;
  margin: auto;
  margin-top: 130px;
  overflow-y: scroll;
  overflow-x: hidden;

  & > div {
    width: 100%;
  }
`;

export const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  font-size: 16px;
  padding: 20px 0;
  width: 100%;
`;

export const DetailTitle = styled(Item)`
  &:hover {
    background: white;
    cursor: auto;
  }
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  margin-right: -10px;
`;

export const Loading = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const NotFoundText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  margin-top: 200px;
  margin-bottom: 40px;
`;

export const GotoMainButton = styled.button`
  padding: 10px 30px;
  cursor: pointer;
`;
