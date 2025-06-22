import React from 'react';
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    body: {
      backgroundColor: theme.palette.secondary.main,
      height: '70vh',
      display: 'grid',
      alignContent: 'center',
      margin: '2rem 4rem 2px 4rem',
      border: 'solid 3px #FFE01C'
    },
    title: {
      fontsize: '30px',
      fontFamily: 'Roboto',
      color: theme.text.secondary.main,
      width: '40vw'
    }
  })
);

const CssInJsExample = () => {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.body}>
        <h1 className={classes.title}>Inline Styles</h1>
      </div>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="primary">
        ABC
      </Button>
    </div>
  );
}

export default CssInJsExample;