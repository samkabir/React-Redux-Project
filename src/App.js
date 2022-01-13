import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiscoverBooks from './Pages/DiscoverBooks/DiscoverBooks/DiscoverBooks';
import DiscoverBooksHome from "./Pages/DiscoverBooks/DiscoverBooksHome/DiscoverBooksHome";
import FinishedBooks from "./Pages/DiscoverBooks/FinishedBooks/FinishedBooks";
import ReadingBooks from "./Pages/DiscoverBooks/ReadingBooks/ReadingBooks";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/discoverbooks" element={<DiscoverBooks />}>
                    <Route exact path="/discoverbooks" element={ <DiscoverBooksHome></DiscoverBooksHome> }>
                        
                    </Route>
                    <Route path={`/discoverbooks/readingbooks`} element={<ReadingBooks></ReadingBooks>}>
                        
                    </Route>
                    <Route path={`/discoverbooks/finishedbooks`} element={<FinishedBooks></FinishedBooks> }>
                        
                    </Route>
              </Route>

          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
