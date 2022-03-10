import React from 'react';

const Header = ({ username, setUsername, isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="header">
      {!isLoggedIn ? (
        <div className="header-logged-out">
          <div className="header-logged-out__input-wrapper">
            <label
              className="header-logged-out__input-label"
              htmlFor="username"
            >
              Usuário
            </label>
            <input
              className="header-logged-out__input"
              placeholder="Digite seu usuário..."
              name="username"
              type="text"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </div>
          <button
            className="header-logged-out__button"
            onClick={() => setIsLoggedIn(true)}
          >
            Logar
          </button>
        </div>
      ) : (
        <div className="header-logged-in">
          <h1 className="header-logged-in__title">Bem vindo, {username}!</h1>
          <button className="header-logged-in__button">Deslogar</button>
        </div>
      )}
    </div>
  );
};

export default Header;
