import React, { Component } from 'react';
import { withStyles, Typography, Button } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import config from '../../config';

import logo from '../../images/logo.svg';

const styles = theme => ({
  hero: {
    minHeight: '40vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  guard: {
    color: theme.palette.secondary.main
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4
  },
  actions: {
    marginTop: theme.spacing.unit * 4
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing.unit * 2
  },
  getStarted: {
    marginRight: theme.spacing.unit
  },
  text: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headline: {
    maxWidth: 600,
    textAlign: 'center'
  },
  logo: {
    margin: '20px 0',
    height: '35vw',
    maxHeight: 200
  }
});

@withStyles(styles)
@inject('rootStore')
@observer
class Hero extends Component {
  handleSignInOpen = () => {
    this.props.rootStore.uiState.openSignInDialog();
  };

  handleRegisterOpen = () => {
    this.props.rootStore.uiState.openRegisterDialog();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.hero}>
        <div className={classes.content}>
          <img
            src={logo}
            alt="StellarGuard Logo - by https://www.reddit.com/user/b1tcc"
            className={classes.logo}
          />
          <div className={classes.text}>
            <Typography
              variant="display2"
              component="h1"
              color="inherit"
              gutterBottom
            >
              <span>Stellar</span>
              <span className={classes.guard}>Guard</span>
            </Typography>
            <Typography
              variant="headline"
              component="h2"
              color="inherit"
              className={classes.headline}
            >
              {'Security for your Stellar account'}
            </Typography>
            <div className={classes.actions}>
              <div className={classes.buttons}>
                <Button
                  data-test="hero-get-started-button"
                  className={classes.getStarted}
                  color="secondary"
                  variant="raised"
                  onClick={this.handleRegisterOpen}
                >
                  Get Started for Free
                </Button>
                <Button
                  to="/faq"
                  component={Link}
                  className={classes.learnMore}
                  color="inherit"
                >
                  Learn More
                </Button>
              </div>
              <Typography color="inherit" gutterBottom variant="subheading">
                Already have an account?{' '}
                <Button
                  data-test="hero-sign-in-button"
                  color="secondary"
                  onClick={this.handleSignInOpen}
                >
                  Sign in
                </Button>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
