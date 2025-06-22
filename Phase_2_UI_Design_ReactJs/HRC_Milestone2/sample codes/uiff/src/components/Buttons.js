import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Remove';
import AddDialog from '../components/AddDialog'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      padding: "2px"
    },
    labelRoot: {
      fontSize: 30,
      color: "white",
      "&.labelFocused": {
        color: "black"
      }
    },
    labelFocused: {}
  },
}));

export default function Buttons() {
  const classes = useStyles();

  return (
    <div style={{width:'100%'}}className={classes.root}>
      <Box display='flex' p={0}>
      <Box p={1}>
      <Button 
      id='predict'variant="outlined" disabled>
        Predict
      </Button>
      </Box>
      <Box p={1} flexGrow={1}>
      <Button id='viewcor'variant="outlined" disabled>
        View Correspondence
      </Button>
      </Box>
      <Box p={1}>
        <AddDialog />
      </Box>
      <Box p={1}>
      <Button id='edit'variant="outlined" disabled>
        <EditIcon className='officons'></EditIcon>
        Edit
      </Button>
      </Box>
      <Box p={1}>
      <Button id='del'variant="outlined" disabled>
        <RemoveIcon className='officons'></RemoveIcon>
        Delete
      </Button>
      </Box>
      <Box p={1}>
        <TextField 
          id="search" label="Search by invoice number" variant="outlined" 
          InputLabelProps={{classes: {
            root: classes.labelRoot,
            focused: classes.labelFocused
          }
        }}/>
      </Box>
      </Box>
    </div>
  );
}
