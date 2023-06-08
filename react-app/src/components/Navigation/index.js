import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className='headerContainer'>
			<ul className='navigation'>
				<li id="logo">
					<NavLink exact to="/">Home</NavLink>
				</li>
				<li>
					<form>
						<input type='search' placeholder='Search for anything' disabled="True"></input>
						<button>
							<i className="fa-solid fa-magnifying-glass fa-xl" />
						</button>
					</form>
				</li>
				<li className={sessionUser? '':'hidden'}>
					<NavLink exact to= "/favorites">
        				<i className="fa-regular fa-heart fa-xl" />
      				</NavLink>
				</li>
				<li className={sessionUser? '':'hidden'}>
    				<Link id='shop' to = "/shop">
    				<i className="fa-solid fa-shop fa-lg"></i>
          			</Link>
    			</li>
				{isLoaded && (
					
				<li>
					<ProfileButton user={sessionUser} />
				</li>
				)}
				<li>
					<NavLink exact to= "/shoppingcart">
						<i className="fa-solid fa-cart-shopping fa-lg" />
					</NavLink>
				</li>
			</ul>
			<ul className='category'>
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
			</ul>
		</div>
		
	);
}

export default Navigation;