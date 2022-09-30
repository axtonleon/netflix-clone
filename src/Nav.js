import React, { useState, useEffect } from 'react';
import './Nav.css';

 
function Nav() {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true)
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll",null);
		};
	}, []);


	return (
		<div className={`nav ${show && "nav__blank"} `}>
		 <img className="nav__logo"
		 	src= "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
		 	alt="NETFLIX logo" />
		<img className="nav__avatar"
		 	src= "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
		 	alt="Login Avatar" />
		</div>

		)
}


export default Nav;