/*
* Created by Reshma B 27/09/2019
**
*/

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import WelcomeStyle from '../Containers/Styles/WelcomeStyle';

class HeaderTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerName: props.headerName,
    };
  }


    render() {
      if(this.state.headerName ==null){
        return (
          <View style={WelcomeStyle.headerWelcomeStyle}>
            <View style={{alignSelf: 'center',justifyContent:'center',height: '90%'}}>
              <Text style={WelcomeStyle.headerWelcomeText}>MECOS</Text>
            </View>
            <Text> </Text>
            <View style={{alignSelf: 'center',justifyContent:'center',height: '100%'}}>
              <Text style={WelcomeStyle.headerWelcomeText2}>3</Text>
            </View>
             
          </View>
        );
      }
      else{
        return (
          null
          
        );
      }
     
    }
  }
export default HeaderTitle;