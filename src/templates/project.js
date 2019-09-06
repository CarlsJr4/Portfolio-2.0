import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'


const project = ({ data }) => {
	return (
		<Layout>
			<SEO title="project" />
			<section>
				<h1>{data.sanityProject.title}</h1>
			</section>
		</Layout>
	);
}

export const query = graphql`
	query($title: String!) {
		sanityProject(title: {eq: $title}) {
			title
		}
	}
`

export default project;
