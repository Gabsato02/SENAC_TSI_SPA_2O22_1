import { Container, Grid, useMediaQuery } from '@mui/material';
import React, { createContext, useContext, useReducer } from 'react';
import AddMusic from './components/AddMusic';
import Header from './components/Header';
import MusicList from './components/MusicList';
import Player from './components/Player';
import { QueueReducer, SongReducer } from './redux';

export const SongContext = createContext({
  song: {
    id: 'e712d4c2-3873-497f-b276-389159986434',
    title: 'Down by the River',
    artist: 'Milky Chance',
    thumbnail: 'https://i.ytimg.com/vi/W9pEC-Bo2Cw/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=qlGQoxzdwP4',
    duration: 3.5,
  },
  isPlaying: false,
});

function App() {
  const mobile = useMediaQuery('(min-width: 900px)');
  const initialSong = useContext(SongContext);
  const [currentQueue, queueDispatch] = useReducer(QueueReducer, []);
  const [currentSong, songDispatch] = useReducer(SongReducer, initialSong);

  return (
    <SongContext.Provider value={{ currentSong, songDispatch }}>
      <Header />
      <Container>
        <Grid container sx={{ mt: 10 }}>
          <Grid item xs={12} md={7}>
            <AddMusic />
            <MusicList queue={{ queueDispatch }} />
          </Grid>
          <Grid
            style={
              mobile
                ? {}
                : {
                    position: 'fixed',
                    width: '100%',
                    left: 8,
                    bottom: 10,
                    marginLeft: 0,
                  }
            }
            item
            xs={12}
            md={5}
          >
            <Player queue={{ currentQueue, queueDispatch }} />
          </Grid>
        </Grid>
      </Container>
    </SongContext.Provider>
  );
}

export default App;
