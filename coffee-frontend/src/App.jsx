// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Coffees from "./pages/Coffees";
import CoffeeDetail from "./pages/CoffeeDetail";
import Ingredients from "./pages/Ingredients";
import IngredientDetail from "./pages/IngredientDetail";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Context Providers
import { CoffeeProvider } from "./context/CoffeeContext";
import { IngredientProvider } from "./context/IngredientContext";
import { CurrencyProvider } from "./context/CurrencyContext";

function App() {
  return (
    <CurrencyProvider>
      <IngredientProvider>
        <CoffeeProvider>
          <Router>
            <Header />

            <main style={{ padding: "24px", minHeight: "80vh" }}>
              <Routes>
                <Route path="/" element={<Coffees />} />
                <Route path="/coffees" element={<Coffees />} />
                <Route path="/coffees/:id" element={<CoffeeDetail />} />
                <Route path="/ingredients" element={<Ingredients />} />
                <Route path="/ingredients/:id" element={<IngredientDetail />} />
              </Routes>
            </main>

            <Footer />
          </Router>
        </CoffeeProvider>
      </IngredientProvider>
    </CurrencyProvider>
  );
}

export default App;

