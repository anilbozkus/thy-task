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
  headerContainerBlack:{
    borderBottom:'1.2px solid #000',
  },
  headerTextWhite:{
    color:'#fff',
    fontWeight:'bold!important'
  },
  headerTextBlack:{
    color:'#000',
    fontWeight:'bold!important'
  }
}));

export default function Header(props){
    const classes = useStyles();
    return (
        <Grid container justifyContent="center" className={classes.mainContainer}>
          <Grid container justifyContent="space-between" className={props.color ? classes.headerContainer : classes.headerContainerBlack}>
            <Typography variant="h6" className={props.color ? classes.headerTextWhite : classes.headerTextBlack}>
              turkishairlines.com
            </Typography>
            <Typography variant="h6" className={props.color ? classes.headerTextWhite : classes.headerTextBlack}>
              Flight Challange
            </Typography>
          </Grid>
        </Grid>
    );
}