import * as firebaseDatabase from '../firebase/FirebaseDatabase';

export function databaseInitialize(uid, timeStamp) {
  return firebaseDatabase.initialize(uid, timeStamp);
}

export function createTodoItem(
  uid,
  timeStamp,
  title,
  dueDate,
  description,
  ref,
  onSuccess,
  onError,
) {
  firebaseDatabase.createTodoItem(
    uid,
    timeStamp,
    title,
    dueDate,
    description,
    ref,
    onSuccess,
    onError,
  );
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
) {
  firebaseDatabase.updateTodoItem(
    uid,
    timeStamp,
    title,
    dueDate,
    description,
    ref,
    onSuccess,
    onError,
  );
}

export function getAllTodoItems(uid, ref, onSuccess, onError) {
  firebaseDatabase.getAllTodoItems(uid, ref, onSuccess, onError);
}
