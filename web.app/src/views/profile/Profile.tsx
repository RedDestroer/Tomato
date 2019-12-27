import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../../components/Loading';
import { useAuth0 } from '../../lib/auth0';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

interface Props {}

const Profile: React.FC<Props> = props => {
  const classes = useStyles();
  const { user } = useAuth0();

  if (!user) {
    return <Loading />;
  }

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Profile
        </Typography>
        <Avatar alt={user.nickname} src={user.picture} className={classes.large} />
        <Typography variant="h5" component="h2">
          {user.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
