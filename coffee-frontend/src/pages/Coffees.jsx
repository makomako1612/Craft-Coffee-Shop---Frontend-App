import React, { useContext } from "react";
import styled from "styled-components";
import { CoffeeContext } from "../context/CoffeeContext";
import { IngredientContext } from "../context/IngredientContext";
import { CurrencyContext } from "../context/CurrencyContext";
import CoffeeCard from "../components/CoffeeCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
`;

function Coffees() {
  const { coffees, getTotalPrice } = useContext(CoffeeContext);
  const { ingredients } = useContext(IngredientContext);
  const { currency, convertPrice } = useContext(CurrencyContext);

  return (
    <Grid>
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          coffee={coffee}
          ingredients={ingredients}
          currency={currency}
          convertPrice={convertPrice}
          getTotalPrice={getTotalPrice}
        />
      ))}
    </Grid>
  );
}

export default Coffees;


