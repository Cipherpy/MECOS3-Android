/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  AppState
} from 'react-native';


import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//import SplashScreen from 'react-native-splash-screen'
import colors  from './Assets/Colors';

/*import the home screen of the app*/
import WelcomeScreen from './Containers/WelcomeScreen';
import ContactScreen from './Containers/ContactScreen';
import ExhibitionScreen from './Containers/ExhibitionScreen'
import ProgramGuideScreen from './Containers/ProgramGuideScreen'
import LeadSpeakerScreen from './Containers/LeadSpeakerScreen'
import PresentationScreen from './Containers/PresentationScreen'

import SearchScreen from './Containers/SearchScreen'
import MyFavouriteScreen from './Containers/MyFavouriteScreen'

/*import style page for header Style*/
import WelcomeStyle from './Containers/Styles/WelcomeStyle';
var PushNotification = require("react-native-push-notification");
import {welcomeScreenGridData,locationInfo,welcomeScreenLabels,organisorData,programGuideData,dayInfo,themes,staticNotifKey} from './Assets/StaticData';
import TabNav from './Components/StackNavigator';
var SQLite=require('react-native-sqlite-storage')
import moment from 'moment';
import LocalNotification from './Components/LocalNotification';
import {CustomProgressBar,favouriteCountStore} from './Assets/CommonRoutines';

//PushNotification.cancelAllLocalNotifications()
import PushController from './Components/PushController'
import AsyncStorage from '@react-native-community/async-storage';
  // const now = moment().utc();
  // var todayDate=moment.utc(now).format(); 
  // console.log("now",now)
  var db1 = SQLite.openDatabase({name : "notificationData.db", createFromLocation : "~notificationData.db",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});   

  var db2 = SQLite.openDatabase({name : "programGuide.db", createFromLocation : "~programGuide.db",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});
  import BackgroundTask from 'react-native-background-task'
  import BackgroundFetch from "react-native-background-fetch";
  // BackgroundTask.define(async () => {
  //   // Fetch some data over the network which we want the user to have an up-to-
  //   // date copy of, even if they have no network when using the app
    
  //   console.log("[js] Received background-fetch event");
  //       this.App.getData().then(()=>{
  //         this.staticNotifications()
  //     this.favouriteNotifications()
  //       })
    
  //   // Remember to call finish()
  //   BackgroundTask.finish()
  // })
  export default class App extends React.Component {

  constructor(props) {
      super(props);
      
      
      this.state = {
        searchResults:[],
        notificationList:[],
        notificationData:[],
        isLoading:true,
        storedKey:[]
      };
  }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>  
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
  

  

  componentWillUnmount(){
    AppState.removeEventListener('change',this.handleAppStateChange)
  }
  async fetchData(STORAGE_KEY){
    await AsyncStorage.getItem(STORAGE_KEY)
    
    
  }
  staticNotifications = ()=> {
    console.log('test')
    var data =[]
    const now = moment().utc();
    var todayDate=moment.utc(now).format();
    //var db1 = SQLite.openDatabase({name : "notificationData.sqlite3", createFromLocation : 1,location:'Library'})
        db1.transaction((tx1) => {
        
          tx1.executeSql('SELECT * FROM notificationTable', [], (tx1, results1) => {
        
            const rows = results1.rows.raw();
          
            console.log("Query completednew",rows)
  
            var len = results1.rows.length;
            console.log("length",len)
            if(len!=0){
              for(i=0;i<len;i++){
               


                var STORAGE_KEY = i.toString();
                
                console.log("storage key",STORAGE_KEY)
                console.log("stored value",staticNotifKey[i])
                let row = results1.rows.item(i);
                var dateExpiry=row.Date
                
                            
                             var expiryDateLocal= moment(dateExpiry).format('YYYY-MM-DD')
                             var currentDateLocal=moment.utc(now).local().format('YYYY-MM-DD')
                             var expiryTimeLocal= moment(dateExpiry).format('HH:mm:ss')
                              var currentTimeLocal=moment.utc(now).local().format('HH:mm:ss')
                            // console.log('expiryDateTimeLocal',expiryDateTimeLocal)
                            // console.log('currentDateTimeLocal',currentDateTimeLocal)
                           console.log('expiryDateLocal',expiryDateLocal)
                             console.log('currentDateLocal',currentDateLocal)
                             console.log('expiryTimeLocal',expiryTimeLocal)
                             console.log('currentTimeLocal',currentTimeLocal)
                // console.log("key",typeof staticNotifKey[i])
                //var value=this.fetchData(STORAGE_KEY)
                //await AsyncStorage.getItem(STORAGE_KEY).then((value) => {
                
                //console.log('name is ', value.Promise);
                console.log("this.state.storedKey[i]",this.state.storedKey[i])
                
                if (currentDateLocal==expiryDateLocal && currentTimeLocal< expiryTimeLocal) {
                  var startTime = moment(expiryTimeLocal, "HH:mm:ss");
                  var endTime = moment(currentTimeLocal, "HH:mm:ss");
      
                  // calculate total duration
                  var duration = moment.duration(startTime.diff(endTime))
                          console.log('duration',duration._milliseconds)
                  //if(duration._data.hours==0 && duration._data.minutes<10){

                    if(this.state.storedKey[i] ==null){
                            
                            PushNotification.localNotificationSchedule({
                              largeIcon: "meecoslaunch", // (optional) default: "ic_launcher"
                              smallIcon: "notification_icon", // (optional) default: "ic_notification" with fallback for "ic_launcher"
                              
                              title: row.Notification1, // (optional) default: none
                              message: row.Notification2, // (required)
                              date:new Date(Date.now() + duration._milliseconds ) ,// in 60 secs
                              foreground: true,
                              
                  
                              visibility: "public", // (optional) set notification visibility, default: private
                              //date: new Date(Date.now())
                            })
                            console.log("key",i)
                            console.log("valu",staticNotifKey[i])
                            var dataNew={
                              [STORAGE_KEY]:staticNotifKey[i]
                            }
                            
                            try {
                              AsyncStorage.setItem(STORAGE_KEY,staticNotifKey[i]);
                            } catch (error) {
                              console.log("errpor saving")
                              // Error saving data
                            }
                        
                          // We have data!!
                  }
                //}
              
                        
                }
               // });
              }
            }
          
            
        });
        
      });
  }
    
  favouriteNotifications=()=> {
    const now = moment().utc();
    var todayDate=moment.utc(now).format();
    //var db2= SQLite.openDatabase({name : "programGuide.sqlite3", createFromLocation : "~programGuide.sqlite3",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});
    db2.transaction((tx1) => {
    
      tx1.executeSql('SELECT * FROM programData WHERE Favourite=?', [1], (tx1, results1) => {
    
        const rows = results1.rows.raw();
      
       
  
        var len = results1.rows.length;
       

        favouriteCountStore(len)
      
        //this.setState({ searchResults: rows })
      for (let i = 0; i < len; i++) {
  
          let row = results1.rows.item(i);
  
         
          var dateExpiry=row.StartTime
          var STORAGE_KEY = row.Topic
          var expiryDateTimeLocal = moment(dateExpiry).format("YYYY-MM-DD HH:mm:ss") // 24 hour format
          //var expiryDateTimeLocal= moment.utc(dateExpiry).local().format('YYYY-MM-DD HH:mm:ss')
          var currentDateTimeLocal=moment.utc(now).local().format('YYYY-MM-DD HH:mm:ss')
          
          var expiryTimeLocal= moment(dateExpiry).format('HH:mm:ss')
          var currentTimeLocal=moment.utc(now).local().format('HH:mm:ss')
          var expiryDateLocal= moment(dateExpiry).format('YYYY-MM-DD')
          var currentDateLocal=moment.utc(now).local().format('YYYY-MM-DD')
          
          //var duration=moment.duration(moment(expiryDateTimeLocal).diff(moment(currentDateTimeLocal))).format('HH:mm:ss')
  // console.log("duration",moment.duration(expiryDateLocal).diff(currentDateLocal).format('HH:mm:ss'))
  //           console.log(moment(expiryDateTimeLocal).diff(moment(currentDateTimeLocal), 'hours'))
  //           console.log(moment(expiryDateTimeLocal).diff(moment(currentDateTimeLocal), 'minutes'))
          // 
          if(expiryDateLocal==currentDateLocal && currentTimeLocal<expiryTimeLocal){
            
            //if(currentTimeLocal< expiryTimeLocal){
             
              // start time and end time
              var startTime = moment(expiryTimeLocal, "HH:mm:ss");
              var endTime = moment(currentTimeLocal, "HH:mm:ss");
  
              // calculate total duration
              var duration = moment.duration(startTime.diff(endTime))
              
              // var displayTime=duration_data.minutes-10 
              //if(duration._data.hours==0 && duration._data.minutes<10){
              if (!(STORAGE_KEY in this.state.storedKey)){
              //if (!(STORAGE_KEY in this.state.storedKey &&duration._data.hours==0 && displayTime<15 && displayTime>0)){
                
                PushNotification.localNotificationSchedule({
                  
                  //... You can use all the options from localNotifications
                  foreground: true,
                  
                  visibility: "public", // (optional) set notification visibility, default: private
                  message: "A talk on "+row.Topic+" is scheduled to be held within 10 minutes",
                  
                  
                  // date: new Date(Date.now() + 60 * 1000) // in 60 secs

                  largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
                  smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
                  //bigText: "", // (optional) default: "message" prop  
                  title: "Don't miss it", // (optional) default: none
                              
                  date:new Date(Date.now() +(duration._milliseconds-10*60*1000))
                  
                });
                try {
                  AsyncStorage.setItem(STORAGE_KEY,"true");
                } catch (error) {
                  console.log("errpor saving")
                  // Error saving data
                }
              }
              
              console.log('duration',duration._data.hours)
                          //}
          }
          
          // else{
            
            
          //   console.log("more")
            
          //}
  
  
      //     if(i<3){
      //       var joined = this.state.day1fornoon.concat(row);
           
            
      //       this.setState({ day1fornoon: joined })
            
      //     }
      //     else if( i >=3 && i<5){
      //       var joined = this.state.day1afrnoon.concat(row);
      //       this.setState({ day1afrnoon: joined })
      //     }
      //     else if( i >=5 && i<9){
      //       var joined = this.state.day1afrnoon2.concat(row);
      //       this.setState({ day1afrnoon2: joined })
      //     }
      //     else if( i >=9 && i<13){
      //       var joined = this.state.day2fornoon.concat(row);
      //       this.setState({ day2fornoon: joined })
      //     }  
      //     else if( i>=13 && i<15){
      //       var joined = this.state.day2afrnoon.concat(row);
      //       this.setState({ day2afrnoon: joined })
      //     }
      //     else if( i>=15 && i<18){
      //       var joined = this.state.day2afrnoon2.concat(row);
      //       this.setState({ day2afrnoon2: joined })
      //     }
      //     else if( i>=18 && i<21){
      //       var joined = this.state.day3fornoon.concat(row);
      //       this.setState({ day3fornoon: joined })
      //     } 
      //     else if( i>=21 && i<23){
      //       var joined = this.state.day3afrnoon.concat(row);
      //       this.setState({ day3afrnoon: joined })
      //     } 
               
       }
      
    });
    
  });
  }
  

  handleAppStateChange=(appState)=>{
    
              
                  
    if(appState =='background'){
      this.getData().then(()=>{
        //this.staticNotifications()
    this.favouriteNotifications()
      })
      
  
    // We have data!!
    
  }





}
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoading: false });
    }
    console.log("this.state.storedKey",this.state.storedKey)
    AppState.addEventListener('change',this.handleAppStateChange)
      // this.initEventPushNotification()
      // this.initPushNotification()
      
      //this.staticNotifications()
      this.favouriteNotifications()
//       BackgroundFetch.configure({
//         minimumFetchInterval: 15, // Aim to run every 3 hours - more conservative on battery
//  // Android options
//         stopOnTerminate: false,
//       startOnBoot: true,
//       requiredNetworkType: BackgroundFetch.NETWORK_TYPE_NONE, // Default
//       requiresCharging: false,      // Default
//       requiresDeviceIdle: false,    // Default
//       requiresBatteryNotLow: false, // Default
//       requiresStorageNotLow: false  // Default
//       }, () => {
//         console.log("[js] Received background-fetch event");
//         this.getData().then(()=>{
//           //this.staticNotifications()
//       this.favouriteNotifications()
//         })
//         // Required: Signal completion of your task to native code
//         // If you fail to do this, the OS can terminate your app
//         // or assign battery-blame for consuming too much background-time
//         BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_NEW_DATA);
//       }, (error) => {
//         console.log("[js] RNBackgroundFetch failed to start");
//       });


//       // Optional: Check if the device is blocking background tasks or not
//       this.checkStatus()
    }


      
  
  
  
    async checkStatus() {
      // Optional: Query the authorization status.
      BackgroundFetch.status((status) => {
        switch(status) {
          case BackgroundFetch.STATUS_RESTRICTED:
            console.log("BackgroundFetch restricted");
            break;
          case BackgroundFetch.STATUS_DENIED:
            console.log("BackgroundFetch denied");
            break;
          case BackgroundFetch.STATUS_AVAILABLE:
            console.log("BackgroundFetch is enabled");
            break;
        }
      });
    }
  getData = async () => {
    console.log("try")
    try {
      await AsyncStorage.getAllKeys().then(async keys => {
        await AsyncStorage.multiGet(keys).then(key => {
          key.forEach(data => {
            console.log(data); //values
            var val=data[0]

            var organisorData=
                {
                  [data[0]]:data[1]
                }

            
              
            
            this.setState({storedKey: {
              ...this.state.storedKey,[data[0]]:data[1]
              
            }
              
             
            })

          });
        });
      });
    } catch (error) {
      //Alert.alert("Couldn't load data", error);
    }
  };
  
componentWillMount(){
    this.setState({isLoading:true})
    PushNotification.cancelAllLocalNotifications()
    this.getData()
    console.log("stored Key",this.state.storedKey)
    
    
  };



    

  
  render() {
   if (this.state.isLoading) {
    return <CustomProgressBar/>
  }
      return (
          <View style={{flex: 1}}>
              <TabNav />
              <PushController/>
          </View>

      );
  }
}

  


