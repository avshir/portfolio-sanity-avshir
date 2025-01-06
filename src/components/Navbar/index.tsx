import { Container } from "../Container";
import FlyoutMenu from "./FlyoutMenu";

const Navbar = () => {
  return (
    <header className="bg-black py-4">
      <Container>
        <FlyoutMenu />
      </Container>
    </header>
  );
};

export default Navbar;
