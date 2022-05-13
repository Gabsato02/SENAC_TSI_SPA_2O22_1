import { PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material';
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
import React from 'react';
import Queue from './Queue';

const Player = () => {
  const mobile = useMediaQuery('(min-width: 900px)');

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
              Título da Música
            </Typography>
            <Typography variant="subtitle1" component="h3">
              Nome do Artista
            </Typography>
            <Typography>03:20:04</Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton>
              <PlayArrow />
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
        <Slider color="success" type="range" min={0} max={1} step={0.01} />
      </Card>
      {mobile && <Queue />}
    </Box>
  );
};

export default Player;
