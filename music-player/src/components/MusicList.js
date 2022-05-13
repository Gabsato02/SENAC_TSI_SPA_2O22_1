import { useQuery } from '@apollo/client';
import { PlayArrow, QueueMusic } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  LinearProgress,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { GET_SONGS } from '../graphql/query';

const MusicList = () => {
  const { data, loading, error } = useQuery(GET_SONGS);

  if (loading) {
    return <LinearProgress sx={{ marginTop: '8px' }} color="success" />;
  }

  if (error) {
    return <div>ERRO</div>;
  }

  const Music = ({ music }) => {
    const { thumbnail, title, artist } = music;

    return (
      <Card sx={{ display: 'flex', alignItems: 'center', marginY: '10px' }}>
        <CardMedia
          image={thumbnail}
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
      {data.songs.map((song) => {
        return <Music key={song.id} music={song} />;
      })}
    </Box>
  );
};

export default MusicList;
