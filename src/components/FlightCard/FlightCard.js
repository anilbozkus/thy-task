import React from 'react';
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
    flyingListCard: {
        background: '#fff',
        boxShadow: '0 3px 3px 0 rgb(0 0 0 / 10%), 0 1px 8px 0 rgb(0 0 0 / 10%)',
        borderRadius: 3,
        padding: '15px 25px',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    flyingListPadding: {
        padding: '5px',
    },
    flyingListContent: {
        background: '#f4f3f3',
        padding: '15px 25px'
    },
    flyingListAttr: {
        border: '1px solid #e8e8e8',
        height: 200,
    },
    flyingListAttrValue: {
        padding: 15,
        borderBottom: '1px solid #e8e8e8'
    },
    amountSide: {
        display: 'flex'
    },
    selectFlight: {
        width: '100%',
        padding: '18px!important'
    }
}));

export default function FlightCard(props) {
    const classes = useStyles();

    const handleFinish = (status, amount) => {
        localStorage.setItem('status', status);
        if(props.checked){
            localStorage.setItem('amount', (amount/2));
        }
        else localStorage.setItem('amount', amount);
        props.navigate('/result');
    };

    return (
        <Grid style={{ padding: 15, width: '100%' }}>
            <Grid className={classes.flyingListCard}>
                {props.flightInfo && props.flightInfo.map((info, index) => (
                    <Grid xs={6} md={4} className={classes.flyingListPadding}>
                        <Grid className={classes.flyingListContent}>
                            <Grid container justifyContent="space-between">
                                <Typography variant="h6">
                                    {info.brandCode}
                                </Typography>
                                <Grid item className={classes.amountSide}>
                                    <Typography variant="body2" style={{ marginRight: 5 }}>
                                        {info.price.currency}
                                    </Typography>
                                    <Typography variant="h6">
                                        {props.checked ? (info.price.amount / 2) : info.price.amount}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className={classes.flyingListAttr}>
                            {info.rights && info.rights.map((right, index) => (
                                <Grid container className={classes.flyingListAttrValue}>
                                    <Typography variant="body2">
                                        {right}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                        {(props.checked && info.brandCode !== "ecoFly") ?
                            <Button variant="contained" color="error" disabled className={classes.selectFlight}>
                                Uçuşu Şeç
                            </Button>
                            :
                            <Button variant="contained" color="error" onClick={() => handleFinish(info.status, info.price.amount)} className={classes.selectFlight}>
                                Uçuşu Şeç
                            </Button>
                        }
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}