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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
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
});


class FAQ  extends Component {

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
        <Grid container spacing={0} className={this.classes.root} alignItems="center" direction="row" justify="center">
          <NavBar/>
              <Grid container spacing={0} className={[this.classes.root, this.classes.background, this.classes.padding]} alignItems="center" direction="row" justify="center">
                <Grid item sm={12} xs={10}>
                  <Grid container spacing={24} justify="start" alignItems="start" direction="row"  > 
                      <Grid item sm={12} xs={12} >
                          <Typography  variant="h5" style={{color : '#1565c0'}}>
                            Blogs
                          </Typography>
                          <Grid container justify="start" alignItems="start" direction="row" > 
                              <div className="App-blog-line"></div>
                          </Grid>
                      </Grid>
                      <Grid item sm={9} xs={12} >
                          <Grid container justify="start" alignItems="start" direction="row" > 
                              {this.FaqQuestions.map((item, index) => (
                                  <Card className={this.classes.card}>

                                  <CardMedia
                                    className={this.classes.media}
                                    image={item.imgUrl}
                                    title="Paella dish"
                                  />
                                  <CardContent>
                                    <Grid item xs={12} >
                                        <Grid container justify="start" alignItems="start" direction="row" > 
                                            <Typography component="caption" variant="caption" style={{fontWeight:"bold"}}>
                                                HEALTHCARE
                                            </Typography>
                                            <Typography component="caption" variant="caption" >
                                                &nbsp; | 5 MIN READ
                                            </Typography>
                                            <div className={this.classes.grow} />
                                            <Typography component="caption" variant="caption"  style={{textAlign:"right"}}>
                                                16.11.2018
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                  </CardContent>
                                  
                                  <CardActions className={this.classes.actions} disableActionSpacing>
                                    <CardHeader
                                      title="Shrimp and Chorizo Paella"
                                      style={{marginLeft : "-10px"}}
                                    />
                                    <div className={this.classes.grow} />
                                    <IconButton aria-label="Add to favorites">
                                      <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="Share">
                                      <ShareIcon />
                                    </IconButton>
                                  </CardActions>
                                  <CardContent>
                                      <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
                                      </Typography>
                                      <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                        chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                                        salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                                        minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                      </Typography>
                                      <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                                        to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                                        cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
                                      </Typography>
                                      <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                      </Typography>
                                  </CardContent>
                               
                                </Card>
                              ))}
                          </Grid>
                      </Grid>
                      <Grid item xs={12} sm={3} >
                          <Grid container justify="start" alignItems="start" direction="row" > 
                            <Typography  variant="h6" style={{color : '#000000', marginTop : "25px"}}>
                              Related Blogs
                            </Typography>

                            <Grid item xs={12} style={{ marginTop : "15px"}}>
                              <Grid container justify="start" alignItems="start" direction="row" > 
                                <Grid item xs={2} >
                                  <Description className={this.classes.icon} />
                                </Grid>
                                <Grid item xs={10} >
                                  <Grid container justify="start" alignItems="start" direction="row" >
                                    <Typography component="caption" variant="caption" style={{fontWeight:"bold"}}>
                                        HEALTHCARE
                                    </Typography>
                                    <Typography component="caption" variant="caption" >
                                        &nbsp; | 5 MIN READ
                                    </Typography>
                                  </Grid>
                                  <Grid container justify="start" alignItems="start" direction="row" >
                                    <Typography component="span" className={this.classes.inline} color="textPrimary">
                                      Related blog article title goes here
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item xs={12} style={{ marginTop : "15px"}}>
                              <Grid container justify="start" alignItems="start" direction="row" > 
                                <Grid item xs={2} >
                                  <Description className={this.classes.icon} />
                                </Grid>
                                <Grid item xs={10} >
                                  <Grid container justify="start" alignItems="start" direction="row" >
                                    <Typography component="caption" variant="caption" style={{fontWeight:"bold"}}>
                                        HEALTHCARE
                                    </Typography>
                                    <Typography component="caption" variant="caption" >
                                        &nbsp; | 5 MIN READ
                                    </Typography>
                                  </Grid>
                                  <Grid container justify="start" alignItems="start" direction="row" >
                                    <Typography component="span" className={this.classes.inline} color="textPrimary">
                                      Related blog article title goes here
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item xs={12} style={{ marginTop : "15px"}}>
                              <Grid container justify="start" alignItems="start" direction="row" > 
                                <Grid item xs={2} >
                                  <Description className={this.classes.icon} />
                                </Grid>
                                <Grid item xs={10} >
                                  <Grid container justify="start" alignItems="start" direction="row" >
                                    <Typography component="caption" variant="caption" style={{fontWeight:"bold"}}>
                                        HEALTHCARE
                                    </Typography>
                                    <Typography component="caption" variant="caption" >
                                        &nbsp; | 5 MIN READ
                                    </Typography>
                                  </Grid>
                                  <Grid container justify="start" alignItems="start" direction="row" >
                                    <Typography component="span" className={this.classes.inline} color="textPrimary">
                                      Related blog article title goes here
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>

                          </Grid>
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
