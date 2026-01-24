import { createContext, useState, useContext, useMemo } from "react";
import { IngredientContext } from "./IngredientContext";

/* შექმენი Context */
export const CoffeeContext = createContext();

/* Provider */
export const CoffeeProvider = ({ children }) => {
  const { ingredients } = useContext(IngredientContext);

  /* mock data */
  const [coffees, setCoffees] = useState([
    {
      id: 1,
      title: "Cappuccino",
      description: "Classic Italian coffee with milk foam.",
      ingredients: [1, 2], // Espresso Shot + Milk
      image:
        "https://images.unsplash.com/photo-1601924582970-1c449b7b6314?auto=format&fit=crop&w=800&q=80",
      country: "Italy",
      caffeine: "Medium",
    },
    {
      id: 2,
      title: "Vanilla Latte",
      description: "Coffee with steamed milk and vanilla syrup.",
      ingredients: [1, 2, 3], // Espresso + Milk + Vanilla
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      country: "USA",
      caffeine: "Medium",
    },
  ]);

  /* create coffee */
  const addCoffee = (newCoffee) => {
    const id = coffees.length > 0 ? Math.max(...coffees.map((c) => c.id)) + 1 : 1;
    setCoffees([...coffees, { ...newCoffee, id }]);
  };

  /* update coffee */
  const updateCoffee = (id, updatedData) => {
    setCoffees(coffees.map((c) => (c.id === id ? { ...c, ...updatedData } : c)));
  };

  /* delete coffee */
  const deleteCoffee = (id) => {
    setCoffees(coffees.filter((c) => c.id !== id));
  };

  /* calculate total price for coffee */
  const getTotalPrice = (coffee) => {
    const basePrice = 2;

    const ingredientsSum = coffee.ingredients.reduce((sum, ingId) => {
      const ing = ingredients.find((i) => i.id === ingId);
      return ing ? sum + ing.price : sum;
    }, 0);

    return basePrice + ingredientsSum;
  };

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        addCoffee,
        updateCoffee,
        deleteCoffee,
        getTotalPrice,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
