import { Link } from "react-router-dom";
import styled from "styled-components";

/* styled components */
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  padding: 16px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Name = styled.h3`
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

  &:hover {
    text-decoration: underline;
  }
`;

/* component */
function IngredientCard({ ingredient, currency, convertPrice }) {
  return (
    <Card>
      <Name>{ingredient.name}</Name>
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
  );
}

export default IngredientCard;
