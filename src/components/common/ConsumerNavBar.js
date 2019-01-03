import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../resources/img/logo.png';
import  '../../resources/css/style.css';
import  '../../resources/css/style600.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';


const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    header:{
        padding: 0,
        height: '40px',
        background : "red"
    },
    menuButton: {
      marginLeft: 10,
      marginRight: 20,
    },
    menuItem: {
      marginRight: 30,
    },
    navmenuitem:{
        textTransform: 'none',
        padding: "15px 0px"
    }
  };

  class NavBar  extends Component {

    constructor(props) {
        super(props);
        this.classes = props.classes;
        this.activeModule = props.moduleName;
    }

    getActiveItemClass( moduleName ){

        if(  this.activeModule === moduleName ){
            return "App-header-menu-item-active";
        }else{
            return "";
        }
        
    }

    render() {

    // let isActive = this.context.router.isActive(this.props.to, true);
    // let className = isActive ? "active" : "";

    return ( 
        
            
            <AppBar position="static" className={this.classes.header} class="App-header" >
                <ToolBar className="App-header-toolbar">
                    <img src={logo} className="App-header-logo" alt='Healthfin Logo'/>
                    
                    <IconButton className={this.classes.menuButton} color="inherit" aria-label="Menu">
                        
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={this.classes.grow}>
                    </Typography>

                    <Button color="inherit" className={[this.classes.navmenuitem, this.getActiveItemClass("Home") ]}  component={Link} to="/">Home</Button>
                    <Button color="inherit" className={[this.classes.navmenuitem, this.getActiveItemClass("About")]} component={Link} to="/about">About</Button>
                    <Button color="inherit" className={[this.classes.navmenuitem, this.getActiveItemClass("Media")]} component={Link} to="/media">Media</Button>
                    <Button color="inherit" className={[this.classes.navmenuitem,  this.getActiveItemClass("FAQ"), this.classes.menuItem]}  component={Link} to="/faq">FAQ</Button>

                    <Button color="primary" className={[this.classes.fontCase]}  component={Link} to="/login">
                        Log In
                    </Button>
                    <Button variant="contained" color="primary" className={[this.classes.button, this.classes.fontCase]} component={Link} to="/signup">
                        Sign Up
                    </Button>
                </ToolBar>
            </AppBar>
    )
}
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(NavBar);