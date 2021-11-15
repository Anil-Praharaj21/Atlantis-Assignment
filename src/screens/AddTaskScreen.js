import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as presenter from '../presenter/AddTaskPresenter';
import {String} from '../assets/values/String';

var ref;
class AddTaskScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      uid: '',
    };

    this.initializeDatabase = this.initializeDatabase.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.createTodoItem = this.createTodoItem.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  async getUserData() {
    try {
      var user = await AsyncStorage.getItem(String.userData);
      var userData = JSON.parse(user);

      if (userData && userData.user && userData.user.uid) {
        this.setState({
          uid: userData.user.uid,
        });
        this.initializeDatabase(userData.user.uid);
      }
    } catch (e) {}
  }

  initializeDatabase(uid) {
    ref = presenter.databaseInitialize(uid, new Date().getTime());
  }

  createTodoItem() {
    if (this.state.uid) {
      presenter.createTodoItem(
        this.state.uid,
        new Date().getTime(),
        this.state.title,
        new Date().getTime(),
        this.state.description,
        ref,
        result => {
          this.props.navigation.goBack();
        },
        error => {},
        () => {},
        () => {},
      );
    }
  }

  render() {
    return (
      <>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <TextInput
            label={String.title}
            mode="outlined"
            theme={{
              fonts: {regular: {fontWeight: 'bold'}},
            }}
            style={{margin: 8}}
            value={this.state.title}
            onChangeText={value => {
              this.setState({
                title: value,
              });
            }}
          />

          <TextInput
            label={String.description}
            mode="outlined"
            theme={{
              fonts: {regular: {fontWeight: 'bold'}},
            }}
            textAlignVertical="top"
            multiline
            style={{margin: 8}}
            numberOfLines={5}
            value={this.state.description}
            onChangeText={value => {
              this.setState({
                description: value,
              });
            }}
          />

          <Button
            onPress={() => {
              this.createTodoItem();
            }}>
            Submit
          </Button>
        </ScrollView>
      </>
    );
  }
}

export default AddTaskScreen;
