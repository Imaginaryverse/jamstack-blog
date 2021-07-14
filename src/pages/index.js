import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <p style={{ textAlign: 'center' }}>DA BLOG</p>
      <Link to='/posts'>View all posts</Link>
    </main>
  );
};

export default IndexPage;
