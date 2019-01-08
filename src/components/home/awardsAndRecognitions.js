import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      //  object-fit is not supported by IE 11.
      objectFit: 'cover',
    },
    imgSection:{
        padding:"30px",
        background:"rgba(255, 255, 255, 0.1)",
        width:"250px"
    },
    imgSectionGreen:{
        background:"green",
        color: "#fff",
        width:"250px",
        padding:"10px 30px",

    },
    imgSectionWhite:{
        padding:"30px",
        background:"#fff",
        width:"250px"
    },
    img:{
        height: "55px"
    }
  };

const AwardsAndRecognitions = ( props ) => {

    const { classes } = props;
    return ( 
        <Grid item xs={12}>
            <Grid container spacing={0} className={["App-home-testimonial-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={12} className={classes.sliderPadding} >
                    <Grid container justify="center" alignItems="center" direction="row" > 
                        <Grid item xs={12} >
                            <Typography className={["App-home-testimonial-title"]} variant="h5" >
                                Awards & Recognitions
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{ color: '#fff' }}>
                            <Grid container justify="center" alignItems="center" direction="row" > 
                                <div className="App-home-testimonial-line"></div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container justify="center" alignItems="center" direction="row" > 
                                <Grid item xs={12}  sm={4} className="App-home-awards-item">
                                    <Grid container justify="center" alignItems="center" direction="row" > 
                                        <div className={[classes.imgSectionWhite]}>  
                                            <Grid item xs={12} >
                                                <Grid container justify="center" alignItems="center" direction="row" > 
                                                    <img clasName={[classes.img]} src={require('../../resources/img/awards/axilor.png')}/>
                                                </Grid>
                                            </Grid>
                                        </div>
                                        <div className={[classes.imgSectionGreen]}>  
                                            <Grid item xs={12} >
                                                <Grid container justify="center" alignItems="center" direction="row" > 
                                                    <Typography style={{ color: '#fff' }} variant="caption" >
                                                        Accelerated by Axilor
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}  sm={4}  className="App-home-awards-item">
                                    <Grid container justify="center" alignItems="center" direction="row" > 
                                       <div className={[classes.imgSection]}>
                                            <Grid item xs={12} >
                                                <Grid container justify="center" alignItems="center" direction="row" > 
                                                    <img clasName={[classes.img]} src={require('../../resources/img/awards/nasscom.png')}/>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}  sm={4}  className="App-home-awards-item">
                                    <Grid container justify="center" alignItems="center" direction="row" > 
                                        <div className={[classes.imgSection]} justify="center" alignItems="center" direction="row">
                                            <Grid item xs={12} >
                                                <Grid container justify="center" alignItems="center" direction="row" > 
                                                    <img clasName={[classes.img]} src={require('../../resources/img/awards/iitbombay.png')}/>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                           
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>              
            </Grid>
        </Grid>
     
        )
}

AwardsAndRecognitions.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(AwardsAndRecognitions);