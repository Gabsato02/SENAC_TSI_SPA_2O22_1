import React from 'react';
import { UserContext } from '../../auth';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../graphql/post/mutation';

const NewPost = ({ showModal }) => {
  const [text, setText] = React.useState('');
  const image = React.useRef();
  const { currentUser } = React.useContext(UserContext);
  const [addPost] = useMutation(ADD_POST);

  if (showModal && !document.querySelector('.show')) {
    new window.bootstrap.Modal(document.querySelector('.modal')).show();
  }

  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'senacgram');
    formData.append('cloud_name', 'gabsato02');

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/gabsato02/image/upload',
        {
          method: 'POST',
          accept: 'application/json',
          body: formData,
        }
      );
      const { url } = await response.json();
      return url;
    } catch (error) {
      throw error.response;
    }
  };

  const handleNewPost = async () => {
    try {
      const imageUrl = await uploadImage(image.current.files[0]);

      await addPost({
        variables: {
          text,
          image: imageUrl,
          user_id: currentUser.id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Criar postagem</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              placeholder="O que está pensando?"
              className="form-control my-2"
              value={text}
              onChange={({ target }) => setText(target.value)}
            />
            <input type="file" className="form-control my-2" ref={image} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNewPost}
            >
              Postar
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
