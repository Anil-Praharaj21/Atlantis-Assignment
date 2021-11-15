import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {String} from '../assets/values/String';

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
      if (error.code === String.operationNotAllowed) {
        onError(String.firebaseConsoleError);
      } else {
        onError(error);
      }
    });
}

export function setGoogleConfigur() {
  GoogleSignin.configure({
    scopes: [String.email],
    webClientId: String.webClientId,
    offlineAccess: true,
  });
}
