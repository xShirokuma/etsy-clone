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
				<li>
					<NavLink exact to="/">Home</NavLink>
				</li>
				<li>
					<form>
						<input type='search' placeholder='Search for anything'></input>
						<button>
							<i className="fa-solid fa-magnifying-glass fa-xl" />
						</button>
					</form>
				</li>
				<li className={sessionUser? '':'hidden'}>
					<button id='favorites'>
        				<i className="fa-regular fa-heart fa-xl" />
      				</button>
				</li>
				<li className={sessionUser? '':'hidden'}>
    				<Link id='favorites' to = '/products/new'>
    				<i class="fa-solid fa-plus"></i>
          			</Link>
    			</li>
				{isLoaded && (
					
				<li>
					<ProfileButton user={sessionUser} />
				</li>
				)}
				<li>
					<button id='shoppingCart'>
						<i className="fa-solid fa-cart-shopping fa-xl" />
					</button>
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