import { useContext } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Ingredients = () => {
  const { ingredients } = useContext(CoffeeContext);

  return (
    <>
      <h2>Ingredients</h2>
      {ingredients.map((ing) => (
        <Card key={ing.id}>
          <Link to={`/ingredients/${ing.id}`}>{ing.name}</Link>
        </Card>
      ))}
    </>
  );
};

export default Ingredients;
