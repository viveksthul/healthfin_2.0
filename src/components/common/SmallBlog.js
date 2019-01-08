import React from 'react';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      maxWidth: 345,
      borderRadius: 0
    },
    grow: {
        flexGrow: 1,
    },
    media: {
      //  object-fit is not supported by IE 11.
      objectFit: 'cover',
    },
  };

const SmallBlog = ( props ) => {

    const { classes } = props;
    const ImgURL = props.img;
    return ( 
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                className={classes.media}
                height="140"
                image={ImgURL}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Grid item xs={12} sm={12}>
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
                    <Typography component="h5" variant="h5" style={{marginTop:"10px", fontSize: "1.4rem", textTransform : "none" }}>
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

SmallBlog.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SmallBlog);