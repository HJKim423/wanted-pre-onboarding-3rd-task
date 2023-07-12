import { useNavigate } from "react-router-dom";
import { Header } from "../pages/Style";
import { TokenRepository } from "../services/TokenRepository";

function HeaderComponent() {
  const navigate = useNavigate();
  const tokenRepository = new TokenRepository();
  return (
    <Header onClick={() => navigate("/")}>
      {tokenRepository.getOwner()} / {tokenRepository.getRepo()}
    </Header>
  );
}

export default HeaderComponent;
