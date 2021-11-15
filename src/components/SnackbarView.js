import * as React from 'react';
import {useEffect} from 'react';
import {Snackbar} from 'react-native-paper';
import {String} from '../assets/values/String';
import {Color} from '../assets/values/Color';

const SnackbarView = ({
  isError,
  onOk,
  visible,
  label,
  hideSnackbar,
  ...rest
}) => {
  const [open, setVisible] = React.useState(visible);

  useEffect(() => {
    setVisible(visible);
  }, [visible]);

  const onDismissSnackBar = () => hideSnackbar();

  return (
    <Snackbar
      visible={open}
      onDismiss={onDismissSnackBar}
      style={{backgroundColor: isError ? Color.errorRed : Color.successGreen}}
      theme={{colors: {accent: 'white'}}}
      action={{
        label: 'Ok',
        onPress: () => {
          onOk ? onOk() : onDismissSnackBar();
        },
      }}>
      {!label && isError
        ? String.somethingWentWrong
        : typeof label === 'string'
        ? label
        : String.somethingWentWrong}
    </Snackbar>
  );
};

export default SnackbarView;
