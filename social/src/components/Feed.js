import React from 'react';
import Post from './Post';
import { PostContext } from '../_App';

const Feed = () => {
  const { state } = React.useContext(PostContext);
  return (
    <div className="container px-4 py-2">
      <section className="row">
        {state.posts.map((post, index) => (
          <Post {...post} key={index} />
        ))}
      </section>
    </div>
  );
};

export default Feed;
