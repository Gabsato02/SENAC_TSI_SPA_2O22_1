import { PlayArrow, QueueMusic } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const MusicList = () => {
  const fakeMusic = {
    title: 'Title',
    artist: 'Artist',
    image: 'https://m.media-amazon.com/images/I/91qLOt7RmmL._AC_SL1500_.jpg',
  };

  const Music = ({ music }) => {
    const { image, title, artist } = music;

    return (
      <Card sx={{ display: 'flex', alignItems: 'center', marginY: '10px' }}>
        <CardMedia
          image={image}
          sx={{ objectFit: 'cover', width: '140px', height: '140px' }}
        />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="subtitle1" component="h3">
              {artist}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <PlayArrow color="success" />
            </IconButton>
            <IconButton>
              <QueueMusic color="success" />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    );
  };

  return (
    <Box>
      {Array.from({ length: 15 }, () => fakeMusic).map((music, index) => {
        return <Music key={index} music={music} />;
      })}
    </Box>
  );
};

export default MusicList;
