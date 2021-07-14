const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`);
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          slug
          postTitle
          postBody {
            internal {
              content
              description
              ignoreType
              mediaType
            }
          }
        }
      }
    }
  `);
  result.data.allContentfulBlogPost.nodes.forEach(node => {
    createPage({
      path: `/posts/${node.slug}`,
      component: blogPostTemplate,
      context: {
        title: node.postTitle,
        body: node.postBody.internal.content,
      },
    });
  });
};
