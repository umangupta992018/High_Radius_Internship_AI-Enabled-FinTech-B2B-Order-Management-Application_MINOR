import * as React from 'react';
//mport { DataGrid } from '@material-ui/data-grid';
//import MuiTableCell from "@material-ui/core/TableCell";
import { InputBase, makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import {Box} from "@material-ui/core";
import {Button} from '@material-ui/core';
import {Grid} from '@material-ui/core'
import Add from "../assets/Path 18189.svg";
import Delete from "../assets/Path 18189-1.svg";
import Edit from "../assets/Path 18191.svg";
import AddButton from "../components/AddButton";
import EditButton from "../components/EditButton";
import DeleteButton from "../components/DeleteButton";
import Search from "../assets/search-24px (3).svg";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
    root: {
      
        margin: theme.spacing(3),
        width: '340px',
        height: '45px',
        marginTop:'1px',
        
        
      
    },
  }));
  

export default function GridPanel() {
  //const classes = useStyles();
  const classes = useStyles();
   return (
    <div style={{backgroundColor: '#2B414E',padding:30, margin:15 }}>
      <div style={{ height: 700, width: '100%',padding:15,margin:2 }} className={classes.root}>
      <Grid container >
      
        <Grid item x1={1} lg={1} md={1} >
            <Button variant="contained" style={{backgroundColor:'#14AFF1',color:'white'}}>
        Predict
        </Button></Grid>
        <Grid item x1={3} lg={3} md={3} >
        <Button variant="contained" style={{backgroundColor:'#273D49CC',color:'white',border:'1px #14AFF1 solid',marginLeft:'15px'}}>
        View Correspondense</Button></Grid>
        <Grid item x1={1} lg={1} md={1} ></Grid>
        <Grid item x1={1} lg={1} md={1} >
        <Button variant="contained" style={{backgroundColor:'#273D49CC',color:'white',border:'1px #14AFF1 solid'}}>
        <img src={Add} alt='add icon' style={{marginRight:5}}></img>
        Add
       </Button></Grid>
        <Grid item x1={1} lg={1} md={1} > 
        <Button variant="contained" style={{backgroundColor:'#273D49CC',color:'#97A1A9',border:'1px #97A1A9 solid',marginLeft:'15px'}}>
        <img src={Edit} alt='add icon' style={{marginRight:5}}></img>
        Edit
      </Button></Grid>
        <Grid item x1={1} lg={1} md={1} > 
        <Button variant="contained" style={{backgroundColor:'#273D49CC',color:'#97A1A9',border:'1px #97A1A9 solid',marginLeft:'15px'}}>
        <img src={Delete} alt='add icon' style={{marginRight:5}}></img>
        Delete
      </Button></Grid>
      <Grid item x1={3} lg={3} md={3 }>   
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Search by Invoice Number" variant="outlined" style={{backgroundColor:'#273D49CC',color:'#97A1A9',border:'1px #97A1A9 solid',marginLeft:'1px'}} /> 
           

     </form>
        </Grid>
        </Grid>
      
      </div>
    </div>
  );
}