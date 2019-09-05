import React from 'react'
import LinkButton from "./LinkButton"
import resume from "../assets/resumeFinal.pdf"

const Footer = () => {
	return (
		<footer className="content--dark">
				<h1>Let's make wonderful work together.</h1>
				<LinkButton link={resume}>Resume</LinkButton>
				<p>carl.dungca@yahoo.com</p>
				<p>619 - 948 - 8137</p>
				<a href="https://github.com/CarlsJr4" target="_blank"><i className="fab fa-github"></i></a>
				<a href="https://www.linkedin.com/in/carl-dungca-a81322149/" target="_blank"><i className="fab fa-linkedin"></i></a>
		</footer>
	);
}

export default Footer;
