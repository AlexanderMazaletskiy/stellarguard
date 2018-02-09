import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import cx from 'classnames';
import CheckIcon from 'material-ui-icons/Check';

const styles = theme => ({
  root: {
    position: 'relative'
  },
  buttonProgress: {
    color: theme.palette.secondary.primary,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
});

class LoadingButton extends Component {
  render() {
    const { classes, loading, success, children, ...rest } = this.props;
    const buttonClassname = cx({
      [classes.buttonSuccess]: success
    });

    return (
      <div className={classes.root}>
        <Button
          className={buttonClassname}
          disabled={loading || success}
          {...rest}
        >
          {children}
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(LoadingButton);