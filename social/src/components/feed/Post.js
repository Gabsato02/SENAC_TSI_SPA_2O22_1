import { useMutation } from '@apollo/client';
import React from 'react';
import { ADD_LIKE } from '../../graphql/post/mutation';
// import Comment from './Comment';

const Post = ({ post, refetch }) => {
  const [addLike] = useMutation(ADD_LIKE);

  const handleLike = async () => {
    try {
      addLike({
        variables: {
          id: post.id,
          likes: post.likes + 1,
        },
      });

      refetch();
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <article
      className="border rounded-1 mx-auto my-3"
      style={{ maxWidth: '700px' }}
    >
      <div className="text-start m-3">
        <img
          className="rounded-circle"
          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
          src={post.user?.image}
        />
        <span className="mx-2 fw-bold">{post.user?.name}</span>
      </div>
      <div>
        <img className="img-fluid" src={post.image} />
      </div>
      <div className="text-start m-3">
        <div>
          <i
            className={`${
              post.likes ? 'fa-solid' : 'fa-regular'
            } fa-heart fs-4 me-2`}
            onClick={handleLike}
            style={{ cursor: 'pointer' }}
          />
          <i className="fa-regular fa-comment-dots fs-4" />
        </div>
        <div>
          <span className="d-block fw-bold">{`${post.likes} ${
            post.likes > 1 ? 'likes' : 'like'
          }`}</span>
          <span className="fw-bold me-1">{post.user.username}</span>
          <span>{post.text}</span>
          {/* <span className="d-block text-muted">
            Ver todos os {post.comments.length} comentários
          </span>
          {post.comments.map((comment, index) => (
            <Comment comment={comment} key={index} />
          ))} */}
        </div>
      </div>
    </article>
  );
};

export default Post;
