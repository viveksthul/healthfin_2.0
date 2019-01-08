import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../../resources/img/logo.png';
import logosm from '../../resources/img/logosm.png';
import  '../../resources/css/style.css';
import  '../../resources/css/style600.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
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

    state = {
        left: false
    };
    
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    getActiveItemClass( moduleName ){

        if(  this.activeModule === moduleName ){
            return "App-header-menu-item-active";
        }else{
            return "";
        }
        
    }

    render() {



    return ( 
            <AppBar position="static" className={this.classes.header} class="App-header" >
                <ToolBar className="App-header-toolbar">
                    <IconButton className={ classNames( "App-header-navButton", this.classes.menuButton )} onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <img src={logo} className="App-header-logo" alt='Healthfin Logo'/>
                    <img src={logosm} className="App-header-logo-sm" alt='Healthfin Logo'/>
                    <Typography variant="h6" color="inherit" className={classNames( "App-header-spacer", this.classes.grow ) }></Typography>
                    <Button color="inherit" className={classNames(this.classes.navmenuitem, this.getActiveItemClass("Home"), "App-header-navItem")}  component={Link} to="/">Home</Button>
                    <Button color="inherit" className={classNames(this.classes.navmenuitem, this.getActiveItemClass("About"), "App-header-navItem")} component={Link} to="/about">About</Button>
                    <Button color="inherit" className={classNames(this.classes.navmenuitem, this.getActiveItemClass("Media"), "App-header-navItem")} component={Link} to="/media">Media</Button>
                    <Button color="inherit" className={classNames(this.classes.navmenuitem,  this.getActiveItemClass("FAQ"), this.classes.menuItem, "App-header-navItem")}  component={Link} to="/faq">FAQ</Button>
                    <Button color="primary" className={classNames(this.classes.fontCase, "App-header-navItem")}  component={Link} to="/login">
                        Log In
                    </Button>
                    <Button variant="contained" color="primary" className={classNames(this.classes.button, this.classes.fontCase )} component={Link} to="/signup">
                        Sign Up
                    </Button>
                </ToolBar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                       <div className={this.classes.list}>
                            <List>
                                <ListItem button key={"Home"}>
                                    <Button color="inherit" component={Link} to="/">Home</Button>
                                </ListItem>
                                <ListItem button key={"About"}>
                                    <Button color="inherit" component={Link} to="/about">About</Button>
                                </ListItem>
                                <ListItem button key={"Media"}>
                                    <Button color="inherit" component={Link} to="/media">Media</Button>
                                </ListItem>
                                <ListItem button key={"FAQ"}>
                                    <Button color="inherit" component={Link} to="/faq">FAQ</Button>
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button key={"Log In"}>
                                    <Button color="inherit" component={Link} to="/login">Log In</Button>
                                </ListItem>
                                <ListItem button key={"Sign Up"}>
                                    <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </Drawer>
            </AppBar>
    )
}
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);