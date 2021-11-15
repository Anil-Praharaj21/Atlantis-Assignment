import * as repository from '../repository/TaskViewRepository';

export function getAllData(
  uid,
  onSuccess,
  onError,
  showProgress,
  hideProgress,
) {
  showProgress();
  repository.getAllData(
    uid,
    data => {
      hideProgress();
      onSuccess(data);
    },
    error => {
      hideProgress();
      onError(error);
    },
  );
}
