import React from 'react';
import Post from './Post';

const Feed = ({ posts }) => {
  return (
    <section className="feed">
      {posts.map((post, index) => (
        <Post {...post} key={index} />
      ))}
    </section>
  );
};

export default Feed;
