import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  container: {
    width: width(90),
    paddingHorizontal: width(2),
    marginBottom:height(2),
    backgroundColor:AppColors.offWhite,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  titleText:{
    marginVertical:height(2),
  },
  bodyText:{
    marginVertical:height(2),
  },
});
export default styles;
