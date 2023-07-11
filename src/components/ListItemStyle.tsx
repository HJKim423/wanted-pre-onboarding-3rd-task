import styled from "styled-components";

export const Item = styled.div`
  padding: 20px 0;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: #ededed;
  }
`;

export const Banner = styled(Item)`
  &:hover {
    background: white;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;
export const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: gray;
`;
export const Comment = styled.div`
  font-size: 14px;
`;
