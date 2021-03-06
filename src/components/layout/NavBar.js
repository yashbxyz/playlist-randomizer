import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Bar = (params) => {
  const { history } = params;

  const classes = useStyles();
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={false}
    >
    </Menu>
  );

  return (
    <AppBar position="static" elevation={0} className={classes.root}>
      <Toolbar>
        <h2 onClick={() => history.push('/')}>
          <Link
            href="/"
            onClick={e => e.preventDefault()}
            variant="inherit"
            color="secondary">
              Playlist Randomizer
          </Link>
        </h2>
        { renderMenu }
      </Toolbar>
    </AppBar>)
}

class NavBar extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;

    return (
      <Bar history={history}/>
    );
  }
}

export default withRouter(NavBar);
