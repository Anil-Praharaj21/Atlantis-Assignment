import {CommonActions} from '@react-navigation/native';

let navigatorRef;

function setTopLevelNavigator(navigatorReference) {
  navigatorRef = navigatorReference;
}

function navigate(routeName, params) {
  navigatorRef.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}

function resetNavigation(routeNameh) {
  const resetAction = CommonActions.reset({
    index: 1,
    routes: [{name: routeNameh}],
  });
  navigatorRef.dispatch(resetAction);
}

function back() {
  navigatorRef.goBack();
}

export default {
  navigate,
  setTopLevelNavigator,
  resetNavigation,
  back,
};
