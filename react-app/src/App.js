import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Switch } from "react-router-dom"

import { authenticate } from "./store/session"
import { Navigation, ProtectedRoute, Footer } from "./components"
import {
  HomePage,
  ShopPage,
  CreateProductPage,
  UpdateProductPage,
  ProductPage,
  PostReviewPage,
  FavoritePage,
  ShoppingCartPage,
} from "./pages"
import EditReview from "./components/EditReview"
import PagenotFound from "./components/PagenotFound"
import { SearchFilter } from "./context/SearchFilter"

function App() {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true))
  }, [dispatch])

  return (
    <>
      <div className="content-container">
        <SearchFilter>
          <Navigation isLoaded={isLoaded} />
          {isLoaded && (
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/shop">
                <ShopPage />
              </Route>
              <Route exact path="/favorites">
                <FavoritePage />
              </Route>
              <Route exact path="/shoppingcart">
                <ShoppingCartPage />
              </Route>
              <ProtectedRoute exact path="/products/new">
                <CreateProductPage />
              </ProtectedRoute>
              <Route exact path="/products/:productId/edit">
                <UpdateProductPage />
              </Route>
              <Route exact path="/products/:productId">
                <ProductPage />
              </Route>
              <Route exact path="/products/:productId/review">
                <PostReviewPage />
              </Route>
              <Route exact path="/products/:productId/review/:reviewId/edit">
                <EditReview />
              </Route>
              <Route>
                <PagenotFound />
              </Route>
            </Switch>
          )}
        </SearchFilter>
      </div>
      <div className="footer-container">
        <Footer isLoaded={isLoaded} />
      </div>
    </>
  )
}

export default App
