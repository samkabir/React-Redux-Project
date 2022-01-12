import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiscoverBooks from './Pages/DiscoverBooks/DiscoverBooks/DiscoverBooks';

function App() {
  return (
    <div>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<DiscoverBooks />} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
