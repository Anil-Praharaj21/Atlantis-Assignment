import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export function loginWithEmailIdPassword(email, password, onSuccess, onError) {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      onSuccess(response);
    })
    .catch(error => {
      onError(error);
    });
}

export function createUserWithEmailIdPassword(
  email,
  password,
  onSuccess,
  onError,
) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      onSuccess(response);
    })
    .catch(error => {
      onError(error);
    });
}

export async function signInWithGoogle(onSuccess, onError) {
  await GoogleSignin.hasPlayServices();
  const {accessToken, idToken} = await GoogleSignin.signIn();
  var googleCredential = auth.GoogleAuthProvider.credential(
    idToken,
    accessToken,
  );

  auth()
    .signInWithCredential(googleCredential)
    .then(data => onSuccess(data))
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        onError('Enable anonymous in your firebase console.');
      } else {
        onError(error);
      }
    });
}

export function setGoogleConfigur() {
  GoogleSignin.configure({
    scopes: ['email'],
    webClientId:
      '172532842385-8fk7scicpuijgckcb45q1p1rv2g9u1l9.apps.googleusercontent.com',
    offlineAccess: true,
  });
}
