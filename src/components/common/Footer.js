import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import Home from '@material-ui/icons/Home';
import Account from '@material-ui/icons/AccountCircle';
import Streetview from '@material-ui/icons/Streetview';
import Message from '@material-ui/icons/Message';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import Help from '@material-ui/icons/Help';
import Tab from '@material-ui/icons/Tab';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import { Link } from 'react-router-dom';

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
    },
    icon: {
        margin: "10px",
    },
    social : {
        width: 40,
        height: 40,
        objectFit: "contain",
        margin: "5px",
      }
      
  };

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  
const Footer = ( props ) => {



    const { classes } = props;
   
    return ( 
        <Grid item xs={12} sm={12}>
            <Grid container  className={["App-home-footer-bg"]}  alignItems="start" direction="row" justify="center">
                <Grid item xs={4} sm={3} >
                    <Grid container justify="center" alignItems="center" direction="row" > 
                        <Grid item xs={12} sm={12}>
                            <Grid container alignItems="center" direction="row" justify="start">
                                <Home className={classes.icon} />
                                <Typography style={{ color: '#fff' }} variant="caption" component={Link} to="/" >
                                    Home
                                </Typography>
                            </Grid>
                        </Grid>  
                        <Grid item xs={12} sm={12}>
                            <Grid container  alignItems="center" direction="row" justify="start">
                                <Account className={classes.icon} />
                                <Typography style={{ color: '#fff' }} variant="caption" component={Link} to="/about">
                                    About
                                </Typography>
                            </Grid>
                        </Grid>     
                        <Grid item xs={12} sm={12}>
                            <Grid container alignItems="center" direction="row" justify="start">
                                <Message className={classes.icon} />
                                <Typography style={{ color: '#fff' }} variant="caption" component={Link} to="/blog" >
                                    Blogs
                                </Typography>
                            </Grid>
                        </Grid>     
                        <Grid item xs={12} sm={12}>
                            <Grid container alignItems="center" direction="row" justify="start">
                                <Streetview className={classes.icon} />
                                <Typography style={{ color: '#fff' }} variant="caption" >
                                    Careers
                                </Typography>
                            </Grid>
                        </Grid>                 
                    </Grid>
                </Grid>              
                <Grid item xs={8} sm={4}  >
                    <Grid container justify="start" alignItems="center" direction="row" > 
                        <Grid item xs={12}>
                            <Grid container  alignItems="center" direction="row" justify="start">
                                <VerifiedUser className={classes.icon} />
                                <Typography style={{ color: '#fff' }} variant="caption" component={Link} to="/privacyPolicy" >
                                    Privacy Policy
                                </Typography>
                            </Grid>
                        </Grid>  
                        <Grid item xs={12}>
                            <Grid container  alignItems="center" direction="row" justify="start">
                                <Tab className={classes.icon} />
                                <Typography style={{ color: '#fff' }} variant="caption" >
                                    Terms and Conditions
                                </Typography>
                            </Grid>
                        </Grid>     
                        <Grid item xs={12}>
                            <Grid container   alignItems="center" direction="row" justify="start">
                                <Help className={classes.icon} />
                                <Typography style={{ color: '#fff' }} variant="caption"  component={Link} to="/faq">
                                    Frequesntly Asked Questions
                                </Typography>
                            </Grid>
                        </Grid>     
                        <Grid item xs={12}>
                            <Grid container  alignItems="center" direction="row" justify="start">
                                <AlternateEmail className={classes.icon} />
                                <Typography style={{ color: '#fff' }} variant="caption" >
                                    customercare@healthfin.in
                                </Typography>
                            </Grid>
                        </Grid>                 
                    </Grid>
                </Grid>              
                <Grid item xs={12} sm={4}  >
                    <Grid container spacing={24} justify="start" alignItems="center" direction="row" > 
                        <Grid item xs={12} className="App-home-footer-contact" style={{marginTop:20}}>
                            <Grid container  alignItems="center" direction="row" justify="start" >
                                <Typography style={{ color: '#fff',padding :0 }} variant="caption">
                                    Follow us on
                                </Typography>
                              </Grid>
                        </Grid>  
                        <Grid item xs={12} className="App-home-footer-contact">
                            <Grid container  alignItems="center" direction="row" justify="start" >

                                <img src={require('../../resources/img/social/fb.svg')} className={classes.social} />
                                <img src={require('../../resources/img/social/twitter.svg')} className={classes.social} />
                                <img src={require('../../resources/img/social/gplus.svg')} className={classes.social} />
                                <img src={require('../../resources/img/social/linkedin.svg')} className={classes.social} />
               
                                
                            </Grid>
                        </Grid>  
                        <Grid item xs={12} className="App-home-footer-contact" style={{marginTop:15}}>
                            <Grid container  alignItems="center" direction="row" justify="start" >
                                <Typography style={{ color: '#fff' }} variant="caption" >
                                    Contact us on
                                </Typography>
                              </Grid>
                        </Grid>  
                        <Grid item xs={12} className="App-home-footer-contact">
                            <Grid container  alignItems="center" direction="row" justify="start" >
                                <Typography style={{ color: '#fff' }} variant="caption" >
                                    +91-7507008181 
                                    +91-9561137766   
                                </Typography>   
                            </Grid>
                        </Grid>   
                        <Grid item xs={12} className="App-home-footer-contact" style={{marginTop:15}}>
                            <Grid container  alignItems="center" direction="row" justify="start" >
                                <Typography style={{ color: '#fff' }} variant="caption" >
                                 Office address
                                </Typography>
                              </Grid>
                        </Grid>  
                        
                        <Grid item xs={12} className="App-home-footer-contact">
                            <Grid container  alignItems="center" direction="row" justify="start">
                                <Typography style={{ color: '#fff' }} variant="caption" >
                                 #123- B, Industrial Complex, Wanowarie, Pune, Maharashtra, India
                                </Typography>
                            </Grid>
                        </Grid>  
                    </Grid>
                </Grid>              
         
            </Grid>
        </Grid>
        
        )
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Footer);