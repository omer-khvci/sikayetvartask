
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import AddOrEditUser from './addOrEditUser';

const AddOrEditUserDialog = ({ open, close, editUserId }) => {



    const handleClose = () => {
        close()
    };

    return (


        <Dialog maxWidth="md" fullWidth open={open} onClose={handleClose}>
            <DialogTitle>{
                    editUserId ? 'Updated User' : 'Add New User'
                }</DialogTitle>
            <DialogContent>
                <AddOrEditUser open={open} close={close} editUserId={editUserId} />
            </DialogContent>
        </Dialog>

    );
}
export default AddOrEditUserDialog;