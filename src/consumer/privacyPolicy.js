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
  textAlignJustify:{
    textAlign: "justify"
  }
});


class PrivacyPolicy  extends Component {

  constructor(props) {
    super(props);
    this.classes = props.classes;

  } 

  render() {
    return (
        <Grid container spacing={0}className={this.classes.root} alignItems="center" direction="row" justify="center">
          <NavBar/>
              <Grid container spacing={0} className={[this.classes.root, this.classes.background, this.classes.padding]} alignItems="center" direction="row" justify="center">
                <Grid item xs={10} >
                  <Grid container spacing={24} justify="start" alignItems="start" direction="row"  > 
                      <Grid item xs={12} >
                          <Typography  variant="h5" style={{color : '#1565c0'}}>
                            Privacy Policy
                          </Typography>
                        <Grid container justify="start" alignItems="start" direction="row" > 
                              <div className="App-blog-line"></div>
                          </Grid>
                      </Grid>
                      <Grid item xs={12} >
                          <Grid container justify="start" alignItems="start" direction="row" > 
                              
                                  <Card className={this.classes.card}>
                                  <CardContent>
                                      
                                      <Typography variant="h6" >
                                        3rd August 2016
                                      </Typography>
                                      <Typography paragraph className={this.classes.textAlignJustify} >
                                        This website http://healthfin.in (referred to as the “Website”) is owned and operated by Plusworth Solutions Pvt. Ltd (the “Company”). Protecting your privacy is very important to us, thus we have developed this Privacy Policy to protect your personal information to the best of our ability. We endeavour to comply with the laws of other countries but cannot and do not warrant that we do. We do everything we reasonably can to protect your rights of privacy on systems and the Website, but we are not liable for any unauthorized or unlawful disclosures of your personal and confidential information made by any other third parties who are not in our control, which includes certain advertisers and service providers that have links to our Website. Our Privacy Policy is subject to change at any time without notice, thus you are requested to review this Privacy Policy periodically for your awareness and record. The Privacy Policy should be read together with the Terms of Use available in https://healthfin.in/terms-of-use.php.
                                        The purpose of this Privacy Policy (“Policy“), as amended from time to time, is to give you an understanding on how we intend to collect and use the information you provide to us. The Policy may be subject to further changes. Upon updating the Policy, we may revise the “Updated” date at the bottom of this Policy.
                                      </Typography>
                                      <Typography paragraph className={this.classes.textAlignJustify} >
                                        By accessing this website and providing us your information, you hereby consent to the collection and use of such information for the purposes disclosed in this Policy. You are providing the information out of your free will. You have the option not to provide us the data or information sought to be collected if you do not agree with this Policy and the website Terms & Conditions.
                                        BY USING THE WEBSITE, YOU AGREE TO THE TERMS AND CONDITIONS OF THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH THE TERMS AND CONDITIONS OF THIS PRIVACY POLICY, PLEASE DO NOT PROCEED FURTHER TO USE THIS WEBSITE.
                                      </Typography>

                                      <Typography variant="h6" >
                                        1. Collection of Personal Information and related information
                                      </Typography>
                                      <Typography paragraph className={this.classes.textAlignJustify} >
                                        This Privacy Policy explains how the Company collects personal and non-personal information, classified as mandatory or voluntary and uses, discloses and protects such information through the Website. 'Personal Information' is a data that can be used to uniquely identify you or contact you ("Personal Information"). Personal Information for the purposes of this Privacy Policy shall include, but not limited to, information regarding your name, address, telephone number, date of birth, gender, e-mail address, etc. You may need to provide the Company your Personal Information while transacting through the Website for instance while creating an unique User ID for yourself or while participating in any online survey associated with the Company. We collect only such Personal Information that we believe to be relevant for the purpose of transacting with the service providers through our Website and is required to understand you or your interests or to prevent fraud and unlawful use.
                                       </Typography>
                                      <Typography paragraph className={this.classes.textAlignJustify} >
                                        Apart from your Personal Information, in an effort to make our Website effective, we may also collect certain other information each time you visit the Website. Such information may be stored in server logs. These encrypted statistics do not identify you personally, but provide us the information regarding your visit to the Website and the type of user who is accessing our Website and certain browsing activities by you. This data may include but not limited to: IP address of your equipment/server from where the Website is being accessed, the type of browser (Internet Explorer, Firefox, Opera, Google Chrome etc.), the operating system of your system and the Website You last visited before visiting to our Website. The duration of your stay on our Website is also stored in the session along with the date and time of your access. These data are used by the Company to understand the use and number of user visiting the Website. Some of the information related to the Website and Your visit to the Website may be shared by the sponsors, investors, advertisers, developer, strategic business partners, service providers and some associates in order to enhance and grow our business and the Website but we assure that these information will never include any of Your Personal Information. This anonymous information is collected through the use of a pixel tag, which is industry standard technology used by most major Websites. If you wish to change any personally identifiable information (such as an email address or zip code), then you can do so by updating the “My Profile” page. When you update information, the Company may keep a copy of the prior version for its records.
                                      </Typography>

                                      <Typography variant="h6" >
                                        2. Cookies and its usage
                                      </Typography>
                                      
                                      <Typography paragraph className={this.classes.textAlignJustify} >
                                        A cookie is a small text file that is stored on a user’s computer for record-keeping purposes. We use cookies on the Website. We use both “session ID cookies or session cookies” and “persistent cookies.” We use session cookies to make it easier for you to navigate the Website. A session cookie expires when you close your browser. If you check “remember me on this computer” when logging in to the Website, we set a persistent cookie to store your username, passwords etc., so that you do not have to enter it more than once. The persistent cookie also enables us to enhance the experience on the Website. The persistent cookie is removed when you uncheck the “remember my email address” check box. Your web browser allows you to control and limit cookies on your computer. If you reject cookies, you may still use the Website, but your ability to use some areas or functions of the Website may be limited. Some of our business partners (such as advertisers) use cookies on their Website. We have no access to or control over these cookies. Please note that, this Privacy Policy covers the use of cookies by us only and does not cover the use of cookies by any advertisers.
                                      </Typography>

                                      <Typography variant="h6" >
                                        3. Use of Personal Information
                                      </Typography>
                                      
                                      <Typography paragraph className={this.classes.textAlignJustify} >
                                        <span style={{fontWeight:"bold"}}>The Company does not trade or sell your Personal Information in any manner, except as specified herein, or if express consent is sought from you. The Personal Information provided by you may be used for the followings:</span>
                                          <ol type="a">
                                            
                                            <li> to facilitate your use of the Website.</li>
                                            <li> to respond to your inquiries or fulfil Your requests for information about the various services from the service providers registered with our Website</li>
                                            <li> to provide you with information about Our services and to send you information, materials, and offers from the Company</li>
                                            <li> to send you important information regarding the Website and/or other administrative information</li>
                                            <li> to send you surveys and marketing communications that we believe may be of interest to you</li>
                                            <li> to personalize your experience on the Website by presenting advertising, products and offers tailored to you</li>
                                            <li> to help you address your problems with the Website including addressing any technical problems</li>
                                            <li> if you transact or avail of any service through the Website, to assist you to complete and fulfil your sell, purchase or exchange of currencies</li>
                                            <li> for proper administering of the Website</li>
                                            <li> to conduct internal reviews and data analysis for the Website (e.g., to determine the number of visitors to specific pages within the Website)</li>
                                            <li> to improve the services, content and advertising on the Website</li>
                                            <li> to protect the integrity of the Website and</li>
                                            <li> to respond to judicial process and provide information to law enforcement agencies or in connection with an investigation on matters related to public safety, as permitted by law.</li>
                                          </ol>
                                            You acknowledge that apart from your Personal Information, if you upload any content on the Website, such content may contain information including Personal Information and the same may be available to the other users of the Website. The Company will not be liable for the disclosure and dissemination of such Personal Information to any third parties. We are not responsible for the privacy or security of any information, personal or otherwise that you may choose to communicate or exchange using the functionality of the Website.
                                      </Typography>
                                  </CardContent>
                               
                                </Card>
                            
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

export default withStyles(styles)(PrivacyPolicy);
