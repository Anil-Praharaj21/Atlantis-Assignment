import database, {firebase} from '@react-native-firebase/database';
import {String} from '../assets/values/String';

export function initialize(uid, timeStamp) {
  const reference = firebase
    .app()
    .database(String.dataBaseUrl)
    .ref(`/todoItem${uid}`);
  return reference;
}

export async function createTodoItem(
  uid,
  timeStamp,
  title,
  dueDate,
  description,
  ref,
  onSuccess,
  onError,
) {
  let key = ref.push().key;
  const params = {
    [timeStamp]: {
      id: key,
      uid: uid,
      title: title,
      description: description,
    },
  };
  ref
    .update(params)
    .then(value => {
      onSuccess(value);
    })
    .catch(error => {
      onError(error);
    });
}

export function updateTodoItem(
  uid,
  timeStamp,
  title,
  dueDate,
  description,
  ref,
  onSuccess,
  onError,
) {}

export async function getAllTodoItems(uid, onSuccess, onError) {
  const ref = firebase
    .app()
    .database(String.dataBaseUrl)
    .ref(`/todoItem${uid}`);

  await ref
    .once('value')
    .then(value => onSuccess(value))
    .catch(error => {
      onError(error);
    });
}
