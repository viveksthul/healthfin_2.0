import React, { Component, Fragment } from 'react';
import Home from './consumer/home';
import About from './consumer/about';
import Faq from './consumer/faq';
import Blog from './consumer/blog';
import Media from './consumer/media';
import SignUp from './consumer/signup';
import Login from './consumer/login';
import PrivacyPolicy from './consumer/privacyPolicy';
import { Route, BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} /> 
          <Route path="/faq" component={Faq} /> 
          <Route path="/media" component={Media} />
          <Route path="/blog" component={Blog} /> 
          <Route path="/signup" component={SignUp} /> 
          <Route path="/login" component={Login} /> 
          <Route path="/privacyPolicy" component={PrivacyPolicy} /> 
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
