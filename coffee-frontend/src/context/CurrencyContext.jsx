import { createContext, useState } from "react";


/* შექმენი Context */
export const CurrencyContext = createContext();

/* Provider */
export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("GEL"); // "GEL" ან "USD"

  /* ლარის კონვერტაცია დოლარში */
  const convertPrice = (amountGel) => {
    // შეიძლება იყოს სინქრონული თუ mock data
    if (currency === "USD") {
      // რეალურად API გამოიძახეთ
      return (amountGel / 3.0).toFixed(2); // mock conversion 1 USD = 3 GEL
    }
    return amountGel.toFixed(2);
  };

  /* გადატანა GEL ↔ USD */
  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "GEL" ? "USD" : "GEL"));
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        convertPrice,
        toggleCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
