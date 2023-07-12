import { Header } from "../pages/Style";
import { TokenRepository } from "../services/TokenRepository";

function HeaderComponent() {
  const tokenRepository = new TokenRepository();
  return (
    <Header>
      {tokenRepository.getOwner()} / {tokenRepository.getRepo()}
    </Header>
  );
}

export default HeaderComponent;
