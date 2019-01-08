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
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Description from '@material-ui/icons/Description';

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
    padding : '30px 30px'
  },
  card : {
    marginTop : "00px"
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
});


class Media  extends Component {

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
            <NavBar moduleName="Media"/>
              <Grid container spacing={0} className={[this.classes.root, this.classes.background, this.classes.padding]} alignItems="center" direction="row" justify="center">
                <Grid item xs={12} sm={10} >
                  <Grid container spacing={24} justify="start" alignItems="start" direction="row"  > 
                      <Grid item xs={12} >
                          <Typography  variant="h5" style={{color : '#1565c0'}}>
                            Media
                          </Typography>
                          <Grid container justify="start" alignItems="start" direction="row" > 
                              <div className="App-media-line"></div>
                          </Grid>
                        </Grid>
                        {this.FaqQuestions.map((item, index) => (
                          <Grid item xs={6} sm={2} >
                              <Grid container justify="start" alignItems="start" direction="row" > 
                          
                                <Card className={this.classes.card}>
                                <CardMedia
                                  className={this.classes.media}
                                  image={item.imgUrl}
                                  title="Paella dish"
                                  width="400"
                                  height="300"
                                />
                                <CardContent>
                                  <Grid item xs={12} >
                                      <Grid container justify="start" alignItems="start" direction="row" > 
                                          <Typography component="caption" variant="caption" style={{fontWeight:"bold"}}>
                                              HEALTHCARE
                                          </Typography>
                                      </Grid>
                                  </Grid>
                                </CardContent>
                              </Card>
                              </Grid>
                          </Grid>
                        ))}          

                        <Grid item xs={12} >
                          <Typography  variant="h5" style={{color : '#1565c0'}}>
                            Awards
                          </Typography>
                          <Grid container justify="start" alignItems="start" direction="row" > 
                              <div className="App-media-line"></div>
                          </Grid>
                        </Grid>
                        {this.FaqQuestions.map((item, index) => (
                          <Grid item xs={6} sm={2} >
                              <Grid container justify="start" alignItems="start" direction="row" > 
                          
                                <Card className={this.classes.card}>
                                <CardMedia
                                  className={this.classes.media}
                                  image={item.imgUrl}
                                  title="Paella dish"
                                  width="400"
                                  height="300"
                                />
                                <CardContent>
                                  <Grid item xs={12} >
                                      <Grid container justify="start" alignItems="start" direction="row" > 
                                          <Typography component="caption" variant="caption" style={{fontWeight:"bold"}}>
                                              HEALTHCARE
                                          </Typography>
                                      </Grid>
                                  </Grid>
                                </CardContent>
                              </Card>
                              </Grid>
                          </Grid>
                        ))}                
                    </Grid>

                    
                  </Grid>
              </Grid>
          <Footer/>
        </Grid> 
        
    );
  }
}

export default withStyles(styles)(Media);
