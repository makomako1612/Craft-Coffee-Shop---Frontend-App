import { createContext, useEffect, useState } from 'react';

export const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const storedIngredients =
      JSON.parse(localStorage.getItem('ingredients')) || [];
    const storedCoffees =
      JSON.parse(localStorage.getItem('coffees')) || [];

    setIngredients(storedIngredients);
    setCoffees(storedCoffees);
  }, []);

  return (
    <CoffeeContext.Provider value={{ ingredients, coffees }}>
      {children}
    </CoffeeContext.Provider>
  );
};
