import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/Navbar'
import LinkButton from '../components/LinkButton'
import BlockContent from '@sanity/block-content-to-react'
import { graphql } from 'gatsby'


const project = ({ data }) => {
	const tools = data.sanityProject.tool
	const toolString = tools.map( tool => tool.title).join(" - ")

	return (
		<Layout>
			<Navbar />
			<SEO title="project" />
			<section>
				<img src={data.sanityProject.screenshot.asset.url} alt={'image of ' + data.sanityProject.title}/>
				<h1>{data.sanityProject.title}</h1>
				<p>{toolString}</p>
				<LinkButton link={data.sanityProject.repoLink}>Code</LinkButton>
				<LinkButton link={data.sanityProject.projectLink}>Project</LinkButton>
				<BlockContent blocks={data.sanityProject._rawMainDesc}/>
			</section>
		</Layout>
	);
}

// Get project information by title (should probably change to something more unique in the future)
export const query = graphql`
	query($title: String!) {
		sanityProject(title: {eq: $title}) {
			title
			projectLink
			repoLink
			_rawMainDesc
			tool {
				title
			}
			screenshot {
				asset {
					url
				}
			}
		}
	}
`

export default project;
