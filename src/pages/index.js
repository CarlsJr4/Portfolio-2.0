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
		<section className="content--black">
			<h1>Carl Dungca</h1>
			<h3>Front-end developer who loves problem-solving and functional design.</h3>
			<h3>HTML5 - CSS3 - JS - SASS - React</h3>
			<LinkButton link="#">Resume</LinkButton>
		</section>

		{/* ---------- Projects ---------- */}
		<section className="content--white">
			<h1>Projects</h1>
		</section>

  </Layout>
)

export default IndexPage
