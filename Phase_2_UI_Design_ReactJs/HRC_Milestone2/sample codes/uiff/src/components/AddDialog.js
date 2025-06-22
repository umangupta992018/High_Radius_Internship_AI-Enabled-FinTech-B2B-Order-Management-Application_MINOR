import React from 'react';
import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import ReactDropdownCalendar from "../../src";
import axios from 'axios';

export default function AddDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addData = async() => {
    const resp = await axios.
      put(`http://localhost:8080/1806336/InvoiceServlet?page=1000`,{
        'cust_name': document.getElementById("cust_name").value,
        'cust_no': document.getElementById("cust_no").value
      })  
  };

  return (
    <div>
      <Button id='add'variant="outlined" onClick={handleClickOpen}>
        <AddIcon className='onicons'></AddIcon>
        Add
      </Button>
      <Dialog id='addbox'open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="addtitle">Add Invoice
          <CloseIcon></CloseIcon>
        </DialogTitle>
        <DialogContent dividers={true} id='addcontent'>
          <DialogContentText>
            <form id='addform'>
            <div >
            Customer Name<input id='cust_name'className='addinput' required></input><br></br>
            <br></br>
            Customer No.<input id='cust_no'className='addinput' required></input><br></br>
            <br></br>
            Invoice No.<input className='addinput' required></input><br></br>
            <br></br>
            Invoice Amount<input className='addinput' required></input><br></br>
            </div>
            <br></br>
            <div align="end">
            Due Date<input className='addinput' required></input>
            Notes<textarea className="addinput" rows="3" cols="8"></textarea>
            </div>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions id='addactions'>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onSubmit={addData}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
