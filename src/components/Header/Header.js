import React from 'react';
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  mainContainer:{
    padding: '15px 25px',
  },
  headerContainer:{
    borderBottom:'1.2px solid #fff',
  },
  headerText:{
    color:'#fff',
    fontWeight:'bold!important'
  }
}));

export default function Header(props){
    const classes = useStyles();
    return (
        <Grid container justifyContent="center" className={classes.mainContainer}>
          <Grid container justifyContent="space-between" className={classes.headerContainer}>
            <Typography variant="h6" className={classes.headerText}>
              turkishairlines.com
            </Typography>
            <Typography variant="h6" className={classes.headerText}>
              Flight Challange
            </Typography>
          </Grid>
        </Grid>
    );
}