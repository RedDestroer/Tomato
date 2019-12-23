import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import loading from '../assets/loading.svg';

const useStyles = makeStyles({
  spinner: {},
});

interface Props {}

const Loading: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <div className={classes.spinner}>
      <img src={loading} alt="Loading" />
    </div>
  );
};

export default Loading;
