import { useParams } from "react-router-dom";
import { useContext, useMemo } from "react";
import styled from "styled-components";

import { CoffeeContext } from "../context/CoffeeContext";
import { IngredientContext } from "../context/IngredientContext";
import { CurrencyContext } from "../context/CurrencyContext";

/* styled components */
const Wrapper = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 24px;
`;

const Description = styled.p`
  margin-bottom: 16px;
`;

const Info = styled.div`
  margin-bottom: 16px;
`;

const Price = styled.h2`
  color: #7b4a12;
`;

const IngredientList = styled.ul`
  margin-top: 16px;
`;

const IngredientItem = styled.li`
  padding: 8px 0;
  border-bottom: 1px solid #e5e5e5;
`;

/* component */
function CoffeeDetails() {
  const { id } = useParams();

  const { coffees } = useContext(CoffeeContext);
  const { ingredients } = useContext(IngredientContext);
  const { currency, convertPrice } = useContext(CurrencyContext);

  const coffee = coffees.find((c) => c.id === Number(id));

  const totalPrice = useMemo(() => {
    if (!coffee) return 0;

    const basePrice = 2;

    const ingredientsPrice = coffee.ingredients.reduce((sum, ingId) => {
      const ing = ingredients.find((i) => i.id === ingId);
      return ing ? sum + ing.price : sum;
    }, 0);

    return basePrice + ingredientsPrice;
  }, [coffee, ingredients]);

  if (!coffee) {
    return <Wrapper>ყავა ვერ მოიძებნა ☕❌</Wrapper>;
  }

  return (
    <Wrapper>
      <Title>{coffee.title}</Title>

      <Image src={coffee.image} alt={coffee.title} />

      <Description>{coffee.description}</Description>

      <Info>
        <strong>ქვეყანა:</strong> {coffee.country}
      </Info>

      <Info>
        <strong>კოფეინი:</strong> {coffee.caffeine}
      </Info>

      <Price>
        ფასი:{" "}
        {currency === "GEL"
          ? `${totalPrice.toFixed(2)} ₾`
          : `${convertPrice(totalPrice)} $`}
      </Price>

      <IngredientList>
        <h3>ინგრედიენტები</h3>
        {coffee.ingredients.map((ingId) => {
          const ing = ingredients.find((i) => i.id === ingId);
          return ing ? (
            <IngredientItem key={ing.id}>
              {ing.name} — {ing.price} ₾
            </IngredientItem>
          ) : null;
        })}
      </IngredientList>
    </Wrapper>
  );
}

export default CoffeeDetails;
