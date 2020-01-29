/*
* Created by Reshma B 31/10/2019
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
import {welcomeScreenGridData,locationInfo,welcomeScreenLabels,organisorData,programGuideData,dayInfo,typeSpeakers,staticNames} from '../Assets/StaticData';
import ProgramSpeakerList from '../Components/ProgramSpeakerList'
var SQLite=require('react-native-sqlite-storage')
import SearchLayout from 'react-navigation-addon-search-layout';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import moment from 'moment';
var db = SQLite.openDatabase({name : "programGuide.db", createFromLocation : "~programGuide.db",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});
import {callAlert,favouriteCountStore} from '../Assets/CommonRoutines';
const headerName=welcomeScreenLabels.symbosiumItinerary
import AsyncStorage from '@react-native-community/async-storage';
//console.log("topic",programGuideData[1].topics[0])

class SearchScreen extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            searchText: null,
            searchResults:[],
            countfavourites:0
       
         
        };

        
       
     

    }
      
    static navigationOptions = {
        header: null,
      };
      componentWillMount(){
        AsyncStorage.getItem(staticNames.favouriteCountKey).then((value) => {
          
          console.log("favourite count search",value)
          this.setState({countfavourites:parseInt(value), 
        })
      
      })
      }
    
      
    
      _handleQueryChange = searchText => {
        this.setState({ searchText });
        var speaker=typeSpeakers.Talk
        var oral=typeSpeakers.Oral
        var poster=typeSpeakers.Poster
        
        //var db = SQLite.openDatabase({name: '<test>.db', createFromLocation : "~/<sqliteexample>.db", location: 'Library'}, (open) => {console.log("opened")}, (e) => {console.log("error")});
       
        db.transaction((tx) => {
            tx.executeSql("SELECT Topic,Code,PresentationType,Author1,Author2,Author3, Author4,Author5,Author6,Author7,Author8,Author9,"+
            "Author10,Author11,Author12,Author13,Author14,Author15,StartTime,Favourite FROM programData WHERE (Author1 LIKE '%" + searchText + 
            "%' OR TOPIC LIKE '%" + searchText + "%' OR KeyWrd1 LIKE '%" + searchText +
            "%' OR Author2 LIKE '%" + searchText + "%' OR Author3 LIKE '%" + searchText +
            "%' OR Author4 LIKE '%" + searchText + "%' OR Author5 LIKE '%" + searchText + 
            "%' OR Author6 LIKE '%" + searchText + "%' OR Author7 LIKE '%" + searchText +
            "%' OR Author8 LIKE '%" + searchText + "%' OR Author9 LIKE '%" + searchText + 
            "%' OR Author10 LIKE '%" + searchText + "%' OR Author11 LIKE '%" + searchText + 
            "%' OR Author12 LIKE '%" + searchText + "%' OR Author13 LIKE '%" + searchText + 
            "%' OR Author14 LIKE '%" + searchText + "%' OR Author15 LIKE '%" + searchText + 
            "%' OR KeyWrd2 LIKE '%" + searchText + "%' OR KeyWrd3 LIKE '%" + searchText + 
            "%' OR KeyWrd4 LIKE '%" + searchText + "%' OR KeyWrd5 LIKE '%" + searchText +
            "%' OR KeyWrd6 LIKE '%" + searchText + "%' OR Code LIKE '%" + searchText +
            "%') AND (PresentationType LIKE '%" + speaker +
            "%' OR PresentationType LIKE '%" + oral +
            "%' OR PresentationType LIKE '%" + poster + "%')"
             , [], (tx, results) => {
              const rows = results.rows.raw();
              //console.log("Query completed",rows);
              var len = results.rows.length;
              this.setState({ searchResults: rows })
              // var filteredData = rows.filter(item => item.Favourite == 1);
              // this.setState({ countfavourites: filteredData.length });
              // console.log("countfavourites",filteredData.length)
            });
          });
      };
      
      _executeSearch = () => {
        //alert('do search!');
        // db.transaction((tx) => {
        //     tx.executeSql('SELECT * FROM programData WHERE Author1 LIKE"' +searchText+ '";', [], (tx, results) => {
        //       const rows = results.rows;
        //         //console.log("Query completed",rows.item());
    
        //         var len = results.rows.length;
        //       for (let i = 0; i < len; i++) {
    
        //             let row = results.rows.item(i);
        //             console.log("Query completed",row);
                    
                         
        //         }
        //     });
        //   });
      };
      /***
   * 
   * 
   * 
   * @param item, index
   * navigate to presenations list
   * onPress={this.presentationIndividualNavigate.bind(this,item)}
   * 
   */




      onPressFavourite(item1,index){
        if(this.state.countfavourites >=10 && item1.Favourite ==false){
          callAlert()
        }
        else{
          console.log("favourited",item1)
          if(item1.Favourite ==false){
            this.setState({countfavourites:this.state.countfavourites+1})
            //console.log("countFavourites",this.state.countfavourites+1)
          }
          if(item1.Favourite ==true){
            this.setState({countfavourites:this.state.countfavourites-1})
            //console.log("countFavourites",this.state.countfavourites-1)
          }
          var favourited  
          //this.setState({favourited:!this.state.favourited})
  
            console.log("favourited",item1)
  
            //var key=this.props.navigation.state.params.data.key
            var topicNew=item1.Topic
            var dayNumber=item1.Day
  
            
              //console.log("this.state.day2List",this.state.day2List)
              const searchData = this.state.searchResults
              //console.log("day2data",`${day2data[index].Favourite}`)
              //console.log("day2datainverted",`${!day2data[index].Favourite}`)
              searchData[index].Favourite = !searchData[index].Favourite
              this.setState({day2List:searchData})
              
              favourited=searchData[index].Favourite
              //console.log('favourited',favourited)
              //console.log("day2data",day2data)
            
            
  
            var db1 = SQLite.openDatabase({name : "programGuide.db", createFromLocation : "~programGuide.db",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});
  
                                          
              db1.transaction(function(transaction) {
                
                transaction.executeSql('UPDATE programData SET Favourite=? WHERE Topic=?;',[favourited,topicNew],
                );
              
            
              });
        }
          
          

        
        
          


      }

componentWillUnmount(){
  favouriteCountStore(this.state.countfavourites)
}
      renderItem = ({item, index}) => {
        
        var dateLocalinFormat=moment(item.StartTime).format('MMMM D, YYYY')
        var timeLocalinFormat=moment(item.StartTime).format('HH:mm')
        return(
          <View>
            <View style={WelcomeStyle.expandableViewContainerSpeakerScreen}>
                
                <View style={WelcomeStyle.searchContainer}>
                    
                <Text style={WelcomeStyle.bannerTextStyle}>{item.Topic}</Text>
                    <Text>
                    
                    <Text style={[WelcomeStyle.contactExpandableDescriptionTextNameProgramGuide,{color:colors.author1color}]}>
                      {item.Author1}{item.Author2 && ', '}</Text>
                  
                    
                  <Text style={[WelcomeStyle.contactExpandableDescriptionTextNameProgramGuide,{color:colors.author1color}]}>
                    {item.Author2 && item.Author2}{item.Author3 &&', '} 
                      {item.Author3 && item.Author3}{item.Author4 &&', '}  
                      {item.Author4 && item.Author4}{item.Author5 &&', '} 
                      {item.Author5 && item.Author5}{item.Author6 &&', '} 
                      {item.Author6 && item.Author6}{item.Author7 &&', '} 
                      {item.Author7 && item.Author7}{item.Author8 &&', '} 
                      {item.Author8 && item.Author8}{item.Author9 &&', '} 
                      {item.Author9 && item.Author9}{item.Author10 &&', '} 
                      {item.Author10 && item.Author10}{item.Author11 &&', '} 
                      {item.Author11 && item.Author11}{item.Author12 &&', '}
                      {item.Author12 && item.Author12}{item.Author13 &&', '} 
                      {item.Author13 && item.Author13}{item.Author14 &&', '} 
                      {item.Author14 && item.Author14}{item.Author15 &&', '} 
                      {item.Author15 && item.Author15}
                  </Text>
                </Text>

                    {/* <Text style={WelcomeStyle.contactExpandableDescriptionTextNameProgramGuide}>{item.Author1}</Text> */}



                    <View style={{height:5}}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                          <Image style={WelcomeStyle.timeStyle} source={images.timeSymbol}/>
                          <View style={{width:5}}/>
                          <Text style={WelcomeStyle.programGuideTimeStyle}>{timeLocalinFormat} Hrs {dateLocalinFormat}</Text>
                      </View>

                      <View style={{flexDirection:'row',alignItems:'center'}}>
                          
                          <Text style={[WelcomeStyle.programGuideTimeStyle,{color:colors.codeColor}]}>{item.Code}</Text>
                      </View>
                    
                      </View>
                    
                    
                    
                </View>
                <View style={WelcomeStyle.timeContainerProgramGuide}>
                  <TouchableOpacity style={WelcomeStyle.timeProgramGuide} 
                    onPress={ ()=>{ this.onPressFavourite(item,index)}}>
                    <Image source={(item.Favourite==1 || item.Favourite ==true)?images.favouriteActive:images.favouriteInactive} style={WelcomeStyle.favouriteStyle}/>
                  </TouchableOpacity>
                  {/* <View style={WelcomeStyle.timeProgramGuide}>
                      <Text style={WelcomeStyle.programGuideTimeStyle}>{moment(item.StartTime).format("HH:mm")}</Text>
                      <Text style={[WelcomeStyle.programGuideTimeStyle,{alignSelf:'center',}]}>to</Text>
                      <Text style={WelcomeStyle.programGuideTimeStyle}>{moment(item.EndTime).format("HH:mm")}</Text>
                  </View> */}
              </View>

                
            </View>
            <View style={WelcomeStyle.dividerStyle}>
            </View>
            
            
          </View>
        );
      } 
    

      render() {
        let { searchText } = this.state;

        
        return (
            
            <SearchLayout
            
            headerTintColor= {colors.headerBackground}
            
            onChangeQuery={this._handleQueryChange}
            onSubmit={this._executeSearch}>
            {/* {searchText ? (
              <RectButton
                style={{
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderBottomColor: '#eee',
                  paddingVertical: 20,
                  paddingHorizontal: 15,
                }}
                // onPress={() =>
                //   this.props.navigation.navigate('Result', {
                //     text: this.state.searchText,
                //   })
                >
                <Text style={{ fontSize: 14 }}>{searchText}!</Text>
              </RectButton>
            ) : null} */}
            <FlatList extraData={this.state} data={this.state.searchResults} renderItem={this.renderItem}/>
          </SearchLayout>
          
          
        );
      }
    }
    
    
    
    
    
    
    export default SearchScreen;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      });