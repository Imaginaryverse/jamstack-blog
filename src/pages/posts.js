import React from 'react';
import { graphql, Link } from 'gatsby';

const Posts = ({ data }) => {
  const posts = data.allContentfulBlogPost.nodes;

  return (
    <div>
      {posts.map(el => (
        <Link to={`/posts/${el.slug}`} key={Date.now()}>
          {el.postTitle}
        </Link>
      ))}
    </div>
  );
};

export default Posts;

export const pageQuery = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        postTitle
        slug
      }
    }
  }
`;
