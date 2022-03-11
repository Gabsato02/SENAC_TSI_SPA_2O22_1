import React from 'react';

const Header = ({ username, setUsername, isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="py-2">
      {!isLoggedIn ? (
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center ms-auto">
            <input
              className="form-control me-3"
              placeholder="Digite seu usuário..."
              name="username"
              type="text"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={() => setIsLoggedIn(true)}
          >
            Logar
          </button>
        </div>
      ) : (
        <div className="d-flex justify-content-end align-items-center">
          <h1 className="display-6 me-3">Bem vindo, {username}!</h1>
          <button
            className="btn btn-danger h-25"
            onClick={() => setIsLoggedIn(false)}
          >
            Deslogar
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
