import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Help as HelpIcon } from '@material-ui/icons';

import MouseoverPopover from './MouseoverPopover';

const styles = theme => ({});

class FormHelp extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <MouseoverPopover popover={children}>
        <HelpIcon style={{ fontSize: 18 }} />
      </MouseoverPopover>
    );
  }
}

export default withStyles(styles)(FormHelp);
