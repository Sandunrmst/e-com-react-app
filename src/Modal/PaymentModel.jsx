import Modal from '@mui/material/Modal';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { useState } from 'react';

const PaymentModel = (props, ref) => {
    const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useImperativeHandle(ref, ()=>({
        handleOpen: () => setOpen(true)
    }))
  return (
    <Modal
        open={open}
        onClose={handleClose}
        className='flex flex-col items-center justify-center'
      >
        <div className=' w-[90%] bg-white'>RMST</div>
      </Modal>
  )
}

export default forwardRef(PaymentModel)