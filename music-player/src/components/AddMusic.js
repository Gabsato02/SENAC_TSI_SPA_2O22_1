import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect } from 'react';
import YouTubePlayer from 'react-player/youtube';
import ReactPlayer from 'react-player';
import { useMutation } from '@apollo/client';
import { ADD_SONG } from '../graphql/mutation';

const AddMusic = () => {
  const DEFAULT_SONG = {
    id: '',
    duration: 0,
    title: '',
    artist: '',
    thumbnail: '',
    url: '',
  };

  const [showDialog, setShowDialog] = React.useState(false);
  const [url, setUrl] = React.useState('');
  const [isPlayable, setIsPlayable] = React.useState(false);
  const [song, setSong] = React.useState(DEFAULT_SONG);
  const [addSong] = useMutation(ADD_SONG);

  useEffect(() => {
    setIsPlayable(YouTubePlayer.canPlay(url));
  }, [url]);

  const handleEditSong = ({ player }) => {
    if (isPlayable) {
      const { player: realPlayer } = player.player;

      const { author: artist, video_id: id, title } = realPlayer.getVideoData();

      setSong({
        artist,
        id,
        title,
        duration: realPlayer.getDuration(),
        thumbnail: `http://img.youtube.com/vi/${id}/0.jpg`,
        url,
      });
    }
  };

  const handleEditDataSong = ({ target }) => {
    const { name, value } = target;
    setSong((previousSong) => ({
      ...previousSong,
      [name]: value,
    }));
  };

  const handleAddSong = async () => {
    const { duration, title, artist, thumbnail, url } = song;
    try {
      await addSong({
        variables: {
          duration: duration || null,
          title: title || null,
          artist: artist || null,
          thumbnail: thumbnail || null,
          url: url || null,
        },
      });

      setShowDialog(false);
      setSong(DEFAULT_SONG);
      setUrl('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>Editar Música</DialogTitle>
        <DialogContent>
          <img
            style={{ width: '100%', margin: '0 auto' }}
            src={song.thumbnail}
            alt=""
            loading="lazy"
          ></img>
          <TextField
            label="Nome da música"
            fullWidth
            variant="outlined"
            color="success"
            name="title"
            onChange={handleEditDataSong}
            value={song.title}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Artista"
            fullWidth
            variant="outlined"
            color="success"
            name="artist"
            onChange={handleEditDataSong}
            value={song.artist}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Imagem"
            fullWidth
            variant="outlined"
            color="success"
            name="thumbnail"
            onChange={handleEditDataSong}
            value={song.thumbnail}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setShowDialog(false)}
            color="error"
            variant="outlined"
          >
            Cancelar
          </Button>
          <Button onClick={handleAddSong} color="success" variant="contained">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ display: 'flex' }}>
        <TextField
          variant="outlined"
          placeholder="Adicione uma url"
          type="url"
          label="Url da música"
          color="success"
          fullWidth
          value={url}
          onChange={({ target }) => setUrl(target.value)}
          sx={{ mr: 1 }}
        ></TextField>
        <Button
          variant="contained"
          color="success"
          disabled={!isPlayable}
          startIcon={<AddIcon />}
          onClick={() => setShowDialog(true)}
        >
          Adicionar
        </Button>
      </Box>

      <ReactPlayer url={url} hidden onReady={handleEditSong}></ReactPlayer>
    </>
  );
};

export default AddMusic;
