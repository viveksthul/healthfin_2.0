import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import 'react-animated-slider/build/horizontal.css';
import '../../resources/css/reactslider/style.css';
import PropTypes from 'prop-types';
import 'react-animated-slider/build/horizontal.css';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
 
    root: {
        flexGrow: 1,
      },
      paper: {
        textAlign: 'left',
        color: theme.palette.text.secondary,
      }
});


const Testimonial = ( props ) => {

    const { classes } = props;
   
    return ( 
        <Grid item sm={12} xs={12}>
            <Grid container spacing={0} className={["App-home-testimonial-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={12} sm={8}  className={"App-home-testimonial"} >
                    <Grid container justify="center" alignItems="center" direction="row" > 
                        <Grid item xs={12} >
                            <Typography className={["App-home-testimonial-title"]} variant="h5" >
                                Trusted by these and many more customers
                            </Typography>
                        </Grid>
                        <Grid item xs={12}  style={{ color: '#fff' }}>
                            <Grid container justify="center" alignItems="center" direction="row" > 
                            <div className="App-home-testimonial-line"></div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container justify="center" alignItems="center" direction="row" > 
                            <Typography  variant="h4" style={{ color: '#fff', fontSize: "28px",fontWeight: "bold", marginTop : "50px", textAlign:"center" }}>
                                “Lorem ipsum dolor sit amet, consectetur adi pscn elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis exercitation.”
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container justify="center" alignItems="center" direction="row" > 
                                <Avatar alt="Avatar" src={require("../../resources/img/avatar.png")} style={{ width : 75, height :75,marginTop:"30px" }} />  
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container justify="center" alignItems="center" direction="row" > 
                            <Typography  variant="caption" style={{ color: '#a9abad', fontSize: "1.20rem", marginTop:"10px" }}>
                            John Doe
                            </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>              
            </Grid>
        </Grid>
        )
}

Testimonial.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Testimonial);