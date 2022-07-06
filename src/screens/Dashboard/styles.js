import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize:width(8),
    marginVertical:height(2),
    color: AppColors.green,
  },
  emptyText:{
    fontSize:width(5),
    marginTop:height(20),
    color:AppColors.sementic,
  },
});
export default styles;
