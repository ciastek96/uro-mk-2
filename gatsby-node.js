exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityOffer(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const blogPost = result.data.allSanityPost.edges || []
  blogPost.forEach((edge, index) => {
    const path = `/aktualnosci/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/BlogPostTemplate.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  const offer = result.data.allSanityOffer.edges || []
  offer.forEach((edge, index) => {
    const path = `/oferta/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/OfferPageTemplate.js"),
      context: { slug: edge.node.slug.current },
    })
  })
}
