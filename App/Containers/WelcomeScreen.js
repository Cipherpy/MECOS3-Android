import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import colors  from '../../Assets/Colors';

import HeaderTitle from '../Components/HeaderTitle';
//import SplashScreen from './SplashScreen';
import SplashScreen from 'react-native-splash-screen'
import WelcomeStyle from './Styles/WelcomeStyle';
import {welcomeScreenGridData} from '../../Assets/staticData';
const numColumns=2
class WelcomeScreen extends React.Component {
  static  navigationOptions= ({
    headerTitle: <HeaderTitle/>,
    
   
    headerStyle: {
      backgroundColor: colors.headerBackground
    }
    

  })

  renderitem=({item,index})=>{
    console.log("data item")
    return(
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  } ;   // componentDidMount(){
    //     SplashScreen.hide()
    // }
  render() {
    return (
      <View style={{backgroundColor:'blue', marginTop:60}}>
        <Text style={{fontSize:20, color:'#fff'}}>React Native</Text>

               
          {/* <FlatList
            data={welcomeScreenGridData}
            
            renderItem={this.renderItem}
            numColumns={numColumns}
            /> */}

      </View>
      
      
    );
  }

  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:6000,
    width:50,
    backgroundColor:colors.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeMessageContainer: {
    heigh: 50,
    marginTop: 'auto',
    paddingTop: 50,
    alignSelf: 'center',
    width: '95%'
  },
  welcomeMessage: {
    marginBottom: 30,
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  practiceButtonContainer: {
    marginTop: 'auto',
    width: '95%',
    marginBottom: 30
  }
});


export default WelcomeScreen;