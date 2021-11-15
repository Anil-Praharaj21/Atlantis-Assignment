import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './navigation/NavigationService';
import Navigator from './navigation/Navigator';
import LoadingScreen from './components/LoadingScreen';
import SnackbarView from './components/SnackbarView';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showLoading: false,
      isVisibleSnakcbar: false,
      label: '',
      isError: false,
    };

    console.reportErrorsAsExceptions = false;
    console.disableYellowBox = true;

    this.showProgress = this.showProgress.bind(this);
    this.hideProgress = this.hideProgress.bind(this);
  }

  showProgress() {
    this.setState({
      showLoading: true,
    });
  }

  hideProgress() {
    this.setState({
      showLoading: false,
    });
  }

  showSnakcbar(title, isError) {
    this.setState({
      isVisibleSnakcbar: true,
      label: title,
      isError: isError,
    });
  }

  hideSnackbar() {
    this.setState({
      isVisibleSnakcbar: false,
      label: '',
    });
  }

  onClickOk(func) {
    this.setState({
      isVisibleSnakcbar: false,
    });
  }

  render() {
    return (
      <>
        <NavigationContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}>
          <Navigator
            showProgress={this.showProgress}
            hideProgress={this.hideProgress}
            showSnakcbar={this.showSnakcbar}
          />
          <LoadingScreen show={this.state.showLoading} />
          <SnackbarView
            visible={this.state.isVisibleSnakcbar}
            label={this.state.label}
            onOk={this.onClickOk}
            isError={this.state.isError}
            hideSnackbar={this.hideSnackbar}
          />
        </NavigationContainer>
      </>
    );
  }
}

export default App;
