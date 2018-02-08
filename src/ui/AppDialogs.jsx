import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import RegisterDialog from './pages/register/RegisterDialog';
import SignInDialog from './pages/signIn/SignInDialog';

import { inject, observer } from 'mobx-react';

const styles = () => ({});

@inject('rootStore')
@observer
class AppDialogs extends Component {
  get uiState() {
    return this.props.rootStore.uiState;
  }

  handleSignInClose = () => {
    this.uiState.closeSignInDialog();
  };

  handleSignInSuccess = () => {
    this.uiState.closeSignInDialog();
  };

  handleRegisterClose = () => {
    this.uiState.closeRegisterDialog();
  };

  handleRegisterSuccess = () => {
    this.uiState.closeRegisterDialog();
  };

  render() {
    const { rootStore } = this.props;

    return [
      <SignInDialog
        open={rootStore.uiState.isSignInDialogOpen}
        onClose={this.handleSignInClose}
        onSignIn={this.handleSignInSuccess}
        key="signin"
      />,

      <RegisterDialog
        open={rootStore.uiState.isRegisterDialogOpen}
        onClose={this.handleRegisterClose}
        onRegister={this.handleRegisterSuccess}
        key="register"
      />
    ];
  }
}

export default withStyles(styles)(AppDialogs);
