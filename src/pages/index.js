import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
		{/* Intro */}
		<section className="intro--black">
			<h1>Carl Dungca</h1>
			<h3>Front-end developer who loves problem-solving and functional design.</h3>
			<h3>HTML5 - CSS3 - JS - SASS - React</h3>
			{/* NOTE: Turn resume button into a component */}
			<button>Resume</button> 
		</section>

		{/* Projects */}
		<section className="intro--white">
			<h1>Projects</h1>
		</section>

		{/* Contact */}
		{/* NOTE: This will turn into a footer component eventually */}
		<h1>Contact</h1>
		<p>Let's make wonderful work together.</p>
		<button>Resume</button>
		<p>carl.dungca@yahoo.com</p>
		<p>619 - 948 - 8137</p>
  </Layout>
)

export default IndexPage
