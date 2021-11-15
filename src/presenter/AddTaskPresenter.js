import * as repository from '../repository/AddTaskRepository';

export function databaseInitialize(uid, timeStamp) {
  return repository.databaseInitialize(uid, timeStamp);
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
  showProgress,
  hideProgress,
) {
  showProgress();
  repository.createTodoItem(
    uid,
    timeStamp,
    title,
    dueDate,
    description,
    ref,
    result => {
      hideProgress();
      onSuccess(result);
    },
    error => {
      hideProgress();
      onError(error);
    },
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
  showProgress,
  hideProgress,
) {
  showProgress();
  repository.updateTodoItem(
    uid,
    timeStamp,
    title,
    dueDate,
    description,
    ref,
    result => {
      hideProgress();
      onSuccess(result);
    },
    error => {
      hideProgress();
      onError(error);
    },
  );
}
