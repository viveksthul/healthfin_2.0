import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "../../resources/css/animate.min.css";
import {Animated} from "react-animated-css";
import 'react-animated-slider/build/horizontal.css';
import '../../resources/css/reactslider/style.css';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ContinueSlider from '../common/ContinuousSlider';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import green from '@material-ui/core/colors/green';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';

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
      padding:'0px 50px 0px 20px'
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
    card : 
    {
        boxShadow:"none"
    },
    applyButton: {
        color: "#fff",
        width : "360px",
        textTransform: 'none'
      },
  });


class SectionTop  extends Component {
    constructor(props) {
        super(props);
        this.classes = props.classes;
        this.onMouseOver = this.onMouseOver.bind(this);
        this.style =
        {
            inputField : {
                style:{ 
                    padding: '12px 14px',
                    fontSize: '0.8em'
                }
            }
        };

        this.sliderArray1 = [
            {
                title : "1. Dealing with high Pharmacy bills",
                description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/bones.png")
            },
            {
                title : "2. Dealing with high Pharmacy bills",
                description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/brain.png")
            },
            {
                title : "3. Dealing with high Pharmacy bills",
                description: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/child.png")
            },
            {
                title : "4. Dealing with high Pharmacy bills",
                description: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/doctor.png")
            },
            {
                title : "5. Dealing with high Pharmacy bills",
                description: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/dose.png")
            },
            {
                title : "6. Dealing with high Pharmacy bills",
                description: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/bones.png")
            },
            {
                title : "7. Dealing with high Pharmacy bills",
                description: "7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/ear.png")
            }
        ];

        this.sliderArray2 = [
            {
                title : "1. Dealing with high Pharmacy bills",
                description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/eye.png")
            },
            {
                title : "2. Dealing with high Pharmacy bills",
                description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/hands.png")
            },
            {
                title : "3. Dealing with high Pharmacy bills",
                description: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/heart.png")
            },
            {
                title : "4. Dealing with high Pharmacy bills",
                description: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/kidney.png")
            },
            {
                title : "5. Dealing with high Pharmacy bills",
                description: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/medicine.png")
            },
            {
                title : "6. Dealing with high Pharmacy bills",
                description: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/bones.png")
            }
        ];

        this.sliderArray3 = [
            {
                title : "1. Dealing with high Pharmacy bills",
                description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/patient.png")
            },
            {
                title : "2. Dealing with high Pharmacy bills",
                description: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/pregancy.png")
            },
            {
                title : "3. Dealing with high Pharmacy bills",
                description: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/random.png")
            },
            {
                title : "4. Dealing with high Pharmacy bills",
                description: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/rehabilitation.png")
            },
            {
                title : "5. Dealing with high Pharmacy bills",
                description: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/stethoscope.png")
            },
            {
                title : "6. Dealing with high Pharmacy bills",
                description: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/bones.png")
            },
            {
                title : "7. Dealing with high Pharmacy bills",
                description: "7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
                img: require("../../resources/img/home-sliders/teath.png")
            }
        ];
    }
    
    onMouseOver( title, description  ){

        if( title === "" ){
            this.setState({
                title: "Dealing with high Pharmacy bills",
                description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            });  
        }else{
            this.setState({
                title: title,
                description: description,
              });  
        }
        
    }

    state = {
        title: "Instant Medical Loans upto Rs. 50 Lakhs",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    };

    render() {
    
    return ( 
        
        <Grid item xs={12} >
            <Grid container  spacing={0} className={["App-home-slider-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={12} >
                    <Grid container  className={["App-home-slider"]}  alignItems="center" direction="row" justify="center">
                        <Grid item sm={7} xs={12} className={this.classes.sliderPadding} >
                            <Typography className={["App-home-slider-title"]} variant="h4" >
                                {this.state.title}
                            </Typography>
                            <div className="App-home-slider-line"></div>
                            <Typography className={["App-home-slider-content"]} variant="body1" >
                                {this.state.description}
                            </Typography>
                            <Button variant="contained" color="primary" className={[this.classes.fontCase, "App-home-slider-signup", this.classes.buttonSignUp]}>
                                Apply Loan                  
                            </Button>
                            
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            {/* <Grid container spacing={0}  alignItems="center" direction="row" justify="center">
                                <Grid item xs={12}  >
                                    <ContinueSlider rownumber="1" onMouseOver={this.onMouseOver} data={this.sliderArray1}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}  alignItems="center" direction="row" justify="center">
                                <Grid item xs={12}  >
                                    <ContinueSlider rownumber="4" onMouseOver={this.onMouseOver} data={this.sliderArray2}/>
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}  alignItems="center" direction="row" justify="center">
                                <Grid item xs={12}  >
                                    <ContinueSlider rownumber="3" onMouseOver={this.onMouseOver} data={this.sliderArray3}/>
                                </Grid>
                            </Grid> */}

                            <Card style={{marginTop : "60px", marginBottom : "60px"}}>
                                <CardContent>
                                    <Grid container spacing={0} justify="start" alignItems="start" direction="row">
                                        <Grid item xs={12} >
                                            <Typography className={["App-home-slider-right-title"]} variant="h6"  >
                                            We'll get back to you, with best offers
                                            </Typography>
                                        </Grid>   
                                        <Grid item xs={12} >
                                            <TextField
                                            id="filled-full-width"
                                            label="Please tell us your name"
                                            style={{ marginTop: 20}}
                                            placeholder="Full Name"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={this.style.inputField}
                                            />
                                        </Grid> 
                                        <Grid item xs={12} >
                                            <TextField
                                            id="filled-full-width"
                                            label="How much loan amount are you looking for?"
                                            style={{ marginTop: 15 }}
                                            placeholder="Amount"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={this.style.inputField}
                                            />
                                        </Grid> 
                                        <Grid item xs={12} >
                                            <TextField
                                            id="filled-full-width"
                                            label="Please tell us your email"
                                            style={{ marginTop: 15 }}
                                            placeholder="Email"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={this.style.inputField}
                                            />
                                        </Grid>
                                        <Grid item xs={12} >
                                            <TextField
                                            id="filled-full-width"
                                            label="Please tell us your contact number"
                                            style={{ marginTop: 15 }}
                                            placeholder="Contact Number"
                                            fullWidth
                                            margin="normal"
                                            variant="outlined"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={this.style.inputField}
                                            />
                                        </Grid>    
                                        <Grid item xs={12}  style={{marginTop: 10}}>
                                            <Grid container spacing={0} >
                                                <Button  variant="contained" color="primary" className={classNames(this.classes.applyButton)} >
                                                    View Plans
                                                </Button>
                                            </Grid>
                                        </Grid> 
                                    </Grid>
                                    
                                </CardContent>
                            </Card>
                       
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} >
                    <Grid container className={["App-home-count-bg", "App-home-count-section"]}  alignItems="center" direction="row" justify="center">
                    <Grid item xs={4}  >
                        <Card className={this.classes.card} style={{background:"transparent"}}>
                            <Grid item xs={12} >
                                <Grid container spacing={0} className={["App-counts"]}  alignItems="center" direction="row" justify="center">
                                    <img src={require('../../resources/img/counts/customers.png')} className="App-counts-img" alt=''/>
                                    <div className={this.classes.details}>
                                    <CardContent className={this.classes.content}>
                                        <Typography className={["App-counts-title"]} variant="subheading" >
                                        SATISFIED CUSTOMERS
                                        </Typography>
                                        <Typography className={["App-counts-number"]} variant="h3" >
                                        15,487
                                        </Typography>
                                    </CardContent>
                                    </div>
                                </Grid>
                                </Grid>
                            </Card>
                    </Grid>
                    <Grid item xs={4} className="countsSecondBlock">
                        <Card className={this.classes.card} style={{background:"transparent"}}>
                            <Grid item xs={12} >
                            <Grid container spacing={0} className={["App-counts"]}  alignItems="center" direction="row" justify="center">
                                <img src={require('../../resources/img/counts/cities.png')} className="App-counts-img" alt=''/>
                                <div className={this.classes.details}>
                                <CardContent className={this.classes.content}>
                                    <Typography className={["App-counts-title"]} variant="subheading" >
                                    CITIES PRESENCE
                                    </Typography>
                                    <Typography className={["App-counts-number"]} variant="h3" >
                                    60
                                    </Typography>
                                </CardContent>
                                </div>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={4}  >
                        <Card className={this.classes.card} style={{background:"transparent"}}>
                            <Grid item xs={12} >
                                <Grid container spacing={0} className={["App-counts"]}  alignItems="center" direction="row" justify="center">
                                <img src={require('../../resources/img/counts/success.png')} className="App-counts-img" alt=''/>
                                <div className={this.classes.details}>
                                    <CardContent className={this.classes.content}>
                                    <Typography className={["App-counts-title"]} variant="subheading" >
                                    SUCCESS RATIO
                                    </Typography>
                                    <Typography className={["App-counts-number"]} variant="h3" >
                                        98%
                                    </Typography>
                                    </CardContent>
                                </div>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    
        )
    }
}

SectionTop.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SectionTop);