import { usePageTitle } from "../../../core/hooks/usePageTitle";
import { Button } from "../../components/Button";

import { useNavigate } from "react-router-dom";
import notFoundImg from "../../../assets/not_found.svg";
import { Wrapper } from "./styles";

export function NotFound404View() {
  usePageTitle("404 - Página não encontrada");
  const navigate = useNavigate();

  return (
    <Wrapper>
      <span>Oops!</span>
      <h1>Não encontramos esta página</h1>
      <img
        src={notFoundImg}
        alt="Imagem de duas pessoas segurando ume extensão elétrica desconectada, representando que algo não está funcionado."
      />

      <Button
        variant="primary"
        label="Ir para a home"
        onClick={() => navigate("/", { replace: true })}
      />
    </Wrapper>
  );
}
