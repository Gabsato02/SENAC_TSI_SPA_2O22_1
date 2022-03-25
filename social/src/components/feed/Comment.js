import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div>
      <span className="fw-bold me-1">{comment.user.username}</span>
      <span>{comment.text}</span>
    </div>
  );
};

export default Comment;
