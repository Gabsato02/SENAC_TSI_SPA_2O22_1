import { Pause, PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Slider,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useContext } from 'react';
import { SongContext } from '../App';
import Queue from './Queue';
import ReactPlayer from 'react-player';

const Player = ({ queue }) => {
  const mobile = useMediaQuery('(min-width: 900px)');
  const { currentSong, songDispatch } = useContext(SongContext);
  const [progress, setProgress] = React.useState(0);
  const [isClickingSlider, setIsClickingSlider] = React.useState(false);
  const reactPlayerRef = React.useRef();
  const [currentPlayTime, setCurrentPlayTime] = React.useState(0);
  const [queuePosition, setQueuePosition] = React.useState(0);

  React.useEffect(() => {
    const songIndex = queue.currentQueue.findIndex(
      (song) => song.id === currentSong.song.id
    );

    setQueuePosition(songIndex);
    console.log(songIndex);
  }, [queuePosition, currentSong.song.id]);

  React.useEffect(() => {
    if (progress > 0.99) handleChangeSong();
  }, [progress]);

  const handlePlayButton = () => {
    songDispatch({ type: currentSong.isPlaying ? 'PAUSE_SONG' : 'PLAY_SONG' });
  };

  const handleSongProgress = ({ played, playedSeconds }) => {
    if (!isClickingSlider) {
      setProgress(played);
    }

    setCurrentPlayTime(playedSeconds);
  };

  const handleSliderChange = (_, newProgress) => {
    setProgress(newProgress);
  };

  const handleSliderClick = () => {
    setIsClickingSlider(true);
  };

  const handleSliderRelease = () => {
    setIsClickingSlider(false);
    reactPlayerRef.current.seekTo(progress);
  };

  const handleChangeSong = (isNextSong = true) => {
    const position = isNextSong ? queuePosition + 1 : queuePosition - 1;
    const music = queue.currentQueue[position];
    if (!music) return;
    songDispatch({ type: 'CHANGE_SONG', payload: { music } });
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
            <Typography>
              {new Date(currentSong?.song.duration * 60 * 1000)
                .toISOString()
                .substr(11, 8)}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            flexDirection: 'column',
          }}
        >
          <Typography>
            {new Date(currentPlayTime * 1000).toISOString().substr(11, 8)}
          </Typography>
          <CardActions sx={{ p: 0 }}>
            <IconButton onClick={() => handleChangeSong(false)}>
              <SkipPrevious />
            </IconButton>
            <IconButton onClick={handlePlayButton}>
              {currentSong?.isPlaying ? (
                <Pause fontSize="large" />
              ) : (
                <PlayArrow fontSize="large" />
              )}
            </IconButton>
            <IconButton onClick={handleChangeSong}>
              <SkipNext />
            </IconButton>
          </CardActions>
        </Box>
        <Box sx={{ mx: 3 }}>
          <Slider
            key="slider"
            value={progress}
            color="success"
            type="range"
            min={0}
            max={1}
            step={0.01}
            onChange={handleSliderChange}
            onMouseDown={handleSliderClick}
            onMouseUp={handleSliderRelease}
          />
          <ReactPlayer
            ref={reactPlayerRef}
            hidden
            url={currentSong.song.url}
            playing={currentSong.isPlaying}
            onProgress={handleSongProgress}
          />
        </Box>
      </Card>
      {mobile && <Queue queue={queue} />}
    </Box>
  );
};

export default Player;
