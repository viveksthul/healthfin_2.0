import React, { Component } from 'react';
import NavBar from '../components/consumerNavBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import "../resources/css/animate.min.css";
import {Animated} from "react-animated-css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../resources/css/reactslider/style.css';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  fullHeight:{
    height: "100%",
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
  sliderLeftPanel: {
    paddingLeft: '100px',
    paddingTop: '150px'
  },
  yellowBg : {
    backgroundColor: 'yellow'
  },
  redBg : {
    backgroundColor: 'red'
  },
  greenBg : {
    backgroundColor: 'green'
  },  
  card: {
    display: 'flex',
    backgroundColor: 'transparent',
    boxShadow:'none',
    alignItems : 'center',
    justifyContent: "center"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems : 'center'
  },
  content: {
    flex: '1 0 auto',
    alignItems : 'center'
  },
  cover: {
    width: 151,
  },
  countsFirstBlock: {
    paddingLeft : '100px'
  },
  countsSecondBlock: {
    paddingLeft : '80px'
  }
});

const content = [
	{
		title: 'Vulputate Mollis Ultricies Fermentum Parturient',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Read More',
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Tortor Dapibus Commodo Aenean Quam',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Phasellus volutpat metus',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Buy now',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

class Home  extends Component {

  constructor(props) {
    super(props);
    this.classes = props.classes;

  }

  render() {
    return (
      
        <Grid container spacing={0}className={this.classes.root} >
          <Grid item xs={12}>
            <Paper className={this.classes.paper}>
              <NavBar/>
            </Paper>
          </Grid>
          <Grid item xs={12} >
              <Grid container spacing={0} className={["App-home-slider-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={7} className={this.classes.sliderPadding} >
                   <Typography className={["App-home-slider-title"]} variant="h4" >
                    Dealing with high Pharmacy bills
                  </Typography>
                  <div className="App-home-slider-line"></div>
                  <Typography className={["App-home-slider-content"]} variant="body1" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </Typography>
                  <Button variant="contained" color="primary" className={[this.classes.fontCase, "App-home-slider-signup", this.classes.buttonSignUp]}>
                    Apply Loan                  
                  </Button>
                </Grid>
                <Grid item xs={5}>
                  <div className="App-home-slider-box">
                      <Animated animationIn="slideInRight" animationOut="slideInLeft" animationIterationCount="infinite" isVisible={true}>
                        <div className="App-home-slider-small-rectangle App-Home-MiniSlider" >
                          <img src={require('../resources/img/home-sliders/pregnant.png')} class="App-Home-MiniSliderItem" alt='Healthfin Logo'/>
                        </div>
                        <div className="App-home-slider-small-rectangle App-Home-MiniSlider" >
                          <img src={require('../resources/img/home-sliders/baby-boy.png')} class="App-Home-MiniSliderItem" alt='Healthfin Logo'/>
                        </div>
                        <div className="App-home-slider-small-rectangle App-Home-MiniSlider" >
                          <img src={require('../resources/img/home-sliders/brain.png')} class="App-Home-MiniSliderItem" alt='Healthfin Logo'/>
                        </div>
                        <div className="App-home-slider-small-rectangle App-Home-MiniSlider" >
                          <img src={require('../resources/img/home-sliders/brain.png')} class="App-Home-MiniSliderItem" alt='Healthfin Logo'/>
                        </div>
                      </Animated>
                    </div>
                    <div>
                      <Animated animationIn="slideInRight" animationOut="slideInLeft" animationIterationCount="infinite" isVisible={true}>
                          <div className="App-home-slider-small-rectangle App-Home-MiniSlider" >
                            <img src={require('../resources/img/home-sliders/bones.png')} class="App-Home-MiniSliderItem" alt='Healthfin Logo'/>
                          </div>
                          <div className="App-home-slider-small-rectangle App-Home-MiniSlider" >
                            <img src={require('../resources/img/home-sliders/medicine.png')} class="App-Home-MiniSliderItem" alt='Healthfin Logo'/>
                          </div>
                          <div className="App-home-slider-small-rectangle App-Home-MiniSlider" >
                            <img src={require('../resources/img/home-sliders/brain.png')} class="App-Home-MiniSliderItem" alt='Healthfin Logo'/>
                          </div>
                          <div className="App-home-slider-small-rectangle App-Home-MiniSlider" >
                            <img src={require('../resources/img/home-sliders/brain.png')} class="App-Home-MiniSliderItem" alt='Healthfin Logo'/>
                          </div>
                        </Animated>
                    </div>
                    <div>
                      <Animated animationIn="slideInRight" animationOut="slideInLeft" animationIterationCount="infinite" isVisible={true}>
                          <div className="App-home-slider-small-rectangle App-Home-MiniSlider" >
                            <img src={require('../resources/img/home-sliders/pharmacy.png')} class="App-Home-MiniSliderItem" alt='Healthfin Logo'/>
                          </div>
                          <div className="App-home-slider-small-rectangle App-Home-MiniSlider" >
                            <img src={require('../resources/img/home-sliders/baby-boy.png')} class="App-Home-MiniSliderItem" alt='Healthfin Logo'/>
                          </div>
                          <div className="App-home-slider-small-rectangle App-Home-MiniSlider" >
                            <img src={require('../resources/img/home-sliders/brain.png')} class="App-Home-MiniSliderItem" alt='Healthfin Logo'/>
                          </div>
                          <div className="App-home-slider-small-rectangle App-Home-MiniSlider" >
                            <img src={require('../resources/img/home-sliders/brain.png')} class="App-Home-MiniSliderItem" alt='Healthfin Logo'/>
                          </div>
                        </Animated>
                        
                    </div>
                </Grid>
              </Grid>
          </Grid>
          <Grid item xs={12} >
              <Grid container spacing={0} className={["App-counts"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={4}   className="countsFirstBlock">
                  <Card className={this.classes.card} >
                    <img src={require('../resources/img/counts/customers.png')} className="App-counts-img" alt=''/>
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
                  </Card>
                </Grid>
                <Grid item xs={4} className="countsSecondBlock">
                  <Card className={this.classes.card}>
                    <img src={require('../resources/img/counts/cities.png')} className="App-counts-img" alt=''/>
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
                  </Card>
                </Grid>
                <Grid item xs={4}  >
                  <Card className={this.classes.card}>
                    <img src={require('../resources/img/counts/success.png')} className="App-counts-img" alt=''/>
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
                  </Card>
                </Grid>
              </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={this.classes.paper}>
            <Slider className="slider-wrapper">
              {content.map((item, index) => (
                <div
                  key={index}
                  className="slider-content"
                  style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                  <div className="inner">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <button>{item.button}</button>
                  </div>
                  <section>
                    <img src={item.userProfile} alt={item.user} />
                    <span>
                      Posted by <strong>{item.user}</strong>
                    </span>
                  </section>
                </div>
              ))}
            </Slider>
            </Paper>
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(Home);
