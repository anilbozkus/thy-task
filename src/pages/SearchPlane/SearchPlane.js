import React from 'react';
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';
import Header from '../../components/Header/Header';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import ManIcon from '@mui/icons-material/Man';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

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
    },
    dateInput:{
        color:'#fff!important',
        background:'#242a38'
    },
    buttonPopover:{
        height:55,
        backgroundColor:'#242a38!important',
        color:'#98a4b2!important'
    },
    paperPopover:{
        marginTop:10,
    },
    buttonNext:{
        borderRadius:'0!important',
        height:55,
        padding:'6px 10px!important'
    }
}));

export default function SearchPlane(props){
    const classes = useStyles();
    let navigate = useNavigate();

    const [values, setValues] = React.useState({
        originAirport: '',
        destinationAirport: '',
        date:'',
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleNext = () => {
        navigate('/list');
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const id = open ? 'simple-popover' : undefined;

    return (
        <Grid className={classes.mainContainer}>
            <Header color="white"/>
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
                    <Grid item className={classes.searchGrid}>
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
                                className={classes.dateInput}
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
                        <FormControl sx={{ m: 1, width: '13ch' }} variant="outlined">
                            <Button className={classes.buttonPopover} aria-describedby={id} variant="contained" onClick={handleClick}>
                                <ManIcon />
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                className={classes.paperPopover}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Typography sx={{ p: 1 }}>The content of the Popover.</Typography>
                            </Popover>
                        </FormControl>
                        <FormControl sx={{ m: 1 }} variant="outlined">
                            <Button classes={{root: classes.buttonNext}} variant="contained" onClick={handleNext} color="error">
                                <ChevronRightIcon sx={{ fontSize: 40 }}/>
                            </Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}