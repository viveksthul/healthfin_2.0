import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../../resources/css/reactslider/style.css';
import PropTypes from 'prop-types';


const styles = theme => ({

    paper: {
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },

    sliderPadding:{
      paddingLeft:'70px'
    },


    sliderSection:{
      alignItems : 'start',
      justifyContent: "start"
    },
    noShadow:{
      boxShadow : 'none'
    },
    slider2ImgHeight:{
      height: "70%"
    }
  });

const HomeSlider = ( props ) => {

    const { classes } = props;
   
    return ( 

        <Grid item xs={12} className={classes.sliderSection}>
            <Grid container spacing={0} className={["App-home-slider2-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={9} className={classes.sliderPadding} >
                    <Grid container justify="center" alignItems="center" direction="row" > 
                        <Grid item xs={12} >
                            <Typography className={["App-home-slider2-title"]} variant="h5" >
                                Apply for HealthFin Medical Loan in case of
                            </Typography>
                        </Grid>
                        <Grid item xs={12} alignItems="center" direction="row" justify="center">
                            <Grid container justify="center" alignItems="center" direction="row" > 
                                <div className="App-home-slider2-line"></div>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Paper className={[classes.paper,classes.noShadow]}>
                        <Slider className={["slider-wrapper"]}>
                            <div key={1} className={["slider-content"]}  >
                                <img src={require('../../resources/img/home-slider2/group-91.png')} className={[classes.slider2ImgHeight]} alt="Test" />
                        
                                <div className="inner">
                                {/* <h1>{item.title}</h1> */}
                                
                                {/* <button>{item.button}</button> */}
                                </div>
                                {/* <section>
                                <img src={item.userProfile} alt={item.user} />
                                <span>
                                    Posted by <strong>{item.user}</strong>
                                </span>
                                </section> */}
                                <h1>Medical Emergency</h1>
                                <p alignItems="center" direction="row" justify="center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                </p>
                            </div>
                            <div key={2} className={["slider-content"]}  >
                                <img src={require('../../resources/img/home-slider2/group-91.png')} className={[classes.slider2ImgHeight]} alt="Test" />
                        
                                <div className="inner">
                                    {/* <h1>{item.title}</h1> */}
                                    {/* <button>{item.button}</button> */}
                                </div>
                                    {/* <section>
                                    <img src={item.userProfile} alt={item.user} />
                                    <span>
                                        Posted by <strong>{item.user}</strong>
                                    </span>
                                    </section> */}
                                <h1>Medical Emergency</h1>
                                <p alignItems="center" direction="row" justify="center" >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    
                                </p>
                                <p alignItems="center" direction="row" justify="center" >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    
                                </p>
                            </div>
                        </Slider>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
        )
}

HomeSlider.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(HomeSlider);