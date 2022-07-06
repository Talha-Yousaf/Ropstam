import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  linearGradient:{
    width:width(100),
    height:height(100),
    backgroundColor:AppColors.primary10,
  },
  mainViewContainer: {
    alignItems: 'center',
  },
  logo:{
    width:width(60),
    height:width(60),
    marginTop:height(5),
    alignSelf:"center",
    // resizeMode:"contain"
  },
  innerContainer:{
    width:width(87.5),
       marginTop:height(15),
       alignSelf:"center", 
  },
  forgetPassword:{
    alignSelf:"flex-end",
  },
  forgetText:{
    color:AppColors.primary,
    marginBottom:height(1)
  },
});
export default styles;
