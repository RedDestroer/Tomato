import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
});

interface Props {}

const NotFound: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span>Page not found</span>
    </div>
  );
};

export default NotFound;
