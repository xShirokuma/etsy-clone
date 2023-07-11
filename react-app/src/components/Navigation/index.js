import React, { useEffect, useState, useRef, useContext } from "react"
import { NavLink, Link, useHistory } from "react-router-dom"
import { useSelector } from "react-redux"
import ProfileButton from "./ProfileButton"
import LoginFormModal from "../LoginFormModal"
import OpenModalButton from "../OpenModalButton"
import "./Navigation.css"
import { SearchContext } from "../../context/SearchFilter"

function Navigation({ isLoaded }) {
  const ulRef = useRef()
  const history = useHistory()

  const sessionUser = useSelector((state) => state.session.user)
  const { products, setFilteredProducts } = useContext(SearchContext)
  const [showMenu, setShowMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleSearchQueryChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim() === "") {
      setSearchResults([])
      setFilteredProducts(products)
    } else {
      const results = Object.values(products).filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
      setSearchResults(results)
      setFilteredProducts(results)
    }
  }

  const handleSearchResultClick = (product) => {
    setSearchResults([])
    setSearchQuery("")
    history.push(`/products/${product.id}`)
  }

  useEffect(() => {
    if (!showMenu) return

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }

    document.addEventListener("click", closeMenu)

    return () => document.removeEventListener("click", closeMenu)
  }, [showMenu])

  const closeMenu = () => setShowMenu(false)

  return (
    <div className="headerContainer">
      <ul className={sessionUser ? "navigation" : "navigation nologin"}>
        <li id="logo">
          <NavLink exact to="/">
            Shopsy
          </NavLink>
        </li>
        <li>
          <form>
            <input
              type="search"
              placeholder="Search for anything"
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
            <button disabled={true}>
              <i className="fa-solid fa-magnifying-glass fa-xl" />
            </button>
          </form>
          {searchResults.length > 0 && (
            <ul className="search-results">
              {searchResults.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleSearchResultClick(product)}>
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className={sessionUser ? "" : "hidden"}>
          <NavLink exact to="/favorites">
            <i className="fa-regular fa-heart fa-xl" />
          </NavLink>
        </li>
        <li className={sessionUser ? "" : "hidden"}>
          <Link id="shop" to="/shop">
            <i className="fa-solid fa-shop fa-lg"></i>
          </Link>
        </li>
        {isLoaded && (
          <li>
            <ProfileButton user={sessionUser} />
          </li>
        )}
        <li>
          {!sessionUser ? (
            <OpenModalButton
              buttonText={<i className="fa-solid fa-cart-shopping fa-lg" />}
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
          ) : (
            <NavLink exact to="/shoppingcart">
              <i className="fa-solid fa-cart-shopping fa-lg" />
            </NavLink>
          )}
        </li>
      </ul>
      {/* <ul className='category' onClick={e=> window.alert("Feature coming soon...")}>
				<li>
					Jewelry & Accessories
				</li>
				<li>
					Clothing & Shoes
				</li>
				<li>
					Home & Living
				</li>
				<li>
					Wedding & Party
				</li>
				<li>
					Toys & Entertainment
				</li>
				<li>
					Art & Collectibles
				</li>
				<li>
					Gift & Gift Cards
				</li>
			</ul> */}
    </div>
  )
}

export default Navigation
