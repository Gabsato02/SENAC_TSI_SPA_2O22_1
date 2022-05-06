import { Delete } from '@mui/icons-material';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import React from 'react';

const Queue = () => {
  const fakeMusic = {
    title: 'Title',
    artist: 'Artist',
    image: 'https://m.media-amazon.com/images/I/91qLOt7RmmL._AC_SL1500_.jpg',
  };

  const QueueMusic = ({ music }) => {
    const { image, title, artist } = music;

    return (
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridTemplateColumns: '50px auto 50px',
          alignItems: 'center',
          mt: 2,
          ml: 2,
        }}
      >
        <Avatar
          src={image}
          alt="CD Cover"
          sx={{ width: '40px', height: '40px' }}
        />
        <Box>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="body2">{artist}</Typography>
        </Box>
        <IconButton>
          <Delete color="error" />
        </IconButton>
      </Box>
    );
  };

  return (
    <Box>
      {Array.from({ length: 5 }, () => fakeMusic).map((music, index) => {
        return <QueueMusic key={index} music={music} />;
      })}
    </Box>
  );
};

export default Queue;
