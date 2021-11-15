import React from 'react';
import {ScrollView, View, FlatList, Text} from 'react-native';
import {FAB} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as presenter from '../presenter/TaskViewPresenter';
import TodoListItem from '../components/TodoListItem';

class TaskViewScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
    };
  }

  componentDidMount() {
    this.getUserData();

    this.props.navigation.addListener('focus', payload => {
      this.getUserData();
    });
  }

  async getUserData() {
    try {
      var user = await AsyncStorage.getItem('userData');
      var userData = JSON.parse(user);

      if (userData && userData.user && userData.user.uid) {
        console.log('User', userData);
        this.setState({
          uid: userData.user.uid,
        });
        this.getAllTodoList(userData.user.uid);
      }
    } catch (e) {}
  }

  getAllTodoList(uid) {
    presenter.getAllData(
      uid,
      result => {
        var arr = [];
        Object.keys(result.val()).forEach(function (key) {
          arr.push(result.val()[key]);
        });
        this.setState({
          todoList: arr,
        });
      },
      error => {},
      this.props.showProgress,
      this.props.hideProgress,
    );
  }

  render() {
    return (
      <>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <FlatList
            data={this.state.todoList}
            ListHeaderComponent={null}
            renderItem={data => {
              return (
                <TodoListItem
                  title={data.item.title}
                  description={data.item.description}
                />
              );
            }}
          />

          <FAB
            style={{
              position: 'absolute',
              margin: 24,
              right: 0,
              bottom: 0,
            }}
            icon="plus"
            onPress={() => {
              this.props.navigation.push('Add Task');
            }}
          />
        </ScrollView>
      </>
    );
  }
}

export default TaskViewScreen;
