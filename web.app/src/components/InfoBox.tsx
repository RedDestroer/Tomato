import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
});

interface Props {}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/about">
        Sergei Iakovlev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const InfoBox: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Auth0 & React/Redux app example
          </Typography>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default InfoBox;
