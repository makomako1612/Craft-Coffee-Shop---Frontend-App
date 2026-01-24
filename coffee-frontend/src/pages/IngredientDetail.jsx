import { useParams } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";

import { IngredientContext } from "../context/IngredientContext";
import { CurrencyContext } from "../context/CurrencyContext";

/* styled components */
const Wrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  margin-bottom: 16px;
`;

const Description = styled.p`
  margin-bottom: 16px;
`;

const Info = styled.div`
  margin-bottom: 12px;
`;

const Price = styled.h2`
  color: #7b4a12;
`;

/* component */
function IngredientDetail() {
  const { id } = useParams();
  const { ingredients } = useContext(IngredientContext);
  const { currency, convertPrice } = useContext(CurrencyContext);

  const ingredient = ingredients.find((i) => i.id === Number(id));

  if (!ingredient) {
    return <Wrapper>ინგრედიენტი ვერ მოიძებნა ❌</Wrapper>;
  }

  return (
    <Wrapper>
      <Title>{ingredient.name}</Title>

      <Description>{ingredient.description}</Description>

      <Info>
        <strong>Strength:</strong> {ingredient.strength}
      </Info>

      <Info>
        <strong>Flavor:</strong> {ingredient.flavor}
      </Info>

      <Price>
        ფასი:{" "}
        {currency === "GEL"
          ? `${ingredient.price.toFixed(2)} ₾`
          : `${convertPrice(ingredient.price)} $`}
      </Price>
    </Wrapper>
  );
}

export default IngredientDetail;
