import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import LockIcon from 'material-ui-icons/Lock';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import { inject, observer } from 'mobx-react';

const styles = theme => ({
  actions: {
    display: 'flex'
  },
  avatar: {
    backgroundColor: theme.palette.primary.main
  }
});

@inject('rootStore')
@observer
class AddFirstStellarAccountCard extends React.Component {
  resendEmail = () => {};

  render() {
    const { classes } = this.props;

    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
          }
          title="Link Stellar Account"
          subheader="Protect your Account with StellarGuard by adding StellarGuard multi-sig"
        />
        <CardContent>
          <Stepper activeStep={0} alternativeLabel>
            <Step>
              <StepLabel>Build Multi-Sig Transaction</StepLabel>
            </Step>
            <Step>
              <StepLabel>Sign &amp; Submit it to the Stellar Network</StepLabel>
            </Step>
            <Step>
              <StepLabel>Activate your Account</StepLabel>
            </Step>
          </Stepper>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(AddFirstStellarAccountCard);