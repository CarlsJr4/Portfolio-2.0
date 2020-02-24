import React from 'react'
import LinkButton from "./LinkButton"
import Social from "./Social"
import resume from "../assets/resumeFinalv2.pdf"

const Footer = () => {
	return (
		<footer className="content--dark">
				<h1>Let's make wonderful work together.</h1>
				<LinkButton link={resume}>Resume</LinkButton>
				<p>carl.dungca@yahoo.com</p>
				<p>619 - 948 - 8137</p>
				<Social />
		</footer>
	);
}

export default Footer;
