import * as firebaseDatabase from '../firebase/FirebaseDatabase';

export function getAllData(uid, onSuccess, onError) {
  firebaseDatabase.getAllTodoItems(uid, onSuccess, onError);
}
