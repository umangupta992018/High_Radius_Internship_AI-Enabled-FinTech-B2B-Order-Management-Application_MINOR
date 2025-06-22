import React from 'react';
import {Button} from "@material-ui/core";
import Add from "../assets/Path 18189.svg";
import theme, { pxToRem } from '../utils/theme';
import { makeStyles } from '@material-ui/core';


export default function AddButton() {
    const useStyles = makeStyles(theme =>({
    root:{
        backgroundColor:'#273D49CC',
        color:'white',
        border:'1px #14AFF1 solid',
        marginLeft:'600px',
        borderRadius:'10px',

    }
}))



    const classes = useStyles();
    return(
    
    <Button variant="outlined" className={classes.root} startIcon={<Add/>} >
    Add
    </Button>
    
    )
}
