
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h3`
  margin: 0;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.85rem;
  color: #777;
`;

const Price = styled.p`
  font-weight: bold;
  margin-top: auto;
`;

function CoffeeCard({ coffee, ingredients, currency, convertPrice, getTotalPrice }) {
  // გამოთვალე totalPrice ავტომატურად
  const totalPriceGEL = getTotalPrice(coffee, ingredients);

  return (
    <Card>
      <Title>{coffee.title}</Title>
      <Description>{coffee.description}</Description>

      <IngredientsList>
        {coffee.ingredients.map((id) => {
          const ing = ingredients.find((i) => i.id === id);
          return ing ? <li key={id}>{ing.name}</li> : null;
        })}
      </IngredientsList>

      <Price>
        ფასი:{" "}
        {currency === "GEL"
          ? `${totalPriceGEL.toFixed(2)} ₾`
          : `${convertPrice(totalPriceGEL).toFixed(2)} $`}
      </Price>
    </Card>
  );
}

export default CoffeeCard;

