import React from 'react';
import { UserContext } from '../App';

const Post = ({ title, date, image, text, username }) => {
  const currentUser = React.useContext(UserContext);

  const isPostAuthor = username === currentUser;

  return (
    <article className="col-2 m-2 p-2  card">
      <img
        className="card-img-top"
        src={URL.createObjectURL(image)}
        alt={`Imagem do post ${image.name}`}
        title={title}
      />
      <div className="card-body">
        <h3
          className="card-title text-center"
          style={{ color: isPostAuthor && 'green' }}
        >
          {username}
        </h3>
        <span className="text-muted text-center d-block mx-auto">{date}</span>
      </div>
      <p className="card-text text-center">{text}</p>
      <button className="btn btn-sm btn-primary">Likes (0)</button>
    </article>
  );
};

export default Post;
