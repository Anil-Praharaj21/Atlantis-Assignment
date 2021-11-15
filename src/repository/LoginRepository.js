import * as firebaseAuth from '../firebase/FIrebaseAuth';

export function createUserWithEmailAndPassword(
  email,
  password,
  onSuccess,
  onError,
) {
  firebaseAuth.createUserWithEmailIdPassword(
    email,
    password,
    onSuccess,
    onError,
  );
}

export function signInWithEmailAndPassword(
  email,
  password,
  onSuccess,
  onError,
) {
  firebaseAuth.loginWithEmailIdPassword(email, password, onSuccess, onError);
}

export function signInWithGoogle(onSuccess, onError) {
  firebaseAuth.signInWithGoogle(onSuccess, onError);
}

export function setGoogleConfigur() {
  firebaseAuth.setGoogleConfigur();
}
