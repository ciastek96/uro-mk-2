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
  blogPost.forEach(edge => {
    const path = `/aktualnosci/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/BlogPostTemplate.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  const offer = result.data.allSanityOffer.edges || []
  offer.forEach(edge => {
    const path = `/oferta/${edge.node.slug.current}`

    createPage({
      path,
      component: require.resolve("./src/templates/OfferPageTemplate.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  const blogPosts = result.data.allSanityPost.edges
  const blogPostsPerPage = 2
  const numPages = Math.ceil(blogPosts.length / blogPostsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/aktualnosci` : `/aktualnosci/${i + 1}`,
      component: require.resolve("./src/templates/BlogPostListTemplate.js"),
      context: {
        numPages: numPages,
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
