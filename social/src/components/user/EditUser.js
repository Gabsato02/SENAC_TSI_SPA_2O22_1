import React from 'react';
import { UserContext } from '../../auth';
import { useMutation, useQuery } from '@apollo/client';
import { EDIT_USER } from '../../graphql/login/mutation';
import { GET_POSTS } from '../../graphql/post/query';

const EditUser = ({ showEditModal }) => {
  const [name, setName] = React.useState('');
  const image = React.useRef();
  const { currentUser } = React.useContext(UserContext);
  const [editUser] = useMutation(EDIT_USER);
  const { refetch } = useQuery(GET_POSTS);

  if (showEditModal && !document.querySelector('.show')) {
    new window.bootstrap.Modal(document.querySelector('#modal-user')).show();
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

      await editUser({
        variables: {
          name,
          image: imageUrl,
          id: currentUser.id,
        },
      });

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal" id="modal-user" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Usuário</h5>
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
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <input type="file" className="form-control my-2" ref={image} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNewPost}
            >
              Salvar
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

export default EditUser;
