/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Asynchronous function to generate pages after retrieving data
// Destructure graphql and actions from API
exports.createPages = async ({ graphql, actions }) => {
	// Destructure createPage function from actions
	const { createPage } = actions 

	// Wait for GraphQL to get data
	const result = await graphql(`
		query {
			allSanityProject {
				edges {
					node {
						title
						slug {
							current
						}
					}
				}
			}
		}
	`)


	// Throw errors if there is a problem retrieving data
	if (result.errors) {
		throw result.errors
	}

	// Map data to a variable, or set to empty array if data is nonexistent
	const projects = result.data.allSanityProject.edges || []

	// For each project, generate a slug from the data and create a page using path, component, and variables
	projects.forEach(({node}) => {
		createPage({
			path: `/projects/${node.slug.current}`,
			component: require.resolve('./src/templates/project.js'),
			context: {slug: node.slug},
		})
	})
}