import React from 'react';
import Layout from '../components/shared/Layout';
import { UserContext } from '../auth';
import { useLazyQuery } from '@apollo/client';
import { GET_LOGIN } from '../graphql/login/query';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = React.useState('gabsato');
  const [password, setPassword] = React.useState('123456');
  // eslint-disable-next-line no-unused-vars
  const { setCurrentUser } = React.useContext(UserContext);
  const [getLogin] = useLazyQuery(GET_LOGIN);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await getLogin({ variables: { username } });
      const { user } = data;
      const { id, name, username: $username, password: $password } = user[0];
      if ($password !== btoa(password)) return;
      setCurrentUser({ id, name, username: $username });
      navigate('/');
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
              placeholder="Usuário"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            <input
              type="password"
              className="form-control my-2"
              placeholder="Senha"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button className="btn btn-primary w-100" onClick={handleLogin}>
              Logar
            </button>
            <hr className="my-5" />
            <div className="text-center">Não possui conta? Cadastre-se!</div>
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

export default LoginPage;
