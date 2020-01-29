
/*
* Created by Reshma B 10/10/2019
**
*/
'use strict';
import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image, TouchableOpacity, FlatList,Alert,
    Modal,ActivityIndicator,Linking

} from 'react-native';
import colors  from '../Assets/Colors';
import images  from '../Assets/Images';

import HeaderTitle from '../Components/HeaderTitle';
//import SplashScreen from './SplashScreen';
import SplashScreen from 'react-native-splash-screen'
import WelcomeStyle from '../Containers/Styles/WelcomeStyle';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {welcomeScreenGridData,locationInfo,welcomeScreenLabels,organisorData,programGuideData,dayInfo,staticNames} from '../Assets/StaticData';
import ProgramSpeakerList from '../Components/ProgramSpeakerList'
var SQLite=require('react-native-sqlite-storage')
import Moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
function callWebsiteLink(data) {
    console.log(data)
    Linking.openURL(data)
}

function bannerStyleGuide(data){
return(
    <View style={[WelcomeStyle.programGuideBannerStyle,{flexDirection:'row',justifyContent:'center',alignItems:'center'}]}>
        <Text style={[WelcomeStyle.bannerTextStyle,{color:colors.black}]}>{data.day} </Text>
        <Text style={[WelcomeStyle.bannerTextStyle,{color:colors.black,fontStyle: 'italic',fontWeight:'normal'}]}>({data.date})</Text>

    </View>
)

}

const CustomProgressBar = ({ visible }) => (
    <Modal transparent={true} onRequestClose={() => null} visible={visible}>
      <View style={{ flex: 1, backgroundColor: "transparent", alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: '200' }}>Loading</Text>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
);
function favouriteCountStore(len){
  console.log("count",len)
  try {
    AsyncStorage.setItem(staticNames.favouriteCountKey,len.toString());
  } catch (error) {
    console.log("errpor saving")
    // Error saving data
  }
  

}

  
    


function callAlert(){
  // Works on both Android and iOS
Alert.alert(
  'Alert',
  'More than 10 favourites is not allowed',
  [
    // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    {
      text: 'Cancel',
      // onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', }
    // onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);
}


export{
    callWebsiteLink,
    bannerStyleGuide,
    CustomProgressBar,
    favouriteCountStore,
    callAlert,
    //favouriteCountRetrieve
}
