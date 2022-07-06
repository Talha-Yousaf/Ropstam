import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  container: {
    width: width(87.5),
    alignSelf: 'center',
    marginBottom:height(1.5)
  },
  title: {
    color: AppColors.InputTitle,
    fontWeight:"bold",
    marginVertical: height(1),
    width: width(90),
    fontSize:width(3.7)
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: height(6),
    borderWidth: 1,
    borderColor: AppColors.primary20,
    borderRadius: 5,
    paddingHorizontal: width(2.5),
  },
  focus:{
    borderBottomColor: AppColors.primary,
  },
  input: {
    height: height(6),
    fontSize:width(4),
    color:AppColors.primary,
    width: '94%',
    paddingVertical: 0,
    alignSelf: 'center',
  },
  prefixIconContainer: {
    width: width(8.5),
    height: height(5.75),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  eyeContainer: {
    justifyContent: 'center',
    width: width(8.5),
    height: height(5.75),
    // alignItems: 'flex-end',
  },
  rightImage: {
    justifyContent: 'center',
    width: width(8.5),
    height: height(5.75),
    // alignItems: 'flex-end',
  },
  sufFixIcon: {
    width: width(7),
    alignSelf: 'center',
  },
});

export default styles;