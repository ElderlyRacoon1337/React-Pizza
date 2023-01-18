import Header from "./components/Header";
import Home from "./pages/Home";
import "./scss/app.scss";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { createContext, useState } from "react";

export const SearchContext = createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <BrowserRouter>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
