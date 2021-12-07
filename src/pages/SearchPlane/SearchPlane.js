import React from 'react';
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Header from '../../components/Header/Header';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { grey } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    mainContainer:{
        background:'#063048',
        height:'100vh'
    },
    headerText:{
        color:'#fff',
        textAlign:'center',
    },
    content:{
        paddingTop:60,
        paddingBottom:40,
    },
    searchGrid:{
        display:'flex',
        background:'#3b5166',
        padding:15,
    },
    input:{
        background:'#fff',
    }
}));

export default function SearchPlane(props){
    const classes = useStyles();
    const [values, setValues] = React.useState({
        originAirport: '',
        destinationAirport: '',
        date:'',
    });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    return (
        <Grid className={classes.mainContainer}>
            <Header />
            <Container  maxWidth="md" content>
                <Grid container justifyContent="center">
                    <Grid item className={classes.content}>
                        <Typography variant="h5" className={classes.headerText}>
                            Merhaba
                        </Typography>
                        <Typography variant="h5" className={classes.headerText}>
                            Nereyi Keşfetmek İstersiniz?
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.searchGrid}>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            className={classes.input}
                            id="originAirport"
                            value={values.originAirport}
                            placeholder="Nereden"
                            onChange={handleChange('originAirport')}
                            startAdornment={<InputAdornment position="start"><FlightTakeoffIcon /></InputAdornment>}
                            aria-describedby="originAirport-helper-text"
                            inputProps={{
                            'aria-label': 'originAirport',
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            className={classes.input}
                            id="destinationAirport"
                            value={values.destinationAirport}
                            placeholder="Nereye"
                            onChange={handleChange('destinationAirport')}
                            startAdornment={<InputAdornment position="start"><FlightLandIcon color="action"/></InputAdornment>}
                            aria-describedby="destinationAirport-helper-text"
                            inputProps={{
                            'aria-label': 'destinationAirport',
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '13ch' }} variant="outlined">
                        <OutlinedInput
                            style={{color:"#fff"}}
                            id="date"
                            value={values.date}
                            placeholder="Tarih"
                            onChange={handleChange('date')}
                            endAdornment={<InputAdornment position="start"><InsertInvitationIcon /></InputAdornment>}
                            aria-describedby="date-helper-text"
                            inputProps={{
                            'aria-label': 'date',
                            }}
                        />
                    </FormControl>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}