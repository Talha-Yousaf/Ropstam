import React,{useEffect,useState} from 'react';
import { Text, View ,FlatList} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { logout } from '../../Redux/Actions/Auth';
import AppColors from '../../utills/AppColors';
import styles from './styles';
import {getDataCall} from "../../backend/Apis";
import Card from '../../components/Card';
import { width } from 'react-native-dimension';
export default function Dashboard(props) {
  const user = useSelector((state) => state.Auth.user);
  const [data,setData] = useState([]);
  const dispatch = useDispatch();
  const logoutMethod = async () => {
    showMessage({
      message: 'Logged Out',
      description: 'Succfully logged out',
      type: 'success',
    });
    dispatch(logout());
  };
  const mountData = async()=>{
    try{
      const res = await getDataCall();
      setData(res);
    } 
    catch(e){
      console.log(e);
    }
  };
  useEffect(()=>{
    mountData();
  },[])
  const renderItem = ({item,index})=>{
    return(
      <Card 
      item={item}
      index={index}
      />
    )
  }
  return (
    <ScreenWrapper statusBarColor={AppColors.white} barStyle="dark-content">
      <View style={styles.mainViewContainer}>
        {/* <Text style={styles.text}>Dashboard</Text> */}
        <Text style={styles.text}>{user?.user?.name}</Text>
        <Button title="Logout" onPress={logoutMethod} />
        <FlatList 
        contentContainerStyle={{width:width(100),alignItems:"center"}}
        data={data ?? []}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        ListEmptyComponent={()=>{
          return(
            <Text style={styles.emptyText}>Nothing is here :(</Text>
          )
        }}
        />
      </View>
    </ScreenWrapper>
  );
}
