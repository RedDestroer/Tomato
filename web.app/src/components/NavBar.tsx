import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { NavLink as RouterNavLink, NavLink } from 'react-router-dom';
import { useAuth0 } from '../lib/auth0';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    flexGrow: 1,
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  medium: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

interface Props {}

const NavBar: React.FC<Props> = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  const handleClose = (event: any) => {
    // @ts-ignore
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: any) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const handleToggle = () => {
    setOpen(isOpen => !isOpen);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef<boolean>(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      // @ts-ignore
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  });

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" component={NavLink} to="/">
              Tomato
            </Button>
          </Typography>
          {!isAuthenticated && (
            <Button
              color="inherit"
              onClick={() => {
                if (loginWithRedirect !== undefined) {
                  loginWithRedirect();
                }
              }}
            >
              Log in
            </Button>
          )}
          {isAuthenticated && (
            <div>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <Avatar alt={user.nickname} src={user.picture} className={classes.medium} />
              </IconButton>

              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                          <MenuItem onClick={handleClose} component={NavLink} to="/profile">
                            Profile
                          </MenuItem>
                          <MenuItem onClick={handleDialogOpen}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <div>
        <Dialog
          open={dialogOpen}
          onClose={handleDialogClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Are you sure you want to logout?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              By pressing 'yes, logout' you will be logged out of application.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              No
            </Button>
            <Button onClick={() => logoutWithRedirect()} color="primary" autoFocus>
              Yes, logout
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default NavBar;
