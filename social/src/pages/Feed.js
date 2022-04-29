import { useQuery } from '@apollo/client';
import React from 'react';
import { UserContext } from '../auth';
import Post from '../components/feed/Post';
import Layout from '../components/shared/Layout';
import { GET_POSTS } from '../graphql/post/query';

const Feed = () => {
  const { loading, data, refetch } = useQuery(GET_POSTS);
  const { currentUser } = React.useContext(UserContext);
  console.log(currentUser);

  return (
    <>
      {loading && <h1>Carregando...</h1>}
      {!loading && (
        <Layout title="Feed">
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto">
              {data.post.map((post, index) => (
                <Post post={post} key={index} refetch={refetch} />
              ))}
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Feed;
