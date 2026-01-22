import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';

const CoffeeDetail = () => {
  const { id } = useParams();
  const { coffees } = useContext(CoffeeContext);

  const coffee = coffees.find((c) => c.id === Number(id));

  if (!coffee) return <p>Not found</p>;

  return (
    <>
      <h3>{coffee.title}</h3>
      <p>Total price: {coffee.totalPrice} ₾</p>
    </>
  );
};

export default CoffeeDetail;
