import database, {firebase} from '@react-native-firebase/database';

export function initialize(uid, timeStamp) {
  const reference = firebase
    .app()
    .database(
      'https://todolist-7d25a-default-rtdb.asia-southeast1.firebasedatabase.app/',
    )
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
  console.log('Parmas', params);
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
    .database(
      'https://todolist-7d25a-default-rtdb.asia-southeast1.firebasedatabase.app/',
    )
    .ref(`/todoItem${uid}`);

  console.log('Ref', ref);
  const value = await ref
    .once('value')
    .then(value => onSuccess(value))
    .catch(error => {
      onError(error);
    });
}
