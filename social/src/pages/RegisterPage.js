import React from 'react';
import Layout from '../components/shared/Layout';
import { UserContext } from '../auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../graphql/login/mutation';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  // eslint-disable-next-line no-unused-vars
  const { setCurrentUser } = React.useContext(UserContext);
  const [addLogin] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const addUser = async () => {
    try {
      const { data } = await addLogin({
        variables: { username, password: btoa(password), name },
      });
      const { id, $name, $username } = data?.insert_user?.returning[0] || null;
      setCurrentUser({ id, name: $name, username: $username });
      navigate('/');
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout title="Login">
      <div className="row">
        <div className="d-none d-lg-block col-6 text-end">
          <img
            className="img-fluid"
            src="/images/iphone.png"
            alt="Iphone"
            title="Iphone"
          />
        </div>
        <div className="col-10 col-lg-4 mx-auto mx-lg-0">
          <div
            className="border rounded-1 p-5 my-2 mx-auto mx-lg-0"
            style={{ maxWidth: '430px' }}
          >
            <h2
              className="me-5 font-bold"
              style={{ fontFamily: 'cookie', fontSize: '50px' }}
            >
              Senacgram
            </h2>
            <input
              type="text"
              className="form-control"
              placeholder="Nome"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Usuário"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Senha"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button className="btn btn-primary w-100" onClick={addUser}>
              Registrar
            </button>
            <hr className="my-5" />
            <div className="text-center">
              <Link to="/login">Já possui uma conta? Faça o login</Link>
            </div>
          </div>
          <div>
            <p className="text-center">Obtenha nosso aplicativo!</p>
            <div className="row justify-content-center">
              <img
                src="/images/apple.png"
                title="App Apple"
                alt="Apple"
                style={{ height: '35px', width: '135px' }}
              />
              <img
                src="/images/google.png"
                title="App Google"
                alt="Google"
                style={{ height: '35px', width: '135px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
