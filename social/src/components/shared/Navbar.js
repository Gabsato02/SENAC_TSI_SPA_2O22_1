import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../auth';
import NewPost from '../post/NewPost';
import EditUser from '../user/EditUser';

const Navbar = () => {
  const { currentUser } = React.useContext(UserContext);
  const [showPostModal, setShowPostModal] = React.useState(false);
  const [showEditModal, setShowEditModal] = React.useState(false);

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
                onClick={() => setShowPostModal(!showPostModal)}
              >
                Postar
              </button>
              <NewPost showPostModal={showPostModal} />
            </li>
            <li className="nav-item d-flex align-items-center">
              <button
                className="btn mx-2"
                onClick={() => setShowEditModal(!showEditModal)}
              >
                {currentUser.name}
              </button>
              <EditUser showEditModal={showEditModal} />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
