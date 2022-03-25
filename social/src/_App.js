import React from 'react';
import Header from './components/Header';
import NewPost from './components/NewPost';
import Feed from './components/Feed';
import reducer from './reducer';

export const UserContext = React.createContext();
export const PostContext = React.createContext();

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { posts: [] });
  const [username, setUsername] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <main className="container">
      <UserContext.Provider value={username}>
        <Header
          username={username}
          setUsername={setUsername}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <PostContext.Provider value={{ dispatch, state }}>
          <NewPost username={username} />
          <Feed />
        </PostContext.Provider>
      </UserContext.Provider>
    </main>
  );
};

export default App;
