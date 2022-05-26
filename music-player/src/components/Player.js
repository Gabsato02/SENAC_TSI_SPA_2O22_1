import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Slider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useContext } from 'react';
import { SongContext } from '../App';
import Queue from './Queue';

const Player = ({ queue }) => {
  const mobile = useMediaQuery('(min-width: 900px)');
  const { currentSong, songDispatch } = useContext(SongContext);

  const handlePlayButton = () => {
    songDispatch({ type: currentSong.isPlaying ? 'PAUSE_SONG' : 'PLAY_SONG' });
  };

  return (
    <Box>
      <Card
        style={
          mobile
            ? { marginLeft: 10 }
            : { marginLeft: 0, boxShadow: '-1px 2px 8px grey' }
        }
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              {currentSong?.song.title}
            </Typography>
            <Typography variant="subtitle1" component="h3">
              {currentSong?.song.artist}
            </Typography>
            <Typography>03:20:04</Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ mr: 2 }}>10:20:10</Typography>
            <img
              src={currentSong?.song.thumbnail}
              alt="music"
              width="80px"
              height="80px"
              style={{
                objectFit: 'cover',
                borderRadius: '4px',
                marginRight: '12px',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CardActions>
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton onClick={handlePlayButton}>
              {currentSong?.isPlaying ? (
                <Pause fontSize="large" />
              ) : (
                <PlayArrow fontSize="large" />
              )}
            </IconButton>
            <IconButton>
              <SkipNext />
            </IconButton>
          </CardActions>
          <CardMedia
            image="https://m.media-amazon.com/images/I/91qLOt7RmmL._AC_SL1500_.jpg"
            sx={{ height: '140px', width: '140px' }}
          />
        </Box>
        <Box sx={{ mx: 3 }}>
          <Slider color="success" type="range" min={0} max={1} step={0.01} />
        </Box>
      </Card>
      {mobile && <Queue queue={queue} />}
    </Box>
  );
};

export default Player;
