import { useNavigate } from "react-router-dom";
import { GotoMainButton, Main, NotFoundText } from "./Style";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Main>
      <NotFoundText>Not Found</NotFoundText>
      <GotoMainButton onClick={() => navigate("/")}>
        Go To Issue List
      </GotoMainButton>
    </Main>
  );
}

export default NotFound;
