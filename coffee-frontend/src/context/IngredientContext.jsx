import { createContext, useState } from "react";

/* შექმენი Context */
export const IngredientContext = createContext();

/* Provider */
export const IngredientProvider = ({ children }) => {
  /* mock data */
  const [ingredients, setIngredients] = useState([
    {
      id: 1,
      name: "Espresso Shot",
      price: 1.5,
      description: "Strong coffee base for espresso drinks.",
      strength: "High",
      flavor: "Bitter",
    },
    {
      id: 2,
      name: "Milk",
      price: 0.5,
      description: "Fresh cow milk for lattes and cappuccinos.",
      strength: "Medium",
      flavor: "Creamy",
    },
    {
      id: 3,
      name: "Vanilla Syrup",
      price: 0.7,
      description: "Sweet vanilla flavoring for your coffee.",
      strength: "Low",
      flavor: "Sweet",
    },
  ]);

  /* create ingredient */
  const addIngredient = (newIngredient) => {
    const id = Math.max(...ingredients.map((i) => i.id)) + 1;
    setIngredients([...ingredients, { ...newIngredient, id }]);
  };

  /* update ingredient */
  const updateIngredient = (id, updatedData) => {
    setIngredients(
      ingredients.map((i) => (i.id === id ? { ...i, ...updatedData } : i))
    );
  };

  /* delete ingredient */
  const deleteIngredient = (id) => {
    setIngredients(ingredients.filter((i) => i.id !== id));
  };

  return (
    <IngredientContext.Provider
      value={{
        ingredients,
        addIngredient,
        updateIngredient,
        deleteIngredient,
      }}
    >
      {children}
    </IngredientContext.Provider>
  );
};
