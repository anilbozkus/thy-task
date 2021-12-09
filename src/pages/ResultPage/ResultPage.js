import React from 'react';
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#fff',
        height: '100vh'
    },
    successText:{
        marginLeft:'25px!important'
    }
}));

export default function ResultPage(props) {
    const classes = useStyles();
    let navigate = useNavigate();

    return (
        <Grid className={classes.mainContainer}>
            <Header />
            {localStorage.getItem('status') === "AVAILABLE" ?
            <Container maxWidth="md" content style={{marginTop:50}}>
                <Grid container>
                    <CheckCircleIcon fontSize="large" style={{ color:'#49c474' }}/>
                    <Typography variant="h6" className={classes.successText}>Kabin Seçiminiz Tamamlandı.</Typography>
                </Grid>
                <hr />
                <Grid container justifyContent="space-between" style={{marginTop:50}}>
                    <Typography variant="h5">Toplam tutar</Typography>
                    <Typography variant="h5" color="primary">TRY {localStorage.getItem('amount')}</Typography>
                </Grid>
            </Container>
            :
            <Container maxWidth="md" content style={{marginTop:50}}>
                <Grid container>
                    <CancelIcon fontSize="large" color="error"/>
                    <Typography variant="h6" className={classes.successText}>Kabin Seçiminiz Tamamlanmadı.</Typography>
                </Grid>
                <hr />
                <Grid container justifyContent="flex-end" style={{marginTop:50}}>
                    <Button variant="contained" color="error" onClick={() => navigate('/')}>
                        Başa Dön
                    </Button>
                </Grid>
            </Container>
            }
        </Grid>    
    );
}