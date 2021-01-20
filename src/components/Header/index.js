import React from 'react';
import Logo from '../Logo';
import './style.css';

function Header() {
	return (
		<nav className='header-nav'>
			<button className='logo-button'>
				<Logo />
			</button>
			<ul className='header-menus'>
				<li>Home</li>
				<li>Service</li>
				<li>Contact</li>
				<li>Help !</li>
			</ul>
		</nav>
	);
}

export default Header;
