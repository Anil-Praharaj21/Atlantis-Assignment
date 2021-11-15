import AsyncStorage from '@react-native-async-storage/async-storage';
import * as reposiotry from '../repository/LoginRepository';
import * as utils from '../utils/Tools';

export function createUserWithEmailAndPassword(
  email,
  password,
  passwordConfirm,
  onSuccess,
  onError,
  showProgress,
  hideProgress,
) {
  showProgress();
  var error;
  if (!email) {
    error = {
      emailSignIn: 'Please enter email',
    };
  } else if (!utils.emailVerify(email)) {
    error = {emailSignIn: 'Please enter valid email'};
  }
  if (!password) {
    error = {
      ...error,
      passwordSignIn: 'Please enter password',
    };
  }
  if (!passwordConfirm) {
    error = {
      ...error,
      passwordConfirmSignIn: 'Please enter confirm password',
    };
  } else if (!utils.stringMatch(password, passwordConfirm)) {
    error = {
      ...error,
      passwordConfirmSignIn: 'Confirm Password doesnot match with Password',
    };
  }
  if (!error) {
    reposiotry.createUserWithEmailAndPassword(
      email,
      password,
      data => {
        hideProgress();
        storeAsyncData(data);
        onSuccess(data);
      },
      error => {
        hideProgress();
        onError(error);
      },
    );
  } else {
    onError({error: error});
  }
}

export function signInWithEmailAndPassword(
  email,
  password,
  onSuccess,
  onError,
  showProgress,
  hideProgress,
) {
  showProgress();
  var error;
  if (!email) {
    error = {
      ...error,
      email: 'Please enter email',
    };
  } else if (!utils.emailVerify(email)) {
    error = {email: 'Please enter valid email'};
  }
  if (!password) {
    error = {
      ...error,
      password: 'Please enter password',
    };
  }
  if (!error) {
    reposiotry.signInWithEmailAndPassword(
      email,
      password,
      data => {
        hideProgress();
        storeAsyncData(data);
        onSuccess(data);
      },
      error => {
        hideProgress();
        onError(error);
      },
    );
  } else {
    onError({error: error});
  }
}

export function signInWithGoogle(
  onSuccess,
  onError,
  showProgress,
  hideProgress,
) {
  showProgress();
  reposiotry.signInWithGoogle(
    data => {
      hideProgress();
      storeAsyncData(data);
      onSuccess(data);
    },
    error => {
      hideProgress();
      onError(error);
    },
  );
}

export async function storeAsyncData(data, onError) {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(data));
  } catch (e) {
    onError('Something went wrong. Please try again.');
  }
}

export function setGoogleConfigur() {
  reposiotry.setGoogleConfigur();
}
