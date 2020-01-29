/*
* Created by Reshma B 01/10/2019
**
*/
'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity, Linking, ScrollView

} from 'react-native';
import colors  from '../Assets/Colors';
import images  from '../Assets/Images';

import HeaderTitle from '../Components/HeaderTitle';
//import SplashScreen from './SplashScreen';

import WelcomeStyle from './Styles/WelcomeStyle';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {welcomeScreenLabels,contactData,organisorData} from '../Assets/StaticData';
import {callWebsiteLink} from '../Assets/CommonRoutines';
import ContactItem from '../Components/ContactItem'


//console.log("hjhh",welcomeScreenLabels.Contacts)
const headerName=welcomeScreenLabels.Contacts



class ContactScreen extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
         
        };
      }
      
    static  navigationOptions= ({
        headerTitleStyle: WelcomeStyle.headerNormalText,
        
        headerTintColor: colors.headerBackground,
         
        title: headerName,
        headerRight: (<View/>),
      
     
      headerStyle:[WelcomeStyle.shadowStyle,
        {backgroundColor: colors.headerBackgroundNormal}]
      
  
    })

    /****
     * 
     * @param data
     * manage call, email, website linking
     * 
     * 
     */
    onPressItem = (data) => {
      console.log(data)
      Linking.openURL(data)
    }

    /****
     * 
     * 
     * pass the prop onPressItem function
     * 
     * 
     * 
     */
    renderItem=({item})=><ContactItem item={item}/>
  
  
      render() {
        const textStyleConvenor=[WelcomeStyle.covenorTextStyle,{fontSize: 18}]
        const textStyleConvenorDetails=[WelcomeStyle.covenorTextStyle,{fontSize: 14}]
        return (
          <View style={WelcomeStyle.contactContainer}>
            <ScrollView>
              <View style={WelcomeStyle.contactBannerStyle}>
                  <Text style={WelcomeStyle.bannerTextStyle}>{organisorData.section}</Text>

              </View>

              <View style={WelcomeStyle.contactConenorStyle}>
                  <Text style={textStyleConvenor}>{organisorData.name}</Text>
                  <Text style={textStyleConvenorDetails}>{organisorData.address1}</Text>
                  <Text style={textStyleConvenorDetails}>{organisorData.address2}</Text>
                  <Text style={textStyleConvenorDetails}>{organisorData.address3}</Text>
                  <View style={{height:20}}></View>



                  <View style={WelcomeStyle.contactViewStyle}>
                    <Text style={textStyleConvenorDetails}>Tel: </Text>
                    <TouchableOpacity onPress={()=>{callWebsiteLink(`tel:$+91{4842394420}`)}}>
                      <Text style={textStyleConvenorDetails}>+91 484 2394420</Text>
                    </TouchableOpacity>
                    <Text style={textStyleConvenorDetails}>, </Text>
                    <TouchableOpacity onPress={ ()=>{callWebsiteLink(`tel:$+91{4842394867}`)}}>
                      <Text style={textStyleConvenorDetails}>2394867</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={textStyleConvenorDetails}>Fax: +91 484 2394909</Text>

                  <View style={WelcomeStyle.contactViewStyle}>
                    <Text style={textStyleConvenorDetails}>Email: </Text>
                    <TouchableOpacity  onPress={ ()=>{callWebsiteLink('mailto:mail@mbai.org.in')}}>
                      <Text style={textStyleConvenorDetails}>mail@mbai.org.in</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={WelcomeStyle.contactViewStyle}>
                    <Text style={textStyleConvenorDetails}>Web: </Text>
                    <TouchableOpacity  onPress={ ()=>{callWebsiteLink('http://www.mbai.org.in/mecos3/')}}>
                      <Text style={textStyleConvenorDetails}>www.mbai.org.in/mecos3</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={WelcomeStyle.contactViewStyle}>
                    <Text style={textStyleConvenorDetails}>Web: </Text>
                    <TouchableOpacity  onPress={ ()=>{callWebsiteLink('http://www.mbai.org.in')}}>
                      <Text style={textStyleConvenorDetails}>www.mbai.org.in</Text>
                    </TouchableOpacity>
                  </View>
                  
                  
                  
              </View> 
              
              <FlatList data={contactData} renderItem={this.renderItem}
              />
              
            </ScrollView>
          </View>
        );
      }
    }
    
    
    
    
    
    
    export default ContactScreen;