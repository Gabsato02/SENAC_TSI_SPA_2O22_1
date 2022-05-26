import React, { useContext } from 'react';
import { useSubscription } from '@apollo/client';
import { Pause, PlayArrow, QueueMusic } from '@mui/icons-material';
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
import { GET_SONGS } from '../graphql/subscription';
import { SongContext } from '../App';

const MusicList = ({ queue }) => {
  const { data, loading, error } = useSubscription(GET_SONGS);
  const { currentSong, songDispatch } = useContext(SongContext);

  console.log(currentSong.isPlaying);

  const handleChangeMusic = (music) => {
    songDispatch({ type: 'CHANGE_SONG', payload: { music } });
    songDispatch({ type: music.isPlaying ? 'PAUSE_SONG' : 'PLAY_SONG' });
  };

  const handleAddQueue = (music) => {
    queue.queueDispatch({ type: 'ADD_QUEUE', payload: { music } });
  };

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
            <IconButton onClick={() => handleChangeMusic(music)}>
              {currentSong.isPlaying &&
              currentSong.song.title === music.title ? (
                <Pause color="success" />
              ) : (
                <PlayArrow color="success" />
              )}
            </IconButton>
            <IconButton onClick={() => handleAddQueue(music)}>
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
