import * as React from 'react';
import Hrc from "../assets/logo.svg";
import AbcCompany from "../assets/Group 20399.svg";
//import { makeStyles } from '@material-ui/core';

export default function Header(props) {
  //const classes = useStyles();
    return (  
        <div style={{padding:15}}>
          <img src={AbcCompany} alt="Company logo" style={{position:'absolute'}}></img>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            
          }}>
            <img src={Hrc} alt="HRC Logo"/> 
          </div>
          <p style={{fontSize:25,color:'white'}}>Invoice List</p>
      </div>
    );
}