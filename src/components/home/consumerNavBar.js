import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../resources/img/logo.png';
import  '../../resources/css/style.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Link, Route, BrowserRouter } from 'react-router-dom';


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    header:{
        padding: 0
    },
    menuButton: {
      marginLeft: 10,
      marginRight: 20,
    },
    menuItem: {
      marginRight: 30,
    },
    fontCase:{
        textTransform: 'none'
    }
  };

const NavBar = ( props ) => {

    const { classes } = props;
      
    return ( 
            <AppBar position="static" className={classes.header} class="App-header">
                <ToolBar>
                    <img src={logo} className="App-header-logo" alt='Healthfin Logo'/>
                    
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                    </Typography>

                    <Button color="inherit" className={[classes.fontCase]} component={Link} to="/">Home</Button>
                    <Button color="inherit" className={[classes.fontCase]} component={Link} to="/about">About</Button>
                    <Button color="inherit" className={[classes.fontCase]} component={Link} to="/media">Media</Button>
                    <Button color="inherit" className={[classes.fontCase, classes.menuItem]}  component={Link} to="/faq">FAQ</Button>
                    <Button color="primary" className={[classes.fontCase]}  component={Link} to="/login">
                        Log In
                    </Button>
                    <Button variant="contained" color="primary" className={[classes.button, classes.fontCase]} component={Link} to="/signup">
                        Sign Up
                    </Button>
                </ToolBar>
            </AppBar>
    )
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(NavBar);