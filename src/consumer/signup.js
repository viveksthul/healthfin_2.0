import React, { Component } from 'react';
import NavBar from '../components/common/ConsumerNavBar';
import Footer from '../components/common/Footer';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Description from '@material-ui/icons/Description';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import green from '@material-ui/core/colors/green';

import classNames from 'classnames';

import { Link, Route, BrowserRouter } from 'react-router-dom';

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
  padding :{
    padding : '50px'
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
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
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

    this.FaqQuestions = [{
      title : "Why should we choosed HealthFin?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl : require('../resources/img/blogs/blog1.jpg')
    },
    {
      title : "How do I get started?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl : require('../resources/img/blogs/blog1.jpg')
    },
    {
      title : "What is the minumum loan I can get right now?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl : require('../resources/img/blogs/blog1.jpg')
    }];
  } 
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };


  render() {
    return (
        <Grid container spacing={0}className={this.classes.root} alignItems="center" direction="row" justify="center">
          <NavBar/>
              <Grid container spacing={0} className={[this.classes.root, this.classes.background, this.classes.padding]} alignItems="center" direction="row" justify="center">
                <Grid item xs={10} >
                  <Grid container spacing={0} justify="center" alignItems="center" direction="row" className={["App-signup-content"]}> 
                      <Grid item xs={6} >
                      <Grid container spacing={0} justify="start" alignItems="start" direction="row" className="App-signup-content-left">
                          <Grid item xs={12} >
                            <Grid container spacing={0} justify="center" alignItems="center" direction="row" >
                              <Typography variant="h6" style={{fontWeight : "bold"}} >
                                Sign Up to apply for loan
                              </Typography>
                            </Grid>   
                          </Grid>   
                          <Grid item xs={12} >
                              <TextField
                                    id="standard-name"
                                    label="Name"
                                  //  className={this.classes.textField}
                                    value={this.state.name}
                                  //  onChange={this.handleChange('name')}
                                    margin="normal"
                                    style={{ marginTop: 20, width : "100%" }}
                                    
                              />

                              <TextField
                                    id="standard-name"
                                    label="Email Address"
                                    value={this.state.name}
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
                                    value={this.state.name}
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
                      <Grid item xs={6} >
                        <img src={require('../resources/img/homeSignup.png')} className={[this.classes.slider2ImgHeight]} alt="Test" />
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
