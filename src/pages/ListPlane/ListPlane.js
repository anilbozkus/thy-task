import React from 'react';
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Header from '../../components/Header/Header';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#fff',
        height: '100vh'
    },
    headingButton: {
        width: 150,
        marginTop: '25px!important'
    },
    headingText: {
        marginTop: '15px!important'
    },
    checkboxArea: {
        marginLeft: '0px!important',
        marginTop: 25
    },
    InfoText:{
        marginTop: '15px!important'
    }
}));

export default function ListPlane(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const DesignedSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#1d96f6',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    return (
        <Grid className={classes.mainContainer}>
            <Header />
            <Container maxWidth="md" content>
                <Button variant="contained" color="error" className={classes.headingButton}>
                    Uçuş
                </Button>
                <Typography variant="h5" className={classes.headingText}>
                    İstanbul - Antalya, 6 Yolcu
                </Typography>
                <FormControlLabel
                    className={classes.checkboxArea}
                    control={<DesignedSwitch sx={{ m: 2 }} defaultChecked checked={checked}
                    onChange={handleChange}/>}
                    label={<Typography variant="h6">Promosyon Kodu</Typography>} labelPlacement="start"
                />
                {checked &&
                <div>
                    <Typography variant="body1">
                        Promosyon Kodu seçeneği ile tüm Economy kabini Eco Fly paketlerini %50 indirimle satin alabilirsiniz.
                    </Typography>
                    <Typography variant="body1" className={classes.InfoText}>
                        Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim yapılmamaktadır.
                    </Typography>
                </div>
                }
            </Container>
        </Grid>
    )
}