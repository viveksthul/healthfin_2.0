import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import 'react-animated-slider/build/horizontal.css';
import '../../resources/css/reactslider/style.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import 'react-animated-slider/build/horizontal.css';

import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
 
    root: {
        flexGrow: 1,
      },
      paper: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
      },
      fontCase:{
          textTransform: 'none'
      },
      buttonSignUp: {
        color: '#005eb3',
        backgroundColor: '#fff',
        height : '44px',
        fontSize: '16px',
        fontWeight: 500,
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "center"
      }, 
      card: {
        display: 'flex',
        boxShadow:'none',
        alignItems : 'start',
        justifyContent: "start",
        padding: 0
      },
      content: {
        flex: '1 0 auto',
        alignItems : 'start'
      },
      cover: {
        width: 151,
      },
      noShadow:{
        boxShadow : 'none'
      },
      slider2ImgHeight:{
        height: "70%"
      },
      createAccount: {
        color: "#fff",
        backgroundColor: green[500],
        '&:hover': {
          backgroundColor: green[700],
        },
        width : "360px"
      },
      applyButton: {
        color: "#fff",
        width : "360px",
        textTransform: 'none'
      },
      inline: {
        display: 'inline',
      },
      stepsTitle:{
        fontSize: "20px",
        fontWeight: 500,
        fontStyle: "normal",
        fontStretch: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        color: "#14984a"
      },
      media: {
        //️object-fit is not supported by IE 11.
        objectFit: 'cover',
      }
});


const EMICalculator = ( props ) => {

    const { classes } = props;
   
    return ( 
            <Grid item sm={12} xs={12} >
                <Grid container spacing={0} className={["App-emical-slider-bg"]}  alignItems="start" direction="row" justify="start">
                    <Grid item sm={5} xs={12} className={classNames("App-emical-padding", "App-emical-items")} >
                        <Grid container justify="start" alignItems="start" direction="row"  > 
                            <Card >
                                <CardContent>
                                    <Grid container spacing={0} justify="start" alignItems="start" direction="row">
                                        <Grid item xs={12} >
                                            <Typography className={["App-home-emical-title"]} variant="h6"  >
                                            Estimate your EMI plan
                                            </Typography>
                                        </Grid>   
                                        <Grid item xs={12} >
                                            <TextField
                                                id="input-with-icon-textfield"
                                                label="Search for your surgery type"
                                                style={{ marginTop: 20, width : "100%" }}
                                                placeholder="Search here"
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                                InputProps={{
                                                endAdornment: (
                                                <InputAdornment position="start">
                                                <Search />
                                                </InputAdornment>
                                                ),
                                                }}
                                            />
                                        </Grid>       
                                        <Grid item xs={6} >
                                            <TextField
                                                id="standard-select-currency"
                                                select
                                                label="Select"
                                                className={classes.textField}
                                                value={1}
                                                style={{ marginTop: 20, width : "90%" }}
                                                // onChange={this.handleChange('currency')}
                                                SelectProps={{
                                                MenuProps: {
                                                    // className: classes.menu,
                                                },
                                                }}
                                                margin="normal"
                                            >   
                                                <MenuItem key={1} value={1}>
                                                1 Year
                                                </MenuItem>
                                                <MenuItem key={2} value={2}>
                                                2 Year
                                                </MenuItem>
                                            </TextField>
                                        </Grid>  
                                        <Grid item xs={6}>    
                                            <Grid container justify="end" alignItems="end" direction="row" > 
                                                <Grid item xs={12} >
                                                    <Button variant="outlined" color="primary" style={{marginTop: 30}} className={classes.button}>
                                                    Calculate EMI
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Divider  style={{marginTop: 10}}/>
                                    <Grid item xs={12}  style={{marginTop: 30}}>
                                        <Grid container spacing={0} >
                                            <Grid item xs={6} >
                                                <Typography  variant="caption" >
                                                Total Amount
                                                </Typography>
                                                <Typography  variant="h6" >
                                                Rs. 
                                                </Typography>
                                            </Grid> 
                                            <Grid item xs={6} >
                                                <Typography  variant="caption" >
                                                Monthly Instalments
                                                </Typography>
                                                <Typography  variant="h6" >
                                                Rs. 
                                                </Typography>
                                            </Grid> 
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}  style={{marginTop: 30}}>
                                        <Grid container spacing={0} >
                                            <Button  variant="contained" color="primary" className={classNames(classes.applyButton)} >
                                                Apply Now
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>     
                    </Grid>
                    <Grid item sm={1} xs={12}  className={classNames( "App-emical-items")} >
                    </Grid>
                    <Grid item sm={6} xs={12}  className={classNames( "App-emical-items")} >
                        <Typography className={["App-home-slider-title"]} variant="h4" >
                            Payback in easy instalments
                        </Typography>
                        <div className="App-home-slider-line"></div>
                        <Typography className={["App-home-slider-content"]} variant="body1" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Typography>
                        <Button variant="contained" color="primary" className={[classes.fontCase, "App-home-slider-signup", classes.buttonSignUp]}>
                            Present in following Cities                
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        )
}

EMICalculator.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(EMICalculator);