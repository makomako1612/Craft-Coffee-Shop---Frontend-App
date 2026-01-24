import { useContext } from "react";
import styled from "styled-components";
import { CurrencyContext } from "../context/CurrencyContext";

/* styled components */
const Button = styled.button`
  background: #7b4a12;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #a05c1f;
  }
`;

/* component */
function CurrencyToggle() {
  const { currency, toggleCurrency } = useContext(CurrencyContext);

  return (
    <Button onClick={toggleCurrency}>
      {currency === "GEL" ? "გადატანა USD-ში" : "გადატანა GEL-ში"}
    </Button>
  );
}

export default CurrencyToggle;
