import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import './LoadingModal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min-content',
  bgcolor: 'background.paper',
};

 const LoadingModal = ({clicked}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    handleOpen();
  }, [clicked])

  
  return (
    <div>
      <Modal
        open={open}
      >
        <Box style={style}>
          <div className='loading'></div>
        </Box>
      </Modal>
    </div>
  );
}
export default LoadingModal;