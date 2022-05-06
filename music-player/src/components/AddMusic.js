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
import React from 'react';

const AddMusic = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>Editar Música</DialogTitle>
        <DialogContent>
          <img
            style={{ width: '100%', margin: '0 auto' }}
            src="https://m.media-amazon.com/images/I/91qLOt7RmmL._AC_SL1500_.jpg"
            alt=""
            lazy
          ></img>
          <TextField
            label="Nome da música"
            fullWidth
            variant="outlined"
            color="success"
            sx={{ mt: 2 }}
          />
          <TextField
            label="Artista"
            fullWidth
            variant="outlined"
            color="success"
            sx={{ mt: 2 }}
          />
          <TextField
            label="Imagem"
            fullWidth
            variant="outlined"
            color="success"
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
          <Button color="success" variant="contained">
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
          sx={{ mr: 1 }}
        ></TextField>
        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={() => setShowDialog(true)}
        >
          Adicionar
        </Button>
      </Box>
    </>
  );
};

export default AddMusic;
