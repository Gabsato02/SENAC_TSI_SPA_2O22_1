import { Delete } from '@mui/icons-material';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import React from 'react';

const Queue = ({ queue }) => {
  const handleRemoveQueue = (music) => {
    queue.queueDispatch({ type: 'REMOVE_QUEUE', payload: { music } });
  };

  const QueueMusic = ({ music }) => {
    const { title, artist, thumbnail } = music;

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
          src={thumbnail}
          alt="CD Cover"
          sx={{ width: '40px', height: '40px' }}
        />
        <Box>
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="body2">{artist}</Typography>
        </Box>
        <IconButton onClick={() => handleRemoveQueue(music)}>
          <Delete color="error" />
        </IconButton>
      </Box>
    );
  };

  return (
    <Box>
      <Typography sx={{ ml: 2, mt: 4 }} variant="h5" component="h2">{`Fila (${
        queue.length || 0
      })`}</Typography>
      {queue.currentQueue.map((music, index) => {
        return <QueueMusic key={index} music={music} />;
      })}
    </Box>
  );
};

export default Queue;
