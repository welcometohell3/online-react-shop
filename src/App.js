import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Account from "./components/Account/Account";
import Nav from "./components/Nav";
import data from "./db/data";
import Footer from "./components/Footer";
import "./components/index.css";

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const category = e.target.value;
    if (category === "") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.category === category));
    }
  };

  return (
    <Router>
      <div className="main-container">
        <Nav handleInputChange={handleInputChange} query={query} user={user} />
        <div className="app-container content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  addToCart={addToCart}
                  query={query}
                  data={filteredData}
                  handleFilterChange={handleFilterChange}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/cart"
              element={
                <Cart
                  user={user}
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route path="/account" element={<Account user={user} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
