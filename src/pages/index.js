import React from "react"
import LinkButton from "../components/LinkButton"
import resume from "../assets/resumeFinal.pdf"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexPage({data}) {

	const projectData = data.allSanityProject.edges 

	const projectGrid = projectData.map(({node}) => { 
		const tools = node.tool;
		const toolString = tools.map(tool => tool.title).join(" - ")

		return (
					<Link to={'/projects/' + node.slug.current}>
					<div key={node.id} className="projects__previews">
						<img src={node.screenshot.asset.url} alt={"image of: " + node.title}/>
						<div className="projects__overlay">
							<h3>{node.title}</h3>
							<p>{toolString}</p>
							<p>{node.previewDesc}</p>
						</div>
					</div>
				</Link>
			)
		}
	)
	
	return (
		<Layout>
			<SEO title="Home" />
	
			{/* ---------- Intro ---------- */}
			<section className="content--dark hero">
				<h1 style={{fontSize: "3.5rem"}} id="intro__name">Carl Dungca</h1>
				<p>Front-end developer who loves problem-solving and functional design.</p>
				<p>HTML5 - CSS3 - JS - SASS - React</p>
				<div>
					<a href="https://github.com/CarlsJr4" target="_blank"><i className="fab fa-github"></i></a>
					<a href="https://www.linkedin.com/in/carl-dungca-a81322149/" target="_blank"><i className="fab fa-linkedin"></i></a>
				</div>
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
		allSanityProject(sort: {fields: priority}) {
			edges {
				node {
					id
					title
					slug {
						current
					}
					previewDesc
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
