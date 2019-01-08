import React, { Component } from 'react';
import NavBar from '../components/common/ConsumerNavBar';
import Footer from '../components/common/Footer';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import classNames from 'classnames';

import { Link } from 'react-router-dom';

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
  heading: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: "gray",
    marginLeft: "10px"
  },
  icon:{
    opacity:0.6
  },
  background:{
    background : '#fafafa'
  },

  card : {
    marginTop : "30px"
  },
  grow: {
      flexGrow: 1,
  }, 
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },

  inline: {
    display: 'inline',
  },
  applyButton : {
    marginTop : "20px"
  },
  loginLink:{
    color: "#3f51b5",
    cursor: "pointer"
  }
});


class SignUp  extends Component {

  constructor(props) {
    super(props);
    this.classes = props.classes;

  } 
  
  render() {
    return (
      <Grid container spacing={0} className={this.classes.root} alignItems="center" direction="row" justify="center">
        <NavBar/>
            <Grid container spacing={0} className={[this.classes.background, "App-signup-container"]} alignItems="center" direction="row" justify="center">
              <Grid item xs={12} sm={10} >
                <Grid container spacing={0} justify="center" alignItems="center" direction="row" className={["App-signup-content"]}> 
                    <Grid item xs={12} sm={6} >
                      <Grid container spacing={0} justify="start" alignItems="start" direction="row" className="App-signup-content-left">
                          <Grid item xs={12} >
                            <Grid container spacing={0} justify="center" alignItems="center" direction="row" >
                              <Typography variant="h6" style={{fontWeight : "bold"}} className="App-signup-title">
                                Sign Up to apply for loan
                              </Typography>
                            </Grid>   
                          </Grid>   
                          <Grid item xs={12} >
                              <TextField
                                    id="standard-name"
                                    label="Name"
                                    margin="normal"
                                    style={{ marginTop: 20, width : "100%" }}
                              />

                              <TextField
                                    id="standard-name"
                                    label="Email Address"
                                    margin="normal"
                                    style={{ marginTop: 20, width : "100%" }}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                              />

                              <TextField
                                    id="standard-name"
                                    label="Mobile"
                                    type="number"
                                    
                                    margin="normal"
                                    style={{ marginTop: 20, width : "100%" }}
                                    
                              />
                              
                          </Grid>     
                          <Grid item xs={12} >
                            <Grid container spacing={0} justify="center" alignItems="center" direction="row" >
                              <Button  variant="contained" color="primary" className={classNames(this.classes.applyButton)} >
                                  Sign Up
                              </Button>
                              
                            </Grid>   
                          </Grid>    
                          <Grid item xs={12} >
                            <Grid container spacing={0} justify="center" alignItems="center" direction="row" >
                            
                              <Typography variant="caption" className={classNames(this.classes.applyButton)} >
                                Already have an account? &nbsp;
                              </Typography>
                              <Typography variant="caption" className={classNames( this.classes.applyButton, this.classes.loginLink)} component={Link} to="/login" >
                                  Login
                              </Typography>
                            </Grid>   
                          </Grid>  
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}  >
                      <img src={require('../resources/img/homeSignup.png')} style={{width:"100%"}} alt="Test" />
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>
        <Footer/>
      </Grid> 
        
    );
  }
}

export default withStyles(styles)(SignUp);
