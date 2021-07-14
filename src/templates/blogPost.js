import React from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const posts = data.allContentfulBlogPost.nodes;

  return (
    <div>
      {posts.map(el => (
        <div key={Math.floor(Math.random() * 9999999999)}>
          <h1>{el.postTitle}</h1>
          <p>{el.postBody.internal.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        postTitle
        slug
        postBody {
          internal {
            content
          }
        }
      }
    }
  }
`;
