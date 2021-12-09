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
import Radio from '@mui/material/Radio';
import FlightCard from '../../components/FlightCard/FlightCard';
import { useNavigate } from 'react-router-dom';

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
    InfoText: {
        marginTop: '15px!important'
    },
    flyingTypeArea: {
        background: '#242a38',
        borderRadius: 2,
        padding: 10,
        marginTop: 25
    },
    flyingTypeButtons: {
        color: '#e2e5e6!important',
        borderColor: '#e2e5e6!important',
        marginLeft: '10px !important',
        textTransform: 'none !important'
    },
    flyingTypeText: {
        color: '#8a9b9d',
        display: 'flex',
        alignItems: 'center'
    },
    flyingListArea: {
        background: '#f9f9f9'
    },
    flyingListCard: {
        background: '#fff',
        boxShadow: '0 3px 3px 0 rgb(0 0 0 / 10%), 0 1px 8px 0 rgb(0 0 0 / 10%)',
        borderRadius: 3,
        padding: '15px 25px',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    flyingWay: {
        padding: '10px',
        marginTop: 20
    },
    durationArea: {
        padding: '20px 20px 20px 35px'
    }
}));

export default function ListPlane(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [order, setOrder] = React.useState('eco');
    const [flights, setFlights] = React.useState(null);
    let navigate = useNavigate();
    var data = require('../../flights/flights.json');

    React.useEffect(() => {
        if (data) {
            if(order === "eco")
            {
                setFlights(data.flights.sort((a, b) => parseFloat(b.fareCategories.ECONOMY.subcategories[0].price.amount) - parseFloat(a.fareCategories.ECONOMY.subcategories[0].price.amount)));
            }
            else
            {
                setFlights(data.flights.sort((a, b) => parseFloat(b.departureDateTimeDisplay) - parseFloat(a.departureDateTimeDisplay)));
            }
        }
    },[data, order])


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleChangeRadio = (event) => {
        setValue(event.target.value);
    };

    const handleBack = () => {
        navigate('/');
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
            <Container maxWidth="lg" content>
                <Button variant="contained" color="error" className={classes.headingButton} onClick={handleBack}>
                    Uçuş
                </Button>
                <Typography variant="h5" className={classes.headingText}>
                    İstanbul - Antalya, {localStorage.getItem('count')} Yolcu
                </Typography>
                <FormControlLabel
                    className={classes.checkboxArea}
                    control={<DesignedSwitch sx={{ m: 2 }} defaultChecked checked={checked}
                        onChange={handleChange} />}
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
                <Grid className={classes.flyingTypeArea} container justifyContent="flex-end">
                    <Typography variant="body1" className={classes.flyingTypeText}>
                        Sıralama Kriteri
                    </Typography>
                    <Button variant="outlined" className={classes.flyingTypeButtons} onClick={() => setOrder("eco")}>
                        Ekonomi Ücreti
                    </Button>
                    <Button variant="outlined" className={classes.flyingTypeButtons} onClick={() => setOrder("hour")}>
                        Kalkış Saati
                    </Button>
                </Grid>
                <Grid className={classes.flyingListArea}>
                    {flights && flights.map((flight, index) => (
                        <Grid container>
                            <Grid style={{ padding: 15 }} xs={12} md={6}>
                                <Grid className={classes.flyingListCard}>
                                    <Grid container>
                                        <Grid item>
                                            <Typography variant="h6">
                                                {flight.arrivalDateTimeDisplay}
                                            </Typography>
                                            <Typography variant="body1">
                                                {flight.originAirport.code}
                                            </Typography>
                                            <Typography variant="body2">
                                                {flight.originAirport.city.name}
                                            </Typography>
                                        </Grid>
                                        <Grid xs className={classes.flyingWay}>
                                            <hr style={{ border: '1px solid' }} />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h6">
                                                {flight.departureDateTimeDisplay}
                                            </Typography>
                                            <Typography variant="body1" align="right">
                                                {flight.destinationAirport.code}
                                            </Typography>
                                            <Typography variant="body2">
                                                {flight.destinationAirport.city.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item className={classes.durationArea}>
                                            <Typography variant="body2">
                                                Uçuş Süresi
                                            </Typography>
                                            <Typography variant="h6">
                                                {flight.flightDuration}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid style={{ padding: 15 }} xs={6} md={3}>
                                <Grid className={classes.flyingListCard}>
                                    <Grid container>
                                        <Grid item>
                                            <FormControlLabel control={<Radio checked={value === 'ECONOMY'+index}
                                                onChange={handleChangeRadio}
                                                value={"ECONOMY"+index} />} label="ECONOMY" />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2">
                                                Yolcu Başına
                                            </Typography>
                                            <Typography variant="h6">
                                                {flight.fareCategories.BUSINESS.subcategories[0].price.currency} {checked ? (flight.fareCategories.ECONOMY.subcategories[0].price.amount) / 2 : (flight.fareCategories.ECONOMY.subcategories[0].price.amount)}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid style={{ padding: 15 }} xs={6} md={3}>
                                <Grid className={classes.flyingListCard}>
                                    <Grid container>
                                        <Grid item>
                                            <FormControlLabel control={<Radio checked={value === 'BUSINESS'+index}
                                                onChange={handleChangeRadio}
                                                value={"BUSINESS"+index} />} label="BUSINESS" />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2">
                                                Yolcu Başına
                                            </Typography>
                                            <Typography variant="h6">
                                                {flight.fareCategories.BUSINESS.subcategories[0].price.currency} {checked ? (flight.fareCategories.BUSINESS.subcategories[0].price.amount) / 2 : (flight.fareCategories.BUSINESS.subcategories[0].price.amount)}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {value === ('ECONOMY'+index)
                                && <FlightCard checked={checked} navigate={navigate} flightInfo={flight.fareCategories.ECONOMY.subcategories}/>
                            }
                            {value === ('BUSINESS'+index)
                                && <FlightCard checked={checked} navigate={navigate} flightInfo={flight.fareCategories.BUSINESS.subcategories}/>
                            }
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid>
    )
}