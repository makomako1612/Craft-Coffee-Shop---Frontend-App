import { useContext } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Coffees = () => {
  const { coffees } = useContext(CoffeeContext);

  return (
    <>
      <h2>Coffees</h2>
      {coffees.map((coffee) => (
        <Card key={coffee.id}>
          <Link to={`/coffees/${coffee.id}`}>{coffee.title}</Link>
          <p>{coffee.totalPrice} ₾</p>
        </Card>
      ))}
    </>
  );
};

export default Coffees;
