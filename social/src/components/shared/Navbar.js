import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../auth';
import NewPost from '../post/NewPost';

const Navbar = () => {
  const { currentUser } = React.useContext(UserContext);
  const [showModal, setShowModal] = React.useState(false);

  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="container align-items-center">
        <Link to="/" className="navbar-brand">
          Senacgram
        </Link>
        <ul className="navbar-nav me-auto flex-row">
          <li className="nav-item">
            <Link className="nav-link" to="/explorar">
              Explorar
            </Link>
          </li>
        </ul>
        {currentUser && (
          <ul className="navbar-nav ms-auto flex-row">
            <li className="nav-item">
              <button
                className="btn mx-2"
                onClick={() => setShowModal(!showModal)}
              >
                Postar
              </button>
              <NewPost showModal={showModal} />
            </li>
            <li className="nav-item d-flex align-items-center">
              {currentUser.name}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
