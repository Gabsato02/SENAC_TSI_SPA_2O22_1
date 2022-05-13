import { Box, Container, Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import AddMusic from './components/AddMusic';
import Header from './components/Header';
import MusicList from './components/MusicList';
import Player from './components/Player';

function App() {
  const mobile = useMediaQuery('(min-width: 900px)');

  return (
    <Box>
      <Header />
      <Container>
        <Grid container sx={{ mt: 10 }}>
          <Grid item xs={12} md={7}>
            <AddMusic />
            <MusicList />
          </Grid>
          <Grid
            style={
              mobile
                ? { position: 'fixed', width: '100%', right: 10, top: 80 }
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
            <Player />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
