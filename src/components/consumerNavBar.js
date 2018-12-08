import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../resources/img/logo.png';
import  '../resources/css/style.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
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

        <div >
            <AppBar position="static" class="App-header" >
                <ToolBar>
                    <img src={logo} class="App-header-logo" alt='Healthfin Logo'/>
                    
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                    </Typography>

                    <Button color="inherit" className={[classes.fontCase]}>Home</Button>
                    <Button color="inherit" className={[classes.fontCase]}>About</Button>
                    <Button color="inherit" className={[classes.fontCase, classes.menuItem]}>FAQ</Button>
                    <Button color="primary" className={[classes.fontCase]}>
                        Log In
                    </Button>
                    <Button variant="contained" color="primary" className={[classes.button, classes.fontCase]}>
                        Sign Up
                    </Button>
                </ToolBar>
            </AppBar>
        </div>
    )
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(NavBar);