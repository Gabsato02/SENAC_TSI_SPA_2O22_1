import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import AddMusic from './components/AddMusic';
import Header from './components/Header';
import MusicList from './components/MusicList';
import Player from './components/Player';

function App() {
  return (
    <Box>
      <Header />
      <Container>
        <Grid container sx={{ mt: 10 }}>
          <Grid item xs={12} md={7}>
            <AddMusic />
            <MusicList />
          </Grid>
          <Grid item xs={12} md={5}>
            <Player />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
