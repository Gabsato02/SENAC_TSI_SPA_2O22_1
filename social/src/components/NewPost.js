import React from 'react';

const NewPost = ({ username, posts, setPosts }) => {
  const [imagePath, setImagePath] = React.useState('');
  const [postText, setPostText] = React.useState('');

  const handleNewPost = () => {
    const payload = {
      text: postText,
      image: imagePath,
      username,
      likes: 0,
      date: new Date().toLocaleString(),
    };

    setPosts([payload, ...posts]);
  };

  return (
    <section className="new-post">
      <h2 className="new-post__title">Crie um novo post</h2>
      <div className="new-post__input-wrapper">
        <input
          className="new-post__input--file"
          name="file"
          type="file"
          onChange={(event) => setImagePath(event.target.files[0])}
        />
        <input
          className="new-post__input--text"
          name="file-text"
          type="text"
          placeholder="O que você está pensando?"
          value={postText}
          onChange={(event) => setPostText(event.target.value)}
        />
      </div>
      <button className="new-post__button" onClick={handleNewPost}>
        Postar
      </button>
    </section>
  );
};

export default NewPost;
