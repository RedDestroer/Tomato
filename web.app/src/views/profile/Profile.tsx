import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../../components/Loading';
import { useAuth0 } from '../../utils/react-auth0-spa';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
});

interface Props {}

const Profile: React.FC<Props> = props => {
  const classes = useStyles();
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <div className={classes.root}>
      <Container>{JSON.stringify(user, null, 2)}</Container>
    </div>
  );
};

export default Profile;
