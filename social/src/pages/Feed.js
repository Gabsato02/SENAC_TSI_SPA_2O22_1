import React from 'react';
import { UserContext } from '../auth';
import Post from '../components/feed/Post';
import Layout from '../components/shared/Layout';
import { getPost } from '../data';

const Feed = () => {
  const posts = [getPost(), getPost(), getPost()];
  const { currentUser } = React.useContext(UserContext);
  console.log(currentUser);

  return (
    <Layout title="Feed">
      <div className="row">
        <div className="col-10 mx-auto">
          {posts.map((post) => (
            <Post post={post} key={post.post_id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Feed;
