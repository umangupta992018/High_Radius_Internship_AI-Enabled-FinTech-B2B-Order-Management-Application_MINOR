import { React } from "react";
import { Typography, TextField, InputAdornment, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    example: {
		height: "5rem",
		width: "25rem"		
	},
    root: {
        color: "red"
    }
});

const Simple = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h1" children={"You text here"} align={'center'} color={'error'}/>             
            You text here
            <TextField
                className={classes.example}
                placeholder="Search By Invoice Number"
                variant="outlined"
                InputProps={{
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                }}
            />    
            <Button
                classes={{
                    root: classes.root                    
                }}
                >
                    classes nesting
            </Button>    
        </div>
    );
}

export default Simple;
