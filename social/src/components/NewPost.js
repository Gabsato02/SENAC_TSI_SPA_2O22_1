import React from 'react';
import { PostContext } from '../_App';

const NewPost = ({ username }) => {
  const { dispatch } = React.useContext(PostContext);
  const [imagePath, setImagePath] = React.useState('');
  const [postText, setPostText] = React.useState('');

  const handleNewPost = () => {
    const newPost = {
      text: postText,
      image: imagePath,
      username,
      likes: 0,
      date: new Date().toLocaleString(),
    };

    dispatch({ type: 'CREATE_POST', payload: newPost });
  };

  return (
    <section className="p-4">
      <h2 className="display-4">Crie um novo post</h2>
      <div className="d-flex flex-column py-4">
        <input
          className="form-control"
          name="file"
          type="file"
          onChange={(event) => setImagePath(event.target.files[0])}
        />
        <input
          className="form-control mt-4"
          name="file-text"
          type="text"
          placeholder="O que você está pensando?"
          value={postText}
          onChange={(event) => setPostText(event.target.value)}
        />
      </div>
      <button
        className="btn btn-lg btn-success d-block ms-auto"
        onClick={handleNewPost}
      >
        Postar
      </button>
    </section>
  );
};

export default NewPost;
