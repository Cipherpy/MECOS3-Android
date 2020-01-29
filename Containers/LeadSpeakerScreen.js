'use strict';
import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image, TouchableOpacity, FlatList,ScrollView,
  Alert,ActivityIndicator } from 'react-native';
import WelcomeStyle from '../Containers/Styles/WelcomeStyle';
import images  from '../Assets/Images';
import PropTypes from 'prop-types'
import colors  from '../Assets/Colors';
import {welcomeScreenGridData,locationInfo,welcomeScreenLabels,organisorData,programGuideData,dayInfo,typeSpeakers,staticNames} from '../Assets/StaticData';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import moment from 'moment';
import RNFetchBlob from 'react-native-fetch-blob'
import {CustomProgressBar,callAlert,favouriteCountStore} from '../Assets/CommonRoutines';
import AsyncStorage from '@react-native-community/async-storage';

var SQLite=require('react-native-sqlite-storage')

const headerName=welcomeScreenLabels.leadSpeakers



class LeadSpeakerScreen extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
         
          day2List:[],
          day3List:[],
          day4List:[],
          loading: true,
          favourited:false,
          countfavourites:0
       
         
        };
        
      
    }
    
    componentWillMount(){
      
      var db = SQLite.openDatabase({name : "programGuide.db", createFromLocation : "~programGuide.db",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});
      //var db = SQLite.openDatabase({name: '<test>.db', createFromLocation : "~/<sqliteexample>.db", location: 'Library'}, (open) => {console.log("opened")}, (e) => {console.log("error")});
      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM programData WHERE PresentationType=?', [typeSpeakers.Talk], (tx, results) => {
          const rows = results.rows;
            //console.log("Query completed",rows.item());
            //console.log("dayInfo",dayInfo)
            
          var len = results.rows.length;
          console.log("lenght",len)
          
          for (let i = 0; i < len; i++) {
            
  
                let row = results.rows.item(i);

                // if(row.Favourite ==1){
                //   countfavourites=countfavourites+1
                // }
                console.log("Query completed",row);
                if(dayInfo.day2==row.Day){
                  var joined = this.state.day2List.concat(row);
                  this.setState({ day2List: joined })
                  
                }
                else if(dayInfo.day3==row.Day){
                  var joined = this.state.day3List.concat(row);
                  this.setState({ day3List: joined })
                }
                else if(dayInfo.day4==row.Day){
                  var joined = this.state.day4List.concat(row);
                  this.setState({ day4List: joined })
                }
                
                     
            }
            
            this.setState({loading:false,
            })
            
        });
      });
      
  
        AsyncStorage.getItem(staticNames.favouriteCountKey).then((value) => {
          
          console.log("favourite count",value)
          this.setState({countfavourites:parseInt(value), 
        })
      
      })
      
    }
        

       
  
    
      
      

    
      
    

    
    static  navigationOptions= ({
        headerTitleStyle: WelcomeStyle.headerNormalText,
        
        headerTintColor: colors.headerBackground,
         
        title: headerName,
        headerRight: (<View/>),
      
     
      headerStyle:[WelcomeStyle.shadowStyle,
        {backgroundColor: colors.headerBackgroundNormal}]
      
  
    })
    fetchImage(imageUrl){
      var imageData="data:image/png;base64," + imageUrl
      //console.log('imageData',imageData)
      return(
        <Image source={{uri: imageData, scale: 1}} style={WelcomeStyle.profilePicture}/>
      )
  }

componentWillUnmount(){
  console.log('countFavourites',this.state.countfavourites)
  favouriteCountStore(this.state.countfavourites)
}

  onPressFavourite(item1,index){
    
    if(this.state.countfavourites >=10 && item1.Favourite ==false){
      callAlert()
    }
    else{
      var favourited  
      //this.setState({favourited:!this.state.favourited})
    
          console.log("favourited",item1)
          if(item1.Favourite ==false){
            this.setState({countfavourites:this.state.countfavourites+1})
            console.log("countFavourites",this.state.countfavourites+1)
          }
          if(item1.Favourite ==true){
            this.setState({countfavourites:this.state.countfavourites-1})
            console.log("countFavourites",this.state.countfavourites-1)
          }
          //var key=this.props.navigation.state.params.data.key
          var topicNew=item1.Topic
          var dayNumber=item1.Day
        
          if(dayNumber ==dayInfo.day2){
            //console.log("this.state.day2List",this.state.day2List)
            const day2data = this.state.day2List
            //console.log("day2data",`${day2data[index].Favourite}`)
            //console.log("day2datainverted",`${!day2data[index].Favourite}`)
            day2data[index].Favourite = !day2data[index].Favourite
            this.setState({day2List:day2data})
            
            favourited=day2data[index].Favourite
            console.log('favourited',favourited)
            //console.log("day2data",day2data)
          }
          else if(dayNumber ==dayInfo.day3){
            //console.log("this.state.day2List",this.state.day2List)
            const day3data = this.state.day3List
            //console.log("day2data",`${day2data[index].Favourite}`)
            //console.log("day2datainverted",`${!day2data[index].Favourite}`)
            day3data[index].Favourite = !day3data[index].Favourite
            this.setState({day3List:day3data})
            
            favourited=day3data[index].Favourite
            console.log('favourited',favourited)
            //console.log("day2data",day2data)
          }
          else if(dayNumber ==dayInfo.day4){
            //console.log("this.state.day2List",this.state.day2List)
            const day4data = this.state.day4List
            //console.log("day2data",`${day2data[index].Favourite}`)
            //console.log("day2datainverted",`${!day2data[index].Favourite}`)
            day4data[index].Favourite = !day4data[index].Favourite
            this.setState({day4List:day4data})
            
            favourited=day4data[index].Favourite
            console.log('favourited',favourited)
            //console.log("day2data",day2data)
          }
          // if(item.Favourite == 1){
          //   var favourited=0
          // }
          // else{
          //   var favourited=1
          // }
          
          var db1 = SQLite.openDatabase({name : "programGuide.db", createFromLocation : "~programGuide.db",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});
        
                                        // db1.transaction(function(transaction) {
                                        //   transaction.executeSql('INSERT OR REPLACE INTO programData(key,Favourite)\
                                        //   VALUES(1,?)',[placeholders],
                                        //   );
            db1.transaction(function(transaction) {
              
              transaction.executeSql('UPDATE programData SET Favourite=? WHERE Topic=?;',[favourited,topicNew],
              );
            
          
            });
            // this.setState({countfavourites:this.state.countfavourites+1})
            // console.log("countFavourites",this.state.countfavourites)
          //this.componentWillMount() 
        
        
                //   db1.transaction((tx1) => {
          
                //     tx1.executeSql('SELECT * FROM programData', [], (tx1, results1) => {
                  
                //       const rows = results1.rows.raw();
                    
                //       console.log("Query completednew",rows)
            
                    
                //     this.setState({loading:false})
                    
                //   });
                  
                // });
        
          }
    
    
     
      
  

}

    /****
     * 
     * 
     * pass the prop flatlist individual speakers based on day 
     * 
     * 
     * 
     */
    renderItem = ({item, index}) => {
      var dateLocalinFormat=moment(item.StartTime).format('MMMM D, YYYY')
        var timeLocalinFormat=moment(item.StartTime).format('HH:mm')
      console.log("dateLocalinFormat",timeLocalinFormat)
      var base64Icon = 'data:image/png;base64,'+item.ProfilePic
      return(
        
        <View style={{flex:1,backgroundColor:colors.bannerBackgroundColor}}>
          <View style={WelcomeStyle.expandableViewContainerSpeakerScreen}>
              <View style={WelcomeStyle.profilePictureContainerProgramGuide}>
                  {item.ProfilePic?<Image source={{uri:base64Icon}} style={WelcomeStyle.profilePicture} />:
                  <Image source={images.profilePicture} style={WelcomeStyle.profilePicture}/>}
              </View>
              <View style={WelcomeStyle.profileContainerProgramGuide}>
                  <Text style={WelcomeStyle.bannerTextStyle}>{item.Author1}</Text>
                  <Text style={WelcomeStyle.speakerScreenDesignationStyle}>{item.Designaton && item.Designaton+', '}
                          {item.Affliation1 && item.Affliation1+', '}{item.Affliation2 && item.Affliation2}</Text>
                  <View style={{height:5}}/>
                  <Text style={[WelcomeStyle.speakerScreenTopic,{width:'93%'}]}>Talk: {item.Topic}</Text>
                  <View style={{height:5}}/>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                          <Image style={WelcomeStyle.timeStyle} source={images.timeSymbol}/>
                          <View style={{width:5}}/>
                          <Text style={WelcomeStyle.programGuideTimeStyle}>{timeLocalinFormat} Hrs {dateLocalinFormat}</Text>
                      </View>
                  </View>
              <View style={WelcomeStyle.timeContainerProgramGuide}>
                  <TouchableOpacity style={WelcomeStyle.timeProgramGuide} onPress={ ()=>{ this.onPressFavourite(item,index)}}>
                    <Image source={(item.Favourite==1 || item.Favourite ==true)?images.favouriteActive:images.favouriteInactive} style={WelcomeStyle.favouriteStyle}/>
                  </TouchableOpacity>
                 
              </View>
          </View>
          <View style={WelcomeStyle.speakerScreenDividerStyle}>
          </View>
          
          
        </View>
      );
    } 

      render() {
       
        return (
          <View style={WelcomeStyle.contactContainer}>
            {this.state.loading?
                <CustomProgressBar />
              :
              <ScrollView>
                  {/* 
                  *****************
                  ****************** first day no expansion needed
                  *******************
                  */}
                    <View style={WelcomeStyle.speakerScreenBannerStyle}>
                        <Text style={WelcomeStyle.bannerTextStyle}>{dayInfo.day2}</Text>
                        

                    </View>
                    <FlatList extraData={this.state} data={this.state.day2List} renderItem={this.renderItem}/>
                    <View style={WelcomeStyle.speakerScreenBannerStyle}>
                        <Text style={WelcomeStyle.bannerTextStyle}>{dayInfo.day3}</Text>

                    </View>
                    <FlatList extraData={this.state} data={this.state.day3List} renderItem={this.renderItem}/>
                    <View style={WelcomeStyle.speakerScreenBannerStyle}>
                        <Text style={WelcomeStyle.bannerTextStyle}>{dayInfo.day4}</Text>

                    </View>
                    <FlatList extraData={this.state} data={this.state.day4List} renderItem={this.renderItem}/>
                </ScrollView>
            }
          </View>
        );
      }
    }
    
    
    
    
    
    
    export default LeadSpeakerScreen;