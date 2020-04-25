/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.createPages = ({ graphql, actions }) => {
//   const { createPages } = actions
//   blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
//   return graphql(
//     `
//       query blogPostQuery($limit: Int!) {
//         allSanityPost(limit: $limit) {
//           edges {
//             node {
//               id
//               slug
//             }
//           }
//         }
//       }
//     `,
//     { limit: 1000 }
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }
//   })

//   result.data.allSanityPost.edges.node.forEach(edge => {
//     createPages({
//       path: `/aktualnosci/${edge.slug}`,
//       component: blogPostTemplate,
//       context: {},
//     })
//   })
// }
