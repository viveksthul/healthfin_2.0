import React, { Component } from 'react';
import NavBar from '../components/common/ConsumerNavBar';
import Footer from '../components/common/Footer';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import "../resources/css/animate.min.css";
import 'react-animated-slider/build/horizontal.css';
import '../resources/css/reactslider/style.css';

import green from '@material-ui/core/colors/green';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Help from '@material-ui/icons/Help';
import Button from '@material-ui/core/Button';

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

class FAQ  extends Component {

  constructor(props) {
    super(props);
    this.classes = props.classes;

    this.FaqQuestions = [{
      title : "Why should we choosed HealthFin?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "How do I get started?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "What is the minumum loan I can get right now?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "How much time does it take to get my loan eligibility?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "How much time does it take to get my credit evaluation done?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "Do I have to give any collateral?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "What all documents do I required to get my Credit evaluation done?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "Why do I require so many documents?",
      description: "The documents are required to identity-verify, credit-check and risk-assess a borrower. Apart from the CIBIL score, we use various other parameters like ability, stability, past performance and intention of the borrowers, which are evaluated basis these documents. The documents like salary slips, bank statements, ITR’s, balance sheets help in taking a collective and transparent decision for the borrower."
    },
    {
      title : "How do I repay my Medical Loan?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "What will be the date of my EMI?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title : "What will be the duration of the laon?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }];
   
  }

  render() {
    return (
        <Grid container spacing={0}className={this.classes.root} alignItems="center" direction="row" justify="center">
          <NavBar moduleName="FAQ"/>
            <Grid item xs={12} >
              <Grid container spacing={0} className={["App-faq-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={11} sm={9} >
                  <Typography className={["App-faq-title"]} variant="h6" >
                    Frequently Asked Questions (FAQ's)
                  </Typography>
                  <div className="App-faq-line"></div>
                  <div style={{marginBottom : "40px"}}></div>
                  {this.FaqQuestions.map((item, index) => (
                      <ExpansionPanel style={{marginTop: '10px', borderRadius: "6px"}}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Help className={this.classes.icon} />
                          <Typography className={this.classes.heading}>
                          {index + 1}. {item.title}
                          </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography style={{marginLeft : "35px"}}>
                          {item.description}
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>    
                    ))}

                
                </Grid>
                <Grid item xs={11} sm={9} >
                  <Grid container spacing={0} className={this.classes.root} alignItems="center" direction="row" justify="center" style={{marginTop : 30}}>
                    <Button variant="outlined" color="primary" className={this.classes.button}>
                      + View All
                    </Button>
                  </Grid>    
                </Grid>
              </Grid>
            </Grid> 
          <Footer/>
        </Grid>
    );
  }
}

export default withStyles(styles)(FAQ);
