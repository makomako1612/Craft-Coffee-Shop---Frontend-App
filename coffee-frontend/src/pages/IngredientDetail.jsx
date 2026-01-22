import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';

const IngredientDetail = () => {
  const { id } = useParams();
  const { ingredients } = useContext(CoffeeContext);

  const ingredient = ingredients.find((i) => i.id === Number(id));

  if (!ingredient) return <p>Not found</p>;

  return (
    <>
      <h3>{ingredient.name}</h3>
      <p>Price: {ingredient.price} ₾</p>
    </>
  );
};

export default IngredientDetail;
