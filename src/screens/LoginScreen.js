import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, TextInput, Button, HelperText} from 'react-native-paper';
import ATLANTIS_ICON from '../assets/images/atlantis_tech.png';
import {String} from '../assets/values/String';
import * as presenter from '../presenter/LoginPresenter';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailSignIn: '',
      passwordSignIn: '',
      passwordConfirmSignIn: '',
      error: {
        email: '',
        password: '',
        emailSignIn: '',
        passwordSignIn: '',
        passwordConfirmSignIn: '',
      },
      hidePassword: true,
      loginView: true,
    };

    this.createUserWithEmailPassword =
      this.createUserWithEmailPassword.bind(this);
  }

  componentDidMount() {
    presenter.setGoogleConfigur();
  }

  createUserWithEmailPassword() {
    presenter.createUserWithEmailAndPassword(
      this.state.emailSignIn,
      this.state.passwordSignIn,
      this.state.passwordConfirmSignIn,
      result => {
        this.props.setAuthValue(true);
      },
      error => {
        if (error.error) {
          this.setState({
            error: error.error,
          });
        }
      },
      () => {}, // Progress
      () => {}, // Hide Progress
    );
  }

  signInUserWithEmailPassword() {
    presenter.signInWithEmailAndPassword(
      this.state.email,
      this.state.password,
      result => {
        this.props.setAuthValue(true);
      },
      error => {
        if (error.error) {
          this.setState({
            error: error.error,
          });
        }
      },
      () => {}, // Progress
      () => {}, // Hide Progress
    );
  }

  signInUserWithGoogle() {
    presenter.signInWithGoogle(
      result => {
        this.props.setAuthValue(true);
      },
      error => {},
      () => {}, // Progress
      () => {}, // Hide Progress
    );
  }

  render() {
    return (
      <>
        <View
          style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          <Image
            style={{
              width: '50%',
              height: '10%',
              resizeMode: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            source={ATLANTIS_ICON}
          />

          {this.state.loginView ? (
            <Card style={{margin: 8, padding: 8}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginLeft: 8,
                }}>
                Login
              </Text>

              <TextInput
                label={String.Email}
                mode="outlined"
                autoCapitalize="none"
                keyboardType="email-address"
                theme={{
                  fonts: {regular: {fontWeight: 'bold'}},
                }}
                style={{marginTop: 4, marginBottom: 4}}
                value={this.state.email}
                onChangeText={value => {
                  this.setState({
                    email: value,
                  });
                }}
              />

              {this.state.error.email ? (
                <HelperText type="error">{this.state.error.email}</HelperText>
              ) : (
                <></>
              )}

              <TextInput
                label={String.password}
                mode="outlined"
                theme={{
                  fonts: {regular: {fontWeight: 'bold'}},
                }}
                autoCapitalize="none"
                secureTextEntry={this.state.hidePassword}
                style={{marginTop: 4, marginBottom: 4}}
                value={this.state.password}
                onChangeText={value => {
                  this.setState({
                    password: value,
                  });
                }}
                right={
                  <TextInput.Icon
                    name={this.state.hidePassword ? 'eye-off' : 'eye'}
                    size={20}
                    onPress={() =>
                      this.setState({hidePassword: !this.state.hidePassword})
                    }
                  />
                }
              />

              {this.state.error.password ? (
                <HelperText type="error">
                  {this.state.error.password}
                </HelperText>
              ) : (
                <></>
              )}

              <Button
                mode="contained"
                style={{marginTop: 12}}
                onPress={() => {
                  this.signInUserWithEmailPassword();
                }}>
                Login
              </Button>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginTop: 8,
                  marginBottom: 4,
                }}>
                <View style={{flex: 3, height: 2, backgroundColor: 'black'}} />
                <View style={{flex: 1}} />
                <View style={{flex: 3, height: 2, backgroundColor: 'black'}} />
              </View>

              <Button
                mode="contained"
                style={{marginTop: 8}}
                onPress={() => {
                  this.setState({
                    loginView: false,
                  });
                }}>
                Sign-In
              </Button>
            </Card>
          ) : (
            <Card style={{margin: 8, padding: 8}}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                  fontWeight: 'bold',
                  marginLeft: 8,
                }}>
                Sign-In
              </Text>

              <TextInput
                label={String.Email}
                mode="outlined"
                autoCapitalize="none"
                keyboardType="email-address"
                theme={{
                  fonts: {regular: {fontWeight: 'bold'}},
                }}
                style={{marginTop: 4, marginBottom: 12}}
                value={this.state.emailSignIn}
                onChangeText={value => {
                  this.setState({
                    emailSignIn: value,
                  });
                }}
              />

              {this.state.error.emailSignIn ? (
                <HelperText type="error">
                  {this.state.error.emailSignIn}
                </HelperText>
              ) : (
                <></>
              )}

              <TextInput
                label={String.password}
                mode="outlined"
                theme={{
                  fonts: {regular: {fontWeight: 'bold'}},
                }}
                autoCapitalize="none"
                style={{marginTop: 4, marginBottom: 4}}
                secureTextEntry={this.state.hidePassword}
                value={this.state.passwordSignIn}
                onChangeText={value => {
                  this.setState({
                    passwordSignIn: value,
                  });
                }}
                right={
                  <TextInput.Icon
                    name={this.state.hidePassword ? 'eye-off' : 'eye'}
                    size={20}
                    onPress={() =>
                      this.setState({hidePassword: !this.state.hidePassword})
                    }
                  />
                }
              />

              {this.state.error.passwordSignIn ? (
                <HelperText type="error">
                  {this.state.error.passwordSignIn}
                </HelperText>
              ) : (
                <></>
              )}

              <TextInput
                label={String.confirmPassword}
                mode="outlined"
                theme={{
                  fonts: {regular: {fontWeight: 'bold'}},
                }}
                autoCapitalize="none"
                style={{marginTop: 4, marginBottom: 4}}
                secureTextEntry={this.state.hidePassword}
                value={this.state.passwordConfirmSignIn}
                onChangeText={value => {
                  this.setState({
                    passwordConfirmSignIn: value,
                  });
                }}
                right={
                  <TextInput.Icon
                    name={this.state.hidePassword ? 'eye-off' : 'eye'}
                    size={20}
                    onPress={() =>
                      this.setState({hidePassword: !this.state.hidePassword})
                    }
                  />
                }
              />

              {this.state.error.passwordConfirmSignIn ? (
                <HelperText type="error">
                  {this.state.error.passwordConfirmSignIn}
                </HelperText>
              ) : (
                <></>
              )}

              {/* <TouchableOpacity
                onPress={() => {
                  this.signInUserWithGoogle();
                }}>
                <Image
                  style={{
                    height: 40,
                    resizeMode: 'contain',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                  source={GOOGLE_ICON}
                />
              </TouchableOpacity> */}

              <Button
                mode="contained"
                style={{marginTop: 8}}
                onPress={() => {
                  this.createUserWithEmailPassword();
                }}>
                Sign-In
              </Button>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginTop: 8,
                  marginBottom: 4,
                }}>
                <View style={{flex: 3, height: 2, backgroundColor: 'black'}} />
                <View style={{flex: 1}} />
                <View style={{flex: 3, height: 2, backgroundColor: 'black'}} />
              </View>

              <Button
                mode="contained"
                style={{marginTop: 8}}
                onPress={() => {
                  this.setState({
                    loginView: true,
                  });
                }}>
                Login
              </Button>
            </Card>
          )}
        </View>
      </>
    );
  }
}

export default LoginScreen;
