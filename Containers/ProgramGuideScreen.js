/*
* Created by Reshma B 10/10/2019
**
*/
'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity, Linking, ScrollView,TouchableWithoutFeedback

} from 'react-native';
import colors  from '../Assets/Colors';
import images  from '../Assets/Images';

import HeaderTitle from '../Components/HeaderTitle';
//import SplashScreen from './SplashScreen';
import SplashScreen from 'react-native-splash-screen'
import WelcomeStyle from './Styles/WelcomeStyle';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {welcomeScreenGridData,locationInfo,welcomeScreenLabels,organisorData,programGuideData,dayInfo,staticNames} from '../Assets/StaticData';
import ProgramSpeakerList from '../Components/ProgramSpeakerList'
var SQLite=require('react-native-sqlite-storage')
import Moment from 'moment';

import {bannerStyleGuide,} from '../Assets/CommonRoutines';
const headerName=welcomeScreenLabels.symbosiumItinerary

console.log("topic",programGuideData[1].topics[0])

class ProgramGuideScreen extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
         day1fornoon:[],
         day1afrnoon:[],
         day1afrnoon2:[],
         day2fornoon:[],
         day2afrnoon:[],
         day2afrnoon2:[],
         day3fornoon:[],
         day3afrnoon:[],
         plenarySession:[]
        //  hideHeader:true
         
         
       
         
        };

        
       
      var db = SQLite.openDatabase({name : "programGuide.db", createFromLocation : "~programGuide.db",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});
      //var db = SQLite.openDatabase({name: '<test>.db', createFromLocation : "~/<sqliteexample>.db", location: 'Library'}, (open) => {console.log("opened")}, (e) => {console.log("error")});
     
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM programData WHERE PresentationType=? OR PresentationType=?', ['C','T'], (tx, results) => {
          const rows = results.rows;
            //console.log("Query completed",rows.item());

            var len = results.rows.length;
          for (let i = 0; i < len; i++) {

                let row = results.rows.item(i);
                console.log("Query completed",row);
                if(i<5){
                  var joined = this.state.day1fornoon.concat(row);
                 
                  
                  this.setState({ day1fornoon: joined })
                  
                }
                else if( i >=5 && i<8){
                  var joined = this.state.day1afrnoon.concat(row);
                  this.setState({ day1afrnoon: joined })
                }
                else if( i >=8 && i<12){
                  var joined = this.state.day1afrnoon2.concat(row);
                  this.setState({ day1afrnoon2: joined })
                }
                else if( i >=12 && i<16){
                  var joined = this.state.day2fornoon.concat(row);
                  this.setState({ day2fornoon: joined })
                }  
                else if( i>=16 && i<19){
                  var joined = this.state.day2afrnoon.concat(row);
                  this.setState({ day2afrnoon: joined })
                }
                else if( i>=19 && i<23){
                  var joined = this.state.day2afrnoon2.concat(row);
                  this.setState({ day2afrnoon2: joined })
                }
                else if( i>=23 && i<27){
                  var joined = this.state.day3fornoon.concat(row);
                  this.setState({ day3fornoon: joined })
                } 
                else if( i>=27 && i<30){
                  var joined = this.state.day3afrnoon.concat(row);
                  this.setState({ day3afrnoon: joined })
                } 
                else if(i>=30){
                  this.setState({plenarySession:row})
                }
                     
            }
        });
      });

    }
      
    onPressSearch = () => {
      this.props.navigation.navigate({routeName: 'Search'})
  }  

    
  static navigationOptions = ({ navigation }) => {
  //   if (navigation.state.params.hideHeader) {
  //     return {header: null}
  // }
    return {
        headerTitleStyle: WelcomeStyle.headerNormalText,
        
        headerTintColor: colors.headerBackground,
         
        title: headerName,
        headerRight: (<TouchableOpacity onPress={navigation.getParam('searchButtton')}
        style={{right: Platform.OS === 'ios' ? Dimensions.get("window").height < 667 ?  '10%' : '5%' : '30%', backgroundColor: 'transparent', paddingLeft: 15}}>
<Image style={{width: 20, height: 20}} source={images.searchFav}/>
</TouchableOpacity>),
        
      
     
      headerStyle:[WelcomeStyle.shadowStyle,
        {backgroundColor: colors.headerBackgroundNormal}]
      
  
    }}


    
    componentDidMount() {
      this.props.navigation.setParams({ searchButtton: this.onPressSearch });
    }

    /****
     * 
     * 
     * pass the prop onPressItem function
     * 
     * 
     * 
     */
    renderItem=({item})=>{
        //console.log("item new",item)
     <ProgramSpeakerList  item={item}/>
    }
    displayBanner=()=>{
      return(
        <View style={WelcomeStyle.dynamicBannerStyle}>
          <TouchableOpacity style={{padding:15}} onPress={ ()=>{ this.props.navigation.goBack()}}>
              <Image style={WelcomeStyle.backArrowStyle} source={images.backwardArrow}/>
              <View style={WelcomeStyle.dynamicBannerInnerContainerStyle}>
                <Text style={WelcomeStyle.dynamicBannerTexthead}>{staticNames.programGuide}</Text>
                <Text style={WelcomeStyle.dynamicBannerText}>{staticNames.pogramGuideLongInfo}</Text>
              </View>

                    
          </TouchableOpacity>

        </View>
      )
    }

    render() {
        
      const textStyleConvenor=[WelcomeStyle.covenorTextStyle,{fontSize: 18}]
      const textStyleConvenorDetails=[WelcomeStyle.covenorTextStyle,{fontSize: 14}]
      return (
        <View style={WelcomeStyle.contactContainer}>
          <ScrollView>
              {/* 
              *****************
              ****************** first day no expansion needed
              *******************
              */}
              
              {/* <View style={[WelcomeStyle.programGuideBannerStyle,{flexDirection:'row'}]}>
                <Text style={[WelcomeStyle.bannerTextStyle,{color:colors.black}]}>{programGuideData[0].day} </Text>
                <Text style={[WelcomeStyle.bannerTextStyle,{color:colors.black,fontStyle: 'italic',fontWeight:'normal'}]}>({programGuideData[0].date})</Text>

              </View> */}

                {bannerStyleGuide(programGuideData[0])}
              
              <View style={WelcomeStyle.expandableViewContainerSpeakerScreen}>
                  <View style={WelcomeStyle.profilePictureContainer}>
                      <Image source={images.registration} style={WelcomeStyle.iconStyleProgramGuide}/>
                  </View>
                  <View style={WelcomeStyle.profileContainerStaticData}>
                      <Text numberOfLines={2} style={WelcomeStyle.contactExpandableDescriptionText}>{programGuideData[0].event1}</Text>
                  </View>
                  <View style={WelcomeStyle.timeContainerProgramGuide}>
                    <View style={WelcomeStyle.timeProgramGuide}>
                          <Text style={WelcomeStyle.programGuideTimeStyle}>{programGuideData[0].event1StartTime}</Text>
                          <Text style={[WelcomeStyle.programGuideTimeStyle,{alignSelf:'center',}]}>to</Text>
                          <Text style={WelcomeStyle.programGuideTimeStyle}>{programGuideData[0].event1EndTime}</Text>
                      </View>
                  </View>
              </View>
              <View style={WelcomeStyle.dividerStyle}>
              </View>
              <View style={WelcomeStyle.expandableViewContainerSpeakerScreen}>
                  <View style={WelcomeStyle.profilePictureContainer}>
                      <Image source={images.award} style={WelcomeStyle.iconStyleProgramGuide}/>
                  </View>
                  <View style={WelcomeStyle.profileContainerStaticData}>
                      <Text numberOfLines={2} style={WelcomeStyle.contactExpandableDescriptionText}>{programGuideData[0].event2}</Text>
                  </View>
                  <View style={WelcomeStyle.timeContainerProgramGuide}>
                    <View style={WelcomeStyle.timeProgramGuide}>
                          <Text style={WelcomeStyle.programGuideTimeStyle}>{programGuideData[0].event2StartTime}</Text>
                          <Text style={[WelcomeStyle.programGuideTimeStyle,{alignSelf:'center',}]}>to</Text>
                          <Text style={WelcomeStyle.programGuideTimeStyle}>{programGuideData[0].event2EndTime}</Text>
                      </View>
                  </View>
              </View>
              <View style={WelcomeStyle.dividerStyle}>
              </View>
              <View style={WelcomeStyle.expandableViewContainerSpeakerScreen}>
                  <View style={WelcomeStyle.profilePictureContainer}>
                      <Image source={images.coffee} style={WelcomeStyle.iconStyleProgramGuide}/>
                  </View>
                  <View style={WelcomeStyle.profileContainerStaticData}>
                      <Text numberOfLines={2} style={WelcomeStyle.contactExpandableDescriptionText}>{programGuideData[0].event3}</Text>
                  </View>
                  <View style={WelcomeStyle.timeContainerProgramGuide}>
                    <View style={WelcomeStyle.timeProgramGuide}>
                          <Text style={WelcomeStyle.programGuideTimeStyle}>{programGuideData[0].event3StartTime}</Text>
                          <Text style={[WelcomeStyle.programGuideTimeStyle,{alignSelf:'center',}]}>to</Text>
                          <Text style={WelcomeStyle.programGuideTimeStyle}>{programGuideData[0].event3EndTime}</Text>
                      </View>
                  </View>
              </View>
              <View style={{marginBottom:15}}>
              </View>





            {/* 
            *****************
            ****************** Second day ***********************************************************************
            *******************
            */}


              {/* <View style={[WelcomeStyle.programGuideBannerStyle,{flexDirection:'row'}]}>
                <Text style={[WelcomeStyle.bannerTextStyle,{color:colors.black}]}> {programGuideData[1].day} </Text>
                  <Text style={[WelcomeStyle.bannerTextStyle,{color:colors.black,fontStyle: 'italic',fontWeight:'normal'}]}>({programGuideData[1].date})</Text>

              </View> */}


              {bannerStyleGuide(programGuideData[1])}
              <ProgramSpeakerList  day={dayInfo.day2} navigation={this.props.navigation} data={programGuideData[1].topics[0]} item={this.state.day1fornoon}/>
  
              {/* 
              *****************
              ****************** Second day speakers list afternoon 
              *******************
              */}
           
            

              <ProgramSpeakerList  day={dayInfo.day2}navigation={this.props.navigation} data={programGuideData[1].topics[1]} item={this.state.day1afrnoon} 
                                   data2={programGuideData[1].topics[2]} item2={this.state.day1afrnoon2}/>
              
              
          {/* 
              *****************
              ****************** Third day************************************************************************
              *******************
          */}


              {/* <View style={[WelcomeStyle.programGuideBannerStyle,{flexDirection:'row'}]}>
                <Text style={[WelcomeStyle.bannerTextStyle,{color:colors.black}]}>{programGuideData[2].day} </Text>
                  <Text style={[WelcomeStyle.bannerTextStyle,{color:colors.black,fontStyle: 'italic',fontWeight:'normal'}]}>({programGuideData[2].date})</Text>

              </View> */}
              {bannerStyleGuide(programGuideData[2])}

              {/* 
              *****************
              ****************** Third day speakers list fornoon
              *******************
              */}
              <ProgramSpeakerList  day={dayInfo.day3} navigation={this.props.navigation} data={programGuideData[2].topics[0]} item={this.state.day2fornoon}/>
              {/* 
              *****************
              ****************** Third day speakers list afternoon
              *******************
              */}
              <ProgramSpeakerList  day={dayInfo.day3} navigation={this.props.navigation} data={programGuideData[2].topics[1]} item={this.state.day2afrnoon}/>
           
          
            

            

              {/* 
              *****************
              ****************** Third day speakers list afternoon after tea
              *******************
              */}

              <ProgramSpeakerList  day={dayInfo.day3} navigation={this.props.navigation} data={programGuideData[2].topics[2]} item={this.state.day2afrnoon2}/>
          


          {/* 
            *****************
            ****************** Fourth day***********************************************************************
            *******************
          */}


              {/* <View style={[WelcomeStyle.programGuideBannerStyle,{flexDirection:'row'}]}>
                <Text style={[WelcomeStyle.bannerTextStyle,{color:colors.black}]}>{programGuideData[3].day} </Text>
                  <Text style={[WelcomeStyle.bannerTextStyle,{color:colors.black,fontStyle: 'italic',fontWeight:'normal'}]}>({programGuideData[3].date})</Text>

              </View> */}


              {bannerStyleGuide(programGuideData[3])}
              <ProgramSpeakerList  day={dayInfo.day4} navigation={this.props.navigation} data={programGuideData[3].topics[0]} item={this.state.day3fornoon}/>
              {/* 
              *****************
              ****************** Forth day speakers list afternoon
              *******************
              */}
              <ProgramSpeakerList  day={dayInfo.day4} navigation={this.props.navigation} data={programGuideData[3].topics[1]} item={this.state.day3afrnoon}/>
              
              {/*   
              ***********************
              *********************** Plenary Session              
              ************************ */}
              <ProgramSpeakerList  day={dayInfo.day4} navigation={this.props.navigation} data={programGuideData[3].topics[2]} item={this.state.plenarySession}/>

              

              
              <View style={WelcomeStyle.expandableViewContainerSpeakerScreen}>
                  <View style={WelcomeStyle.profilePictureContainer}>
                      <Image source={images.coffee} style={WelcomeStyle.iconStyleProgramGuide}/>
                  </View>
                  <View style={WelcomeStyle.profileContainerStaticData}>
                      <Text numberOfLines={2} style={WelcomeStyle.contactExpandableDescriptionValedatory}>{programGuideData[0].event4}</Text>
                  </View>
                  <View style={WelcomeStyle.timeContainerProgramGuide}>
                  <View style={WelcomeStyle.timeProgramGuide}>
                          <Text style={WelcomeStyle.programGuideTimeStyle}>{programGuideData[0].event4StartTime}</Text>
                          <Text style={[WelcomeStyle.programGuideTimeStyle,{alignSelf:'center',}]}>to</Text>
                          <Text style={WelcomeStyle.programGuideTimeStyle}>{programGuideData[0].event4EndTime}</Text>
                      </View>
                  </View>
              </View>

              <View style={{height:10}}>

              </View>
           
            
          </ScrollView>
        </View>
      );
    }
  }
    
    
    
    
    
    
    export default ProgramGuideScreen;