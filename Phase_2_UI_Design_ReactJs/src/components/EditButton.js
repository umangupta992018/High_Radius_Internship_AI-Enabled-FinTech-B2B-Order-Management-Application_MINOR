import React from 'react';
import {Button} from "@material-ui/core";
import Edit from "../assets/Path 18191.svg";
import theme, { pxToRem } from '../utils/theme';
import { withStyles } from '@material-ui/core/styles';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import { makeStyles } from '@material-ui/core';
export default function EditButton() {
const uS = makeStyles(theme =>({
  root:{
    backgroundColor:'#273D49CC',
    color:'#97A1A9',
    border:'1px #97A1A9 solid',
    marginLeft:'15px'

  }
}))




  const classes=uS();
    return(
      <Button variant="outlined" className={classes.root} startIcon={<Edit/>}>
        Edit
      </Button>
    )
}
