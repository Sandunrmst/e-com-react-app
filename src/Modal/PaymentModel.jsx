import Modal from '@mui/material/Modal';
import { doc, setDoc } from 'firebase/firestore';
import { forwardRef } from 'react';
import { useImperativeHandle } from 'react';
import { useState } from 'react';
import db from '../Firebase/firebase';

const PaymentModel = (props, ref) => {
    const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useImperativeHandle(ref, ()=>({
        handleOpen: () => setOpen(true)
    }))

    const addData = ()=> {
        setDoc(doc(db, "category", "category6"),{
            title:"category title 06",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlnIGxmEWixIwC7kJlKMA762aI6y7LOGNDTw&usqp=CAU",
        })
        .then((docRef) => {
            console.log("Document written with Id: ", docRef);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })
    }

  return (
    <Modal
        open={open}
        onClose={handleClose}
        className='flex flex-col items-center justify-center'
      >
        <div className=' w-[90%] bg-white'>RMST <button onClick={addData}>Click Me</button></div>
        
      </Modal>
  )
}

export default forwardRef(PaymentModel)