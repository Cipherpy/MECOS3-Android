/*
* Created by Reshma B 04/10/2019
**
*/
'use strict';
import React, { Component } from 'react';
import { Text, View, ImageBackground,Dimensions,Image,TouchableOpacity} from 'react-native';


import HeaderTitle from '../Components/HeaderTitle';
//import SplashScreen from './SplashScreen';

import WelcomeStyle from './Styles/WelcomeStyle';
import images  from '../Assets/Images';
import { ScrollView } from 'react-native-gesture-handler';
import {welcomeScreenLabels} from '../Assets/StaticData';
import colors  from '../Assets/Colors';
const headerName=welcomeScreenLabels.Exhibition
class ExhibitionScreen extends React.Component {
    
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

  


    
  
      render() {
       
        let { searchText } = this.state;

        
        return (
            
          <ScrollView contentContainerStyle={{alignItems: 'center',flex:0}}>
            <View style={WelcomeStyle.imageExhibitionContainer}>
              <Image
              //style={{ width: 800, height: 800 }}
                style={WelcomeStyle.exhibitionImageStyle}
                source={images.exhibitionDetail}
                resizeMode='contain'
                
                />

                
            </View>
            <View style={{width:'100%',justifyContent:'flex-start',paddingTop:10,paddingLeft:20}}>
              <Text style={{fontWeight:'bold',fontSize:15}}>List of Stalls</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent:'space-between',paddingRight:5,paddingTop:5,paddingLeft:10,width:'100%'}}>
              <View style={WelcomeStyle.wordContainer}>
                
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>01. MSC</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>02. WWF</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>03. MPEDA</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>04. CMLRE</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>05. NIPHAAT</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>06. NBFGR</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>07. CMFRI</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>08. Mangrove association</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>09. Buffet Frozen Foods</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>10. Optika Microscopes</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>11. CIBA</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>12. NBA</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>13. CIFT</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>14. CMPA</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>15. Organic Honey</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>16. Jute Bags</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>17. Passion fruit drink</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>18. Green Tea</Text>
                <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>19. Honey shop</Text>
                
                
              </View>
              <View style={WelcomeStyle.wordContainer}>
              
              
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>20. SBI</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>21. Cake Shop</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>22. Live Oyster</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>23. Squid Crab delights</Text>
              
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>24. Fish Biriyani</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>25. Pai Dosa</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>26. SAF</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>27. Minicoy delights</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>28. Organic vegetables</Text>
              
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>29. Clam delights, Appam, Karimeen</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>30. Mussel delights</Text>

              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>31. Live fish sale</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>32. Hybrid Guppy</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>33. Aquarium fishes</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>34. Ice cream</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>35. Fresh Brew Coffee</Text>
              <Text numberOfLines={2} style={WelcomeStyle.exhibitionText}>36. Pepper Shop</Text>
              </View>
            </View>
          </ScrollView>
          
          
        );
      }
    }
    
     
    
    
    
    export default ExhibitionScreen;