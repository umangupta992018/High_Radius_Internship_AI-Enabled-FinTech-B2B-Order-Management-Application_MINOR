import React from 'react';
import { withStyles } from "@material-ui/core";

const styles = {
  body: {
    backgroundColor: '#212428',
    height: '90vh',
    display: 'grid',
    alignContent: 'center',
    margin: '2rem 4rem 2px 4rem',
    border: 'solid 3px #FFE01C'
  },
  title: {
    fontsize: '30px',
    fontFamily: 'Roboto',
    color: '#65DAA2',
    width: '40vw'
  }
};

const cssInJsExample = (props) => {
  const { classes } = props;

  return (
    <div className={classes.body}>
      <h1 className={classes.title}>Inline Styles</h1>
    </div>
  );
}

export default withStyles(styles)(cssInJsExample);