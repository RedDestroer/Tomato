import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Property } from '../models/Property';
import { useAuth0 } from '../lib/auth0';
import Typography from '@material-ui/core/Typography';
import PropertyTable from './PropertyTable';

const useStyles = makeStyles({
  root: {},
});

interface Props {}

const AppPropertyTable: React.FC<Props> = props => {
  const classes = useStyles();
  const appProperties: Property[] = [];
  const { isAuthenticated, user, getTokenSilently } = useAuth0();
  const [callCompleted, setCallCompleted] = useState(false);
  const [token, setToken] = useState<any>();

  useEffect(() => {
    const fn = async () => {
      try {
        const _token = await getTokenSilently();
        setToken(_token);
      } catch (error) {
        console.error(error);
      } finally {
        setCallCompleted(true);
      }
    };
    // tslint:disable-next-line: no-floating-promises
    fn();
  }, [getTokenSilently]);

  appProperties.push(new Property('isAuthenticated', String(isAuthenticated)));
  appProperties.push(new Property('UserName', user.name));
  appProperties.push(new Property('Token', String(token)));
  appProperties.push(new Property('SmthElse', '**'));

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h1" gutterBottom>
        App properties
      </Typography>
      <div>{!callCompleted ? 'Fetching properties...' : <PropertyTable properties={appProperties} />}</div>
    </div>
  );
};

export default AppPropertyTable;
