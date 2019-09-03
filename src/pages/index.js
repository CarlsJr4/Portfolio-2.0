import React from "react"
import LinkButton from "../components/LinkButton"
import Footer from "../components/Footer"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

		{/* ---------- Intro ---------- */}
		<section className="content--dark hero">
			<h1 id="intro__name">Carl Dungca</h1>
			<p>Front-end developer who loves problem-solving and functional design.</p>
			<p>HTML5 - CSS3 - JS - SASS - React</p>
			<LinkButton link="#">Resume</LinkButton>
		</section>
		<div className="hero__clip-path"></div>

		{/* ---------- Projects ---------- */}
		<section className="content--light projects">
			<h1>Projects</h1>
		</section>

  </Layout>
)

export default IndexPage
