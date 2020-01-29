import React from 'react';
import {
  Component,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AppState,
} from 'react-native';
import PushNotification from 'react-native-push-notification'

export default class PushController extends React.Component{
    constructor(props){
        super(props)
       
      }
    componentDidMount(){
        PushNotification.configure({
            onRegister: function(token) {
                //process token
              },
            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
                console.log("NOTIFICATION:", notification);
            },
            permissions: {
                alert: true,
                badge: true,
                sound: true
              },
           
              popInitialNotification: true,
              requestPermissions: true,
                
            })   
             
    }
    render(){
        return(
            null
        )
    }
}