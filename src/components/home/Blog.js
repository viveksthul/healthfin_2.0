import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import 'react-animated-slider/build/horizontal.css';
import '../../resources/css/reactslider/style.css';
import PropTypes from 'prop-types';
import 'react-animated-slider/build/horizontal.css';
import SmallBlog from '../common/SmallBlog';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    paper: {
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    card: {
      display: 'flex',
      backgroundColor: 'transparent',
      alignItems : 'start',
      justifyContent: "start",
      borderRadius: 0
    },
    cardBlog: {
      display: 'flex',
      backgroundColor: '#fff',
      alignItems : 'start',
      justifyContent: "start",
      borderRadius: 0

    },
    content: {
      flex: '1 0 auto',
      alignItems : 'start'
    }
  });


const HomeSlider = ( props ) => {

    const { classes } = props;
   
    return ( 
        <Grid item xs={12} sm={12}>
            <Grid container spacing={0} className={["App-home-blog-bg"]}  alignItems="center" direction="row" justify="center">
                <Grid item xs={12} sm={12} className={"App-home-blog"} >
                <Grid container justify="center" alignItems="center" direction="row" > 
                <Grid item xs={12} sm={12}>
                    <Typography className={["App-home-blog-title"]} variant="h5" >
                        Blog Section
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} alignItems="center" direction="row" justify="center" style={{ color: '#fff' }}>
                    <Grid container justify="center" alignItems="center" direction="row" > 
                    <div className="App-home-blog-line"></div>
                    </Grid>
                </Grid>
                <Grid item xs={10} sm={10} alignItems="center" direction="row" justify="center" style={{marginTop:"20px"}} className="App-home-blog-show-desktop">
                    <Grid container justify="start" alignItems="start" direction="row" > 
                        <Card className={[classes.cardBlog, "App-home-blog-section-big-right"]}>
                            <Grid item xs={6} sm={12} >
                                <Grid container > 
                                    <img src={require('../../resources/img/blogs/blog1.jpg')} style={{width:"100%", height: "100%"}} alt='Healthfin Logo' />
                                </Grid>
                            </Grid>
                            <Grid item xs={6} sm={12} >
                                <Grid container > 
                                    <div>
                                        <CardContent className={classes.content}>
                                            <Grid item xs={12} >
                                                <Grid container justify="start" alignItems="start" direction="row" > 
                                                    <Typography component="caption" variant="caption" style={{fontWeight:"bold"}}>
                                                        HEALTHCARE
                                                    </Typography>
                                                    <Typography component="caption" variant="caption" >
                                                        &nbsp; | 5 MIN READ
                                                    </Typography>
                                                    <div className={classes.grow} />
                                                    <Typography component="caption" variant="caption"  style={{textAlign:"right"}}>
                                                        16.11.2018
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container justify="start" alignItems="start" direction="row" > 
                                                    <Typography component="h5" variant="h5" style={{marginTop:"10px", fontSize: "1.4rem" }}>
                                                        Blog Heading Goes here
                                                    </Typography>
                                                    <Typography variant="body2" color="text" style={{marginTop:"10px", fontSize: "0.8rem", textAlign: "justify"}}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident . . .
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </div>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                
                <Grid item xs={10} sm={10} alignItems="center" direction="row" justify="center" style={{marginTop:"20px"}} className="App-home-blog-show-mb">
                    <Grid container justify="start" alignItems="start" direction="row" > 
                        <Card className={[classes.cardBlog, "App-home-blog-section-big-right"]}>
                            <CardContent  style={{padding: 0}}>
                                <img src={require('../../resources/img/blogs/blog1.jpg')} style={{width: "100%"}} alt='Healthfin Logo' />
                                <Grid item xs={12} sm={12} >
                                    <Grid container style={{padding:"20px"}}> 
                                        <Grid item xs={12} >
                                            <Grid container justify="start" alignItems="start" direction="row" > 
                                                <Typography component="caption" variant="caption" style={{fontWeight:"bold"}}>
                                                    HEALTHCARE
                                                </Typography>
                                                <Typography component="caption" variant="caption" >
                                                    &nbsp; | 5 MIN READ
                                                </Typography>
                                                <div className={classes.grow} />
                                                <Typography component="caption" variant="caption"  style={{textAlign:"right"}}>
                                                    16.11.2018
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <Grid container justify="start" alignItems="start" direction="row" > 
                                                <Typography component="h5" variant="h5" style={{marginTop:"10px", fontSize: "1.4rem" }}>
                                                    Blog Heading Goes here
                                                </Typography>
                                                
                                                <Grid item xs={12} sm={12}>
                                                    <Grid container justify="start" alignItems="start" direction="row" > 
                                                        <Typography variant="body2" color="text" style={{marginTop:"10px", fontSize: "0.8rem", textAlign: "justify"}}>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident . . .
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
             
                <Grid item xs={10}  style={{marginTop:"20px"}}>
                    <Grid container spacing={24} justify="start" alignItems="start" direction="row" >
                        <Grid item xs={12} sm={4} >
                            <Grid container > 
                                <SmallBlog title="Blog Heading Goes here" img={require("../../resources/img/blogs/blog1.jpg")} subtitle="HEALTHCARE" time="5 MIN READ" date="16.11.2018"/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Grid container > 
                                <SmallBlog title="Blog Heading Goes here" img={require("../../resources/img/blogs/blog1.jpg")} subtitle="HEALTHCARE" time="5 MIN READ" date="16.11.2018"/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Grid container > 
                                <SmallBlog title="Blog Heading Goes here" img={require("../../resources/img/blogs/blog1.jpg")} subtitle="HEALTHCARE" time="5 MIN READ" date="16.11.2018"/>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
               
                </Grid>
                <Grid item xs={12} style={{marginTop:"20px"}}>
                    <Grid container justify="center" alignItems="center" direction="row"> 
                        <Button variant="outlined" color="primary" className={classes.button}  component={Link} to="/blog">
                            View All
                        </Button>
                    </Grid>
                </Grid>
            </Grid>      
            </Grid>
        </Grid>
        )
}

HomeSlider.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(HomeSlider);