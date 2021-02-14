import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    color: "blue",
    fontSize: 25

  },
  media: {
    height: 1,
    paddingTop: '70%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[200],
  },
  hello: {
    color: "black",
    fontSize: 15,

  },
  hello1: {
    textAlign: 'center',
    color: "black"
  },
}));

export default function MemeCard({author,caption,link}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>

              {author[0]}

          </Avatar>
        }
        title=
        <div className = {classes.hello}>
        <h4>{author}
        </h4>
        </div>
      />
      <CardMedia
        className={classes.media}
        image={link}
        title="Kya maal h yaar !"
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary" component="p">
          <h4>
            <bold>
              <div className = {classes.hello1}>
                {caption}
              </div>
            </bold>
          </h4>

        </Typography>
      </CardContent>
    </Card>
  );
}
