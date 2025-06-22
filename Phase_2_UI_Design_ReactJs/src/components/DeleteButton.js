import React from 'react';
import {Button} from "@material-ui/core";
import Delete from "../assets/Path 18189-1.svg";
import theme, { pxToRem } from '../utils/theme';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
const useStyle = makeStyles(theme =>({
  root:{
    backgroundColor:'#273D49CC',
    color:'#97A1A9',
    border:'1px #14AFF1 solid',
    marginLeft:'15px',
  }
}))
export default function DeleteButton() {
  const classes = useStyle();
    return(
      <Button variant="outlined" className={classes.root} startIcon={<Delete/>} >
        Delete
      </Button>
    )
}
