import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './navigation/NavigationService';
import Navigator from './navigation/Navigator';
import LoadingScreen from './components/LoadingScreen';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showLoading: false,
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
          />
          <LoadingScreen show={this.state.showLoading} />
        </NavigationContainer>
      </>
    );
  }
}

export default App;
