import React, { Component } from 'react';
import NavBar from '../components/common/ConsumerNavBar';
import SectionTop from '../components/home/SectionTop';
import Slider from '../components/home/Slider';
import LoanProcess from '../components/home/LoanProcess';
import EmiCalculator from '../components/home/EMICalculator';
import Testimonial from '../components/home/Testimonial';
import Blog from '../components/home/Blog';
import AwardAndRecognitions from '../components/home/AwardsAndRecognitions';
import Footer from '../components/common/Footer';


import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardActions from '@material-ui/core/CardActions';
import classNames from 'classnames';

import 'react-animated-slider/build/horizontal.css';
import '../resources/css/reactslider/style.css';
import "../resources/css/animate.min.css";
import {Animated} from "react-animated-css";

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});



class Home  extends Component {

  constructor(props) {
    super(props);
    this.classes = props.classes;
  
  }

  render() {
    
    return (
        <Grid container spacing={0} className={this.classes.root}  >
          <NavBar moduleName="Home"/>
          <SectionTop />
          <Slider/>
          {/* <LoanProcess/> */}
          <EmiCalculator/>
          <Testimonial/>
          <Blog/>
          <AwardAndRecognitions/>
          <Footer/>
        </Grid>
    );
  }
}

export default withStyles(styles)(Home);
