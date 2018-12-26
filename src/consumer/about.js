import React, { Component } from 'react';
import NavBar from '../components/home/consumerNavBar';
import Footer from '../components/home/footer';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles,  createMuiTheme } from '@material-ui/core/styles';
import "../resources/css/animate.min.css";
import 'react-animated-slider/build/horizontal.css';
import '../resources/css/reactslider/style.css';
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
  sliderPadding:{
    paddingLeft:'70px'
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
    backgroundColor: 'transparent',
    boxShadow:'none',
    alignItems : 'start',
    justifyContent: "start"
  },
  cardBlog: {
    display: 'flex',
    backgroundColor: '#fff',
    boxShadow:'none',
    alignItems : 'start',
    justifyContent: "start"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems : 'start'
  },
  content: {
    flex: '1 0 auto',
    alignItems : 'start'
  },
  cover: {
    width: 151,
  },
  countsFirstBlock: {
    paddingLeft : '100px'
  },
  countsSecondBlock: {
    paddingLeft : '80px'
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



class About  extends Component {

  constructor(props) {
    super(props);
    this.classes = props.classes;
   
  }

  render() {
    return (
        <Grid container spacing={0}className={this.classes.root} >
          <NavBar/>
            <Grid item xs={12} >
              <Grid container spacing={0} className={["App-about-slider-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={12} >
                  <Grid container spacing={0} alignItems="center" direction="row" justify="center">
                    <Grid item xs={6} className={this.classes.sliderPadding} >
                      <Typography className={["App-about-slider-title"]} variant="h3" >
                          HealthFin launched in March 2012
                      </Typography>
                      <div className="App-home-slider-line"></div>
                      <Typography className={["App-about-slider-content"]} variant="body1" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <img src={require('../resources/img/about/topsection.png')} alt=''/>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={0} className={["App-aboutus-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={12} >
                  <Typography className={["App-aboutus-title"]} variant="h5" >
                      About us
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ color: '#fff' }}>
                    <Grid container justify="center" alignItems="center" direction="row" > 
                    <div className="App-aboutus-line"></div>
                    </Grid>
                </Grid>
                <Grid item xs={8} >
                    <Grid container justify="center" alignItems="center" direction="row" > 
                      <Typography  variant="h6" style={{fontSize : "16px",     textAlign: "center"}}>
                        We call ourselves facilitators of better health ,we provide a 360 engagement with the patient .Not only do we help him find an apt solution to his medical problems but also to find a solution to fund his medical procedure in the most hassle free manner ,providing him the best deal. A technology enabled marketplace to get the best deals from different partner banks to fund medical treatment at the best hospitals. Using technology as an enabler we are creating a new ecosystem wherin the customer is empowered to make the best choices as per his needs. We have a strong and experienced team which constantly endeavours to bring the best healthcare solution to the doorstep of the customer at the most affordable rates. We strive for excellence and make it a point that in the process we get the best value for the customer.
                      </Typography>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} >
              <Grid container spacing={0} className={["App-about-team-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={12} >
                  <Grid container spacing={0} alignItems="center" direction="row" justify="center">
                    <Grid item xs={6}>
                      <img src={require('../resources/img/about/aboutusteam.png')} style={{margin:"20px"}} alt=''/>
                    </Grid>
                    <Grid item xs={6} className={this.classes.sliderPadding} >
                      <Typography className={["App-about-team-title"]} variant="h3" >
                        Today a team of 40 dedicated employees
                      </Typography>
                      <div className="App-home-slider-line"></div>
                      <Typography className={["App-about-team-content"]} variant="body1" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0} className={["App-aboutus-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={12} >
                  <Typography className={["App-aboutus-title"]} variant="h5" >
                    HealthFin Journey so far
                  </Typography>
                </Grid>
                <Grid item xs={12}  style={{ color: '#fff' }}>
                    <Grid container justify="center" alignItems="center" direction="row" > 
                    <div className="App-aboutus-line"></div>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid container justify="center" alignItems="center" direction="row" > 
                      <Typography  variant="h6" style={{fontSize : "16px",     textAlign: "center"}}>
                        We call ourselves facilitators of better health ,we provide a 360 engagement with the patient .Not only do we help him find an apt solution to his medical problems but also to find a solution to fund his medical procedure in the most hassle free manner ,providing him the best deal. A technology enabled marketplace to get the best deals from different partner banks to fund medical treatment at the best hospitals. Using technology as an enabler we are creating a new ecosystem wherin the customer is empowered to make the best choices as per his needs. We have a strong and experienced team which constantly endeavours to bring the best healthcare solution to the doorstep of the customer at the most affordable rates. We strive for excellence and make it a point that in the process we get the best value for the customer.
                      </Typography>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0} className={["App-about-team-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={12} >
                  <Typography className={["App-aboutus-title"]} variant="h5" >
                  We are here to help you to take charge !
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ color: '#fff' }}>
                    <Grid container justify="center" alignItems="center" direction="row" > 
                    <div className="App-aboutus-line"></div>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid container justify="center" alignItems="center" direction="row" > 
                      <Typography  variant="h6" style={{fontSize : "16px",     textAlign: "center"}}>
                        A family is shocked at the revelation of a disease of their loved ones. By the time they absorb the news, they start reeling with the realization of lack of funds. We believe that no one should be made to choose between money and saving a life or for that matter even improving the quality of life through medical interventions. This initiated the conceiving of HeathFin where we want to stop cost from being a deterrent to achieve good health.
                      </Typography>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0} className={["App-aboutus-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={12} >
                  <Typography className={["App-aboutus-title"]} variant="h5" >
                    Why us?
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ color: '#fff' }}>
                    <Grid container justify="center" alignItems="center" direction="row" > 
                    <div className="App-aboutus-line"></div>
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Grid container justify="center" alignItems="center" direction="row" > 
                      <Typography  variant="h6" style={{fontSize : "16px",     textAlign: "center"}}>
                      Healthfin’s lending platform gives you or your healthcare provider the ability to access finance companies at the point of services from any desktop or mobile device. Hospital staff on behalf of patients or the patient relative or even the patient (in select cases) can apply for loan in less than two minutes and can receive an approval within five minutes. The loan amount is directly disbursed to the hospital with in the shortest time possible.
                      </Typography>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
            
          <Footer/>
        </Grid>
    );
  }
}

export default withStyles(styles)(About);
