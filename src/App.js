import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./cart/Cart";
import Home from "./home/Home";

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
