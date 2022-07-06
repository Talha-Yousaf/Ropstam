import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button';
import {login} from '../../Redux/Actions/Auth';
import {setLoaderVisible} from '../../Redux/Actions/Config';
import AppColors from '../../utills/AppColors';
import DLogo from '.././../assets/images/Dlogo.png';
import TextInput from './../../components/TextInput';
import styles from './styles';
import {loginCall} from "../../backend/Apis"
export default function Dashboard({navigation}) {
  const user = useSelector((state) => state.Auth.user);
  const isLogin = useSelector((state) => state.Auth.isLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const loginFunction = async () => {
    let error = false;
    let message = '';
    try {
      if (email.trim() == '') {
        error = true;
        message = 'Email should not be empty';
      } else if (password.trim() == '') {
        error = true;
        message = 'Passsword should not be empty';
      }
      if (error) {
        dispatch(setLoaderVisible(false))
        showMessage({
          message: 'Error',
          description: message,
          type: 'danger',
        });
      } else {
        dispatch(setLoaderVisible(true));
        const res = await loginCall(email, password);
        dispatch(login(res.data));
        showMessage({
          message: 'Successfuly Login',
          description: 'Successfully Login',
          type: 'success',
        });
        dispatch(setLoaderVisible(false));       
      }
    } catch (e) {
      dispatch(setLoaderVisible(false));
      showMessage({
        message: 'Error',
        description: e,
        type: 'danger',
      });
    }
  };
  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      scrollType={'keyboard'}
      barStyle={'dark-content'}>
      <View style={styles.mainViewContainer}>
        <View style={styles.linearGradient}>
          <Image source={DLogo} style={styles.logo} />
          <View style={styles.innerContainer}>
            <TextInput
              placeholder={'Email'}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              placeholder={'Password'}
              hidden
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
            <Button 
            containerStyle={styles.buttonContainerStyles}
            title="Login" 
            onPress={loginFunction} 
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
