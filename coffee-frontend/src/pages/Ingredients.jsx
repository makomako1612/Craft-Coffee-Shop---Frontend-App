
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IngredientContext } from "../context/IngredientContext";
import { CurrencyContext } from "../context/CurrencyContext";

/* styled components */
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  margin-bottom: 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  padding: 16px;
`;

const IngredientName = styled.h3`
  margin-bottom: 8px;
`;

const Flavor = styled.p`
  font-size: 14px;
  color: #666;
`;

const Strength = styled.p`
  font-size: 14px;
  color: #666;
`;

const Price = styled.p`
  margin-top: 12px;
  font-weight: bold;
  color: #7b4a12;
`;

const DetailsLink = styled(Link)`
  display: inline-block;
  margin-top: 12px;
  color: #7b4a12;
  font-weight: 500;
`;

/* component */
function Ingredients() {
  const { ingredients } = useContext(IngredientContext);
  const { currency, convertPrice } = useContext(CurrencyContext);

  return (
    <Wrapper>
      <Title>🧂 ინგრედიენტების კატალოგი</Title>

      <Grid>
        {ingredients.map((ingredient) => (
          <Card key={ingredient.id}>
            <IngredientName>{ingredient.name}</IngredientName>
            <Flavor>Flavor: {ingredient.flavor}</Flavor>
            <Strength>Strength: {ingredient.strength}</Strength>
            <Price>
              ფასი:{" "}
              {currency === "GEL"
                ? `${ingredient.price.toFixed(2)} ₾`
                : `${convertPrice(ingredient.price)} $`}
            </Price>

            <DetailsLink to={`/ingredients/${ingredient.id}`}>
              დეტალები →
            </DetailsLink>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default Ingredients;

