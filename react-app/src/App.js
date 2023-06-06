import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupForm";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ProductList from "./components/Product"
import ProductDetails from "./components/ProductDetails";
import ProductForm from "./components/ProductForm"
import ShopPage from "./components/ShopPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/" >
            <ProductList />
          </Route>
          <Route exact path="/shop" >
            <ShopPage />
          </Route>
          <Route exact path='/products/new'>
            <ProductForm />
          </Route>
          <Route exact path='/products/:productId/edit'>
            <ProductForm />
          </Route>
          <Route exact path="/products/:productId" >
            <ProductDetails />
          </Route>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
