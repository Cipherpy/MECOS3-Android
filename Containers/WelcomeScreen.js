/*
* Created by Reshma B 28/09/2019
**
*/

import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity, Linking

} from 'react-native';
import colors  from '../Assets/Colors';
import images  from '../Assets/Images';

import HeaderTitle from '../Components/HeaderTitle';
//import SplashScreen from './SplashScreen';
import SplashScreen from 'react-native-splash-screen'
import WelcomeStyle from './Styles/WelcomeStyle';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {welcomeScreenGridData,locationInfo,welcomeScreenLabels} from '../Assets/StaticData';
import {callWebsiteLink} from '../Assets/CommonRoutines';

const numColumns=2
const url = Platform.select({
  ios: "maps:" + locationInfo.latitude + "," + locationInfo.longitude + "?q=" + locationInfo.label,
  android: "geo:" + locationInfo.latitude + "," + locationInfo.longitude + "?q=" + locationInfo.label
});


class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
  onPressNotification = () => {
    this.props.navigation.navigate({routeName: 'Notification'})
  }  
  
  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: <HeaderTitle headerName={null}/>,
    headerRight: (
    <TouchableOpacity disabled={true} onPress={navigation.getParam('notificationClick')}
        style={{right: Platform.OS === 'ios' ? Dimensions.get("window").height < 667 ?  '10%' : '5%' : '25%', backgroundColor: 'transparent', paddingLeft: 15}}>
        {/* <Image style={{width: 20, height: 20}} source={images.notification}/> */}
        </TouchableOpacity>
        ),
   headerLeft: (<View 
   style={{right: Platform.OS === 'ios' ? Dimensions.get("window").height < 667 ?  '10%' : '5%' : '25%', backgroundColor: 'transparent', paddingLeft: 15}}>
          </View>),
    headerStyle:[WelcomeStyle.shadowStyle,
      {backgroundColor: colors.headerBackground}]
    

  }}

  componentDidMount() {
    this.props.navigation.setParams({ notificationClick: this.onPressNotification });
  }

  /***
   * 
   * @param item
   * individual grids from flat list item loaded here to check condition
   * 
   * 
   */

  renderElement(item){
    const {navigate} = this.props.navigation;
    
    if(item.name==welcomeScreenLabels.howToReach){
      return(
      <TouchableOpacity style={[WelcomeStyle.gridItem, {backgroundColor: item.backgroundColor}]} onPress={() => Linking.openURL(url)}>
          <Image style={WelcomeStyle.imageStyle} source={item.image} />
            <Text style={WelcomeStyle.gridItemText}>{item.name}</Text>
        </TouchableOpacity>
      )}
      else if(item.name==welcomeScreenLabels.Contacts){
        return(
          <TouchableOpacity style={[WelcomeStyle.gridItem, {backgroundColor: item.backgroundColor}]} onPress={() => this.props.navigation.navigate('Contacts')}>
              <Image style={WelcomeStyle.imageStyle} source={item.image} />
                <Text style={WelcomeStyle.gridItemText}>{item.name}</Text>
            </TouchableOpacity>
          )
      }
      else if(item.name==welcomeScreenLabels.Exhibition){
        return(
          <TouchableOpacity style={[WelcomeStyle.gridItem, {backgroundColor: item.backgroundColor}]} onPress={() => this.props.navigation.navigate('Exhibition')}>
              <Image style={WelcomeStyle.imageStyle} source={item.image} />
                <Text style={WelcomeStyle.gridItemText}>{item.name}</Text>
            </TouchableOpacity>
          )
      }
      else if(item.name==welcomeScreenLabels.symbosiumItinerary){
        return(
          <TouchableOpacity style={[WelcomeStyle.gridItem, {backgroundColor: item.backgroundColor}]} onPress={() => this.props.navigation.navigate('programGuide')}>
              <Image style={WelcomeStyle.imageStyle} source={item.image} />
                <Text style={WelcomeStyle.gridItemText}>{item.name}</Text>
            </TouchableOpacity>
          )
      }
      else if(item.name==welcomeScreenLabels.leadSpeakers){
        return(
          <TouchableOpacity style={[WelcomeStyle.gridItem, {backgroundColor: item.backgroundColor}]} onPress={() => this.props.navigation.navigate('LeadSpeaker')}>
              <Image style={WelcomeStyle.imageStyle} source={item.image} />
                <Text style={WelcomeStyle.gridItemText}>{item.name}</Text>
            </TouchableOpacity>
          )
      }
      else if(item.name==welcomeScreenLabels.Sessions){
        return(
          <TouchableOpacity style={[WelcomeStyle.gridItem, {backgroundColor: item.backgroundColor}]} onPress={() => this.props.navigation.navigate('MyFavourite')}>
              <Image style={WelcomeStyle.imageStyle} source={item.image} />
                <Text style={WelcomeStyle.gridItemText}>{item.name}</Text>
            </TouchableOpacity>
          )
      }
      else if(item.name==welcomeScreenLabels.WebsiteLink){
        return(
          <TouchableOpacity style={[WelcomeStyle.gridItem, {backgroundColor: item.backgroundColor}]} onPress={ ()=>{ callWebsiteLink('http://mbai.org.in/mecos3/uploads/leftmenu/abstracts_20200107124814.pdf')}}>
              <Image style={WelcomeStyle.imageStyle} source={item.image} />
                <Text style={WelcomeStyle.gridItemText}>{item.name}</Text>
            </TouchableOpacity>
          )
      }
      else if(item.name==welcomeScreenLabels.search){
        return(
          <TouchableOpacity style={[WelcomeStyle.gridItem, {backgroundColor: item.backgroundColor}]} onPress={() => this.props.navigation.navigate('Search')}>
              <Image style={WelcomeStyle.imageStyle} source={item.image} />
                <Text style={WelcomeStyle.gridItemText}>{item.name}</Text>
            </TouchableOpacity>
          )
      }
      else{
        return(
          <View style={[WelcomeStyle.gridItem, {backgroundColor: item.backgroundColor}]}>
              <Image style={WelcomeStyle.imageStyle} source={item.image} />
              <Text style={WelcomeStyle.gridItemText}>{item.name}</Text>
            </View>
        )
      }
    }
    // componentDidMount(){
    //     SplashScreen.hide()
    // }

    /***
   * 
   * 
   * 
   * @param item, index
   * flatlist each item
   * 
   * 
   */
    renderItem = ({item, index}) => {
     
      return(
        <View style={{flex:1}}>
          {this.renderElement(item) }
        </View>
        
        
      );
    } ;   // componentDidMount(){
      //     SplashScreen.hide()
      // }
    render() {
     

      return (
        <View style={WelcomeStyle.welcomeContainer}>
          
  
                 
             <FlatList
             
              data={welcomeScreenGridData}
              //columnWrapperStyle={{justifyContent:'space-between', }}
              
              renderItem={this.renderItem}
              numColumns={numColumns}
              /> 
  
        </View>
      );
    }
  }
  
  
  
  
  
  
  export default WelcomeScreen;