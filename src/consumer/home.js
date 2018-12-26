import React, { Component } from 'react';
import NavBar from '../components/home/consumerNavBar';
import HomeSectionTop from '../components/home/homeSectionTop';
import HomeSlider from '../components/home/homeSlider';
import HomeEmiCalculator from '../components/home/homeEMICalculator';
import HomeTestimonial from '../components/home/homeTestimonial';
import HomeBlog from '../components/home/homeBlog';
import AwardAndRecognitions from '../components/home/awardsAndRecognitions';
import Footer from '../components/home/footer';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "../resources/css/animate.min.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import 'react-animated-slider/build/horizontal.css';
import '../resources/css/reactslider/style.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardActions from '@material-ui/core/CardActions';
import classNames from 'classnames';

import green from '@material-ui/core/colors/green';
import {Animated} from "react-animated-css";

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

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

class Home  extends Component {

  constructor(props) {
    super(props);
    this.classes = props.classes;
    this.steps = {
      showStep1 : true,
      showStep2 : false,
      showStep3 : false,
      showStep4 : false,
      showStep5 : false
    };

    this.onStepChange = this.onStepChange.bind(this);
    
    this.stepsForLoan = [{
      title : "1. Make your accont on HealthFin",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "2. Apply for loan as per your requirements",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "3. Upload your Documents",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "4. Get Quick Approvals",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "5. Loan Money gets Disbursed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }];
  }

  onStepChange( index ){
    // debugger;
    this.steps = {
      showStep1 : false,
      showStep2 : false,
      showStep3 : false,
      showStep4 : false,
      showStep5 : false
    };

    switch( index ){
      case 0:
        this.steps.showStep1 = true;
        break;
      case 1:
        this.steps.showStep2 = true;
        break;
      case 2:
        this.steps.showStep3 = true;
        break;
      case 3:
        this.steps.showStep4 = true;
        break;
      case 4:
        this.steps.showStep5 = true;
        break;
      default:
        this.steps.showStep1 = true;
        break;
    }

    this.setState({
      steps : this.steps
    });
    
  }

  render() {
    
    return (
        <Grid container spacing={0}className={this.classes.root} >
          <NavBar/>
          <HomeSectionTop/>
          <HomeSlider/>
          
          <Grid item xs={12}>
            <Grid container spacing={0} className={["App-home-process-bg"]}  alignItems="center" direction="row" justify="center">
              <Grid item xs={12} className={this.classes.sliderPadding} >
                <Grid container justify="center" alignItems="center" direction="row" > 
                  <Grid item xs={12} >
                    <Typography className={["App-home-process-title"]} variant="h5" >
                        Steps to get Instant Medical Loan
                    </Typography>
                  </Grid>
                  <Grid item xs={12} >
                    <Grid container justify="center" alignItems="center" direction="row" > 
                      <div className="App-home-process-line"></div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={0}  justify="center" alignItems="center" direction="row" > 
                  <Grid item xs={5} >
                    <Grid container justify="center" alignItems="center" direction="row" > 
                      <List component="nav" className={this.classes.root}>
                      
                      {this.stepsForLoan.map( ( item, index ) => (
                        <ListItem alignItems="flex-start" key={1} index={index} onClick={()=>{this.onStepChange(index)}} role={undefined} dense button className="arrow_box" style={{ padding : '20px 24px' }}>
                          <ListItemText 
                            primary={<Typography variant="h6" style={{ color: '#14984a', fontSize:'16px', fontWeight:'bolder' }}>{item.title}</Typography>}
                            secondary={
                              <React.Fragment>
                                {<Typography variant="caption" style={{ color: '#585858', marginTop: "5px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>}
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                      ))}

                    
                      {/* <Divider /> */}
                      
                      </List>
                    </Grid>
                  </Grid>
                  <Grid item xs={1} >
                    <Grid container justify="center" alignItems="center" direction="row" > 
                     
                    </Grid>
                  </Grid>
                  <Grid item xs={5} >

                    <Animated animationIn="flipInY" animationOut="flipInY" isVisible={true} className={this.steps.showStep1 ? '' : 'hidden'}>
                      <Grid container justify="center" alignItems="center" direction="row"  > 
                        <Card className={[this.classescard, "App-home-process-card"]}>
                          <CardContent>
                              <img src={require('../resources/img/homeSignup.png')} className={[this.classes.slider2ImgHeight]} alt="Test" />
                          </CardContent>
                          <CardActions >
                          <Grid item xs={12} >
                            <Grid container justify="center" alignItems="center" direction="row" > 
                                <MuiThemeProvider theme={theme}>
                                  <Button  variant="contained" color="primary" className={classNames(this.classes.createAccount)} >
                                    Create Account 1
                                  </Button>
                                </MuiThemeProvider>
                              </Grid>
                            </Grid>
                          </CardActions>
                        </Card>
                      </Grid>
                    </Animated>

                    <Animated animationIn="flipInY" animationOut="flipInY" isVisible={true} className={this.steps.showStep2 ? '' : 'hidden'} >
                      
                      <Grid container justify="center" alignItems="center" direction="row"  > 
                        <Card className={[this.classescard, "App-home-process-card"]}>
                          <CardContent>
                              <img src={require('../resources/img/homeSignup.png')} className={[this.classes.slider2ImgHeight]} alt="Test" />
                          </CardContent>
                          <CardActions >
                          <Grid item xs={12} >
                            <Grid container justify="center" alignItems="center" direction="row" > 
                                <MuiThemeProvider theme={theme}>
                                  <Button  variant="contained" color="primary" className={classNames(this.classes.createAccount)} >
                                    Create Account 2
                                  </Button>
                                </MuiThemeProvider>
                              </Grid>
                            </Grid>
                          </CardActions>
                        </Card>
                      </Grid>
                    </Animated>

                    <Animated animationIn="flipInY" animationOut="flipInY" isVisible={true} className={this.steps.showStep3 ? '' : 'hidden'} >
                    
                      <Grid container justify="center" alignItems="center" direction="row" className={this.steps.showStep3 ? '' : 'hidden'}  > 
                        <Card className={[this.classescard, "App-home-process-card"]}>
                          <CardContent>
                              <img src={require('../resources/img/homeSignup.png')} className={[this.classes.slider2ImgHeight]} alt="Test" />
                          </CardContent>
                          <CardActions >
                          <Grid item xs={12} >
                            <Grid container justify="center" alignItems="center" direction="row" > 
                                <MuiThemeProvider theme={theme}>
                                  <Button  variant="contained" color="primary" className={classNames(this.classes.createAccount)} >
                                    Create Account 3
                                  </Button>
                                </MuiThemeProvider>
                              </Grid>
                            </Grid>
                          </CardActions>
                        </Card>
                      </Grid>
                    </Animated>

                    <Animated animationIn="flipInY" animationOut="flipInY" isVisible={true} className={this.steps.showStep4 ? '' : 'hidden'} >
                  
                      <Grid container justify="center" alignItems="center" direction="row" className={this.steps.showStep4 ? '' : 'hidden'}  > 
                        <Card className={[this.classescard, "App-home-process-card"]}>
                          <CardContent>
                              <img src={require('../resources/img/homeSignup.png')} className={[this.classes.slider2ImgHeight]} alt="Test" />
                          </CardContent>
                          <CardActions >
                          <Grid item xs={12} >
                            <Grid container justify="center" alignItems="center" direction="row" > 
                                <MuiThemeProvider theme={theme}>
                                  <Button  variant="contained" color="primary" className={classNames(this.classes.createAccount)} >
                                    Create Account 4
                                  </Button>
                                </MuiThemeProvider>
                              </Grid>
                            </Grid>
                          </CardActions>
                        </Card>
                      </Grid>
                    </Animated>

                    <Animated animationIn="flipInY" animationOut="flipInY" isVisible={true} className={this.steps.showStep5 ? '' : 'hidden'} >
                    
                      <Grid container justify="center" alignItems="center" direction="row" className={this.steps.showStep5 ? '' : 'hidden'}  > 
                        <Card className={[this.classescard, "App-home-process-card"]}>
                          <CardContent>
                              <img src={require('../resources/img/homeSignup.png')} className={[this.classes.slider2ImgHeight]} alt="Test" />
                          </CardContent>
                          <CardActions >
                          <Grid item xs={12} >
                            <Grid container justify="center" alignItems="center" direction="row" > 
                                <MuiThemeProvider theme={theme}>
                                  <Button  variant="contained" color="primary" className={classNames(this.classes.createAccount)} >
                                    Create Account 5
                                  </Button>
                                </MuiThemeProvider>
                              </Grid>
                            </Grid>
                          </CardActions>
                        </Card>
                      </Grid>
                    </Animated>

                  </Grid>
                </Grid>
              </Grid>              
            </Grid>
          </Grid>
          
          <HomeEmiCalculator/>
          <HomeTestimonial/>
          <HomeBlog/>
          <AwardAndRecognitions/>
          <Footer/>
        </Grid>
    );
  }
}

export default withStyles(styles)(Home);
