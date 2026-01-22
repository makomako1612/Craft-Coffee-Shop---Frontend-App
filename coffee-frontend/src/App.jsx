import { Routes, Route, Link } from 'react-router-dom';
import Ingredients from './pages/Ingredients';
import IngredientDetail from './pages/IngredientDetail';
import Coffees from './pages/Coffees';
import CoffeeDetail from './pages/CoffeeDetail';

function App() {
  return (
    <>
      <nav>
        <Link to="/ingredients">Ingredients</Link> |{' '}
        <Link to="/coffees">Coffees</Link>
      </nav>

      <Routes>
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/ingredients/:id" element={<IngredientDetail />} />
        <Route path="/coffees" element={<Coffees />} />
        <Route path="/coffees/:id" element={<CoffeeDetail />} />
      </Routes>
    </>
  );
}

export default App;

