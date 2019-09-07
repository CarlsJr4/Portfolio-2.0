import React from "react"
import LinkButton from "../components/LinkButton"
import resume from "../assets/resumeFinal.pdf"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage({data}) {

	const projectData = data.allSanityProject.edges 

	const projectGrid = projectData.map(({node}) => 
		<div key={node.id} className="projects__previews">
			<img src={node.screenshot.asset.url} alt={"image of: " + node.title}/>
			<div className="projects__overlay">
				<h3>{node.title}</h3>
				<p>{node.previewDesc}</p>
			</div>
			{/* <div className="projects__buttons">
				<LinkButton link={node.repoLink}>Code</LinkButton>
				<LinkButton link={node.projectLink}>Project</LinkButton>
				<LinkButton link={'/projects/' + node.slug.current}>See More</LinkButton>
			</div> */}
		</div>
	)
	
	return (
		<Layout>
			<SEO title="Home" />
	
			{/* ---------- Intro ---------- */}
			<section className="content--dark hero">
				<h1 id="intro__name">Carl Dungca</h1>
				<p>Front-end developer who loves problem-solving and functional design.</p>
				<p>HTML5 - CSS3 - JS - SASS - React</p>
				<LinkButton link={resume}>Resume</LinkButton>
			</section>
			{/* The triangle shape at the bottom */}
			<div className="hero__clip-path"></div>
	
			{/* ---------- Projects ---------- */}
			<section className="content--light projects">
				<h1>Projects</h1>
				<div className="projects__container">
					{projectGrid}
				</div>
			</section>
	
		</Layout>
	)
} 

export const query = graphql`
	query {
		allSanityProject {
			edges {
				node {
					id
					title
					slug {
						current
					}
					previewDesc
					projectLink
					repoLink
					screenshot {
						asset {
							url
						}
					}
					tool {
						title
					}
				}
			}
		}
	}
`

export default IndexPage
