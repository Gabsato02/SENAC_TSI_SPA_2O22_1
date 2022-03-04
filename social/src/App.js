import React from 'react';
import Header from './components/Header';
import NewPost from './components/NewPost';
import Feed from './components/Feed';

const App = () => {
  const [username, setUsername] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [posts, setPosts] = React.useState([]);

  return (
    <main className="main-container">
      <Header
        username={username}
        setUsername={setUsername}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <NewPost posts={posts} setPosts={setPosts} username={username} />
      <Feed posts={posts} />
    </main>
  );
};

export default App;
