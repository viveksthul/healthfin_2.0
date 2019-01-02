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
    }
  });


class SectionTop  extends Component {
    constructor(props) {
        super(props);
        this.classes = props.classes;
        this.onMouseOver = this.onMouseOver.bind(this);
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
        title: "Dealing with high Pharmacy bills",
        description: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    };

    render() {
    
    return ( 
        
        <Grid item xs={12} >
            <Grid container spacing={0} className={["App-home-slider-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={12} >
                    <Grid container spacing={0} className={["App-home-slider"]}  alignItems="center" direction="row" justify="center">
                        <Grid item xs={6} className={this.classes.sliderPadding} >
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
                        <Grid item xs={6}>
                            <Grid container spacing={0}  alignItems="center" direction="row" justify="center">
                                <Grid item xs={12}  >
                                    {/* <ContinueSlider rownumber="1" onMouseOver={this.onMouseOver} data={this.sliderArray1}/> */}
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}  alignItems="center" direction="row" justify="center">
                                <Grid item xs={12}  >
                                    {/* <ContinueSlider rownumber="4" onMouseOver={this.onMouseOver} data={this.sliderArray2}/> */}
                                </Grid>
                            </Grid>
                            <Grid container spacing={0}  alignItems="center" direction="row" justify="center">
                                <Grid item xs={12}  >
                                    {/* <ContinueSlider rownumber="3" onMouseOver={this.onMouseOver} data={this.sliderArray3}/> */}
                                </Grid>
                            </Grid>
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