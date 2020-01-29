import React, {Fragment} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
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
import colors  from '../Assets/Colors';

/*import the home screen of the app*/
import WelcomeScreen from '../Containers/WelcomeScreen';
import ContactScreen from '../Containers/ContactScreen';
import ExhibitionScreen from '../Containers/ExhibitionScreen'
import ProgramGuideScreen from '../Containers/ProgramGuideScreen'
import LeadSpeakerScreen from '../Containers/LeadSpeakerScreen'
import PresentationScreen from '../Containers/PresentationScreen'

import SearchScreen from '../Containers/SearchScreen'
import MyFavouriteScreen from '../Containers/MyFavouriteScreen'

/*import style page for header Style*/
import WelcomeStyle from '../Containers/Styles/WelcomeStyle';

import {welcomeScreenGridData,locationInfo,welcomeScreenLabels,organisorData,programGuideData,dayInfo,themes} from '../Assets/StaticData';


const AppNavigator = createStackNavigator(
    
    {
      
      Home: {
        screen: WelcomeScreen,
        
      },
      Contacts: {
        screen: ContactScreen,
      },
      Exhibition: {
        screen: ExhibitionScreen,
      },
      programGuide: {
        screen: ProgramGuideScreen,
      },
      LeadSpeaker:{
        screen: LeadSpeakerScreen,
      },
      Presentations:{
        screen:PresentationScreen
      },
      
      Search:{
        screen:SearchScreen
      },
      MyFavourite:{
        screen:MyFavouriteScreen
      },
      
      


    },
     {
      initialRouteName: 'Home',
      
     } 
    
  );






  const TabNav = createAppContainer(AppNavigator);
  export default TabNav;
  
 

  