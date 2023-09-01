import { Container } from "./style";
import viteLogo from '/vite.svg'

export default function Header() {
  return (
    <Container>
      <img src={viteLogo} className="logo" alt="Vite logo" />
    </Container>
  );
}