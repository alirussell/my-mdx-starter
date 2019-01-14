/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {

  if (node.internal.type === 'Mdx') {
  	const { createNodeField } = actions

    const slug = createFilePath({ node, getNode, basePath: 'pages' });

    // Create the slug
    createNodeField({
        node,
        name: 'slug',
        value: `/custom${slug}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data && result.data.allMdx && result.data.allMdx.edges.forEach(({ node }) => {
        if (node.fields) {
          console.log('createPages', node.fields)
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/test.js`),
            context: Object.assign({
            }, node.fields),
          })
        }
      })
      resolve()
    })
  })
}
