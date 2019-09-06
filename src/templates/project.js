import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import Linkbutton from '../components/LinkButton'
import { graphql } from 'gatsby'


const project = ({ data }) => {
	const tools = data.sanityProject.tool
	const toolString = tools.map( tool => tool.title).join(" - ")

	return (
		<Layout>
			<SEO title="project" />
			<section>
				<img src={data.sanityProject.screenshot.asset.url} alt={'image of ' + data.sanityProject.title}/>
				<h1>{data.sanityProject.title}</h1>
				<p>{toolString}</p>
			</section>
		</Layout>
	);
}

// Get project information by title (should probably change to something more unique in the future)
export const query = graphql`
	query($title: String!) {
		sanityProject(title: {eq: $title}) {
			title
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
