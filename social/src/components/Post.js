import React from 'react';

const Post = ({ title, date, image, text }) => {
  return (
    <article className="post">
      <div className="post__header">
        <h3 className="post__title">{title}</h3>
        <span className="post__date">{date}</span>
      </div>
      <img
        className="post__image"
        src={URL.createObjectURL(image)}
        alt={`Imagem do post ${image.name}`}
        title={title}
      />
      <p className="post__text">{text}</p>
      <button className="post__like-button">Likes (0)</button>
    </article>
  );
};

export default Post;
