import { Link } from "react-router-dom";
import styled from "styled-components";
import CurrencyToggle from "./CurrencyToggle";

/* styled components */
const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #7b4a12;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #7b4a12;
  font-weight: 500;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

/* component */
function Header() {
  return (
    <HeaderWrapper>
      <Logo>Craft Coffee Shop</Logo>

      <Nav>
        <NavLink to="/coffees">ყავა</NavLink>
        <NavLink to="/ingredients">ინგრედიენტები</NavLink>
        <CurrencyToggle />
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
