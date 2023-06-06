import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { authenticate } from "./store/session";
import { Navigation } from "./components"
import { HomePage, ShopPage, CreateProductPage, UpdateProductPage, ProductPage } from "./pages";

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
            <HomePage />
          </Route>
          <Route exact path="/shop" >
            <ShopPage />
          </Route>
          <Route exact path='/products/new'>
            <CreateProductPage />
          </Route>
          <Route exact path='/products/:productId/edit'>
            <UpdateProductPage />
          </Route>
          <Route exact path="/products/:productId" >
            <ProductPage />
          </Route>
          <Route>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
