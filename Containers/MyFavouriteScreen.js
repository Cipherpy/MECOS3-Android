/*
* Created by Reshma B 31/10/2019
**
*/
'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Dimensions, Image, TouchableOpacity, Linking, ScrollView,TouchableWithoutFeedback,
    TextInput

} from 'react-native';
import colors  from '../Assets/Colors';
import images  from '../Assets/Images';

import HeaderTitle from '../Components/HeaderTitle';
//import SplashScreen from './SplashScreen';
import SplashScreen from 'react-native-splash-screen'
import WelcomeStyle from './Styles/WelcomeStyle';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {welcomeScreenGridData,locationInfo,welcomeScreenLabels,organisorData,programGuideData,dayInfo,typeSpeakers,otherScreenlabels} from '../Assets/StaticData';
import ProgramSpeakerList from '../Components/ProgramSpeakerList'
var SQLite=require('react-native-sqlite-storage')
import SearchLayout from 'react-navigation-addon-search-layout';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
var db = SQLite.openDatabase({name : "programGuide.db", createFromLocation : "~programGuide.db",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});
const headerName=otherScreenlabels.myFavourites
import {favouriteCountStore,CustomProgressBar} from '../Assets/CommonRoutines';
import moment from 'moment';
console.log("topic",programGuideData[1].topics[0])

class MyFavouriteScreen extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            searchText: null,
            searchResults:[],
            searchIcon:images.searchFav,
            onEditing:false,
            loading:true,
            favLength:0,
            queryLength:null

         
       
         
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
    favouriteList(){
        var db1 = SQLite.openDatabase({name : "programGuide.db", createFromLocation : "~programGuide.db",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});
        db1.transaction((tx1) => {
        
          tx1.executeSql('SELECT * FROM programData WHERE Favourite=?', [1], (tx1, results1) => {
        
            const rows = results1.rows.raw();
          
            console.log("Query completednew",rows)
  
            var len = results1.rows.length;
           
          
            this.setState({  favLength:len,loading:false,searchResults: rows})
          
        });
        
      });
    }
    componentWillMount() {

        
        this.favouriteList()
        
      }
    
      
    
      _handleQueryChange = searchText => {
        this.setState({ searchText,searchIcon:images.closeIcon, onEditing:true });

        
        
       
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM programData WHERE Favourite=? AND (Author1 LIKE '%" + searchText + 
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
            "%' OR KeyWrd6 LIKE '%" + searchText + "%')", [1], (tx, results) => {
              const rows = results.rows.raw();
              console.log("Query completed",rows);
              var len = results.rows.length;
              if(searchText ==''){
                this.setState({queryLength:null})
              }
              else{
                this.setState({
                  queryLength:len
                })
              }
              this.setState({searchResults: rows })
            });
          });
      };
      
      _executeSearch = () => {
       
      };
      /***
   * 
   * 
   * 
   * @param item, index
   * navigate to presenations list
   * 
   * 
   */
  presentationIndividualNavigate = (data) => {
    
  
    if(data.PresentationType ==typeSpeakers.Oral){
      this.props.navigation.navigate('PresentationDetailed',{topic: data.Topic}) 
    }
    else if(data.PresentationType ==typeSpeakers.Talk){
      this.props.navigation.navigate('LeadSpeaker')
    }

    
   
}

renderItem = ({item, index}) => {
  console.log("data item",item)
  //console.log("data item",item)
  var dateLocalinFormat=moment(item.StartTime).format('MMMM D, YYYY')
  var timeLocalinFormat=moment(item.StartTime).format('HH:mm')
  return(
    <View>
      <View style={WelcomeStyle.expandableViewContainerSpeakerScreen}>
          
          <View style={WelcomeStyle.searchContainer}>
              <Text style={[WelcomeStyle.contactExpandableDescriptionTextName]}>{item.Topic}</Text>
              <View style={{height:5}}></View>
              {/* <Text style={WelcomeStyle.abstractAffliation}>{item.Author1}</Text> */}

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

          <TouchableOpacity onPress={() => this.removeFromFavourites(item)}>
                  <Image style={WelcomeStyle.searchButtonStyle} source={images.closeIcon}/>
          </TouchableOpacity>
          
      </View>
      
      
      
      
    </View>
  );
} 
      doClear() {
        console.log("doClear...");
        this.textInput.clear()
        this.setState({searchIcon:images.searchFav,onEditing:false,queryLength:null})
        this.favouriteList()
      }
      removeFromFavourites=(data)=>{
          console.log("data",data)
          console.log("this.state.searchResults",this.state.searchResults)
          var db1 = SQLite.openDatabase({name : "programGuide.db", createFromLocation : "~programGuide.db",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});
     
      
     
      var favourited=!data.Favourite
      var topicNew=data.Topic
        db1.transaction(function(transaction) {
          
          transaction.executeSql('UPDATE programData SET Favourite=? WHERE Topic=?;',[favourited,topicNew],
          );
         
       
        });
        const filteredData = this.state.searchResults.filter(item => item.key !== data.key);
        this.setState({ searchResults: filteredData,favLength:filteredData?filteredData.length:0});
      }
    
componentWillUnmount(){
  favouriteCountStore(this.state.searchResults.length)
}

messageDisplay=()=>{
  if(this.state.favLength ==0 && (this.state.queryLength ==0 || this.state.queryLength ==null) ){
    return(
      <View style={{justifyContent:'center',alignItems:'center',paddingTop:20}}>
        <Text style={[WelcomeStyle.presentationStyle,{color:colors.author1color}]}>No favourites available</Text>
      </View>
    )
  }
  else if(this.state.favLength !=0 && this.state.queryLength ==0 ){
    return(
      <View style={{justifyContent:'center',alignItems:'center',paddingTop:20}}>
        <Text style={[WelcomeStyle.presentationStyle,{color:colors.author1color}]}>No results</Text>
      </View>
    )
  }
}
      render() {
        let { searchText } = this.state;

        
        return (
            
            <View style={{flex:1}}>
              {this.state.loading?<CustomProgressBar/>:<View style={{flex:1}}>
                {/* <View style={{height:10}}></View> */}
                <View style={WelcomeStyle.searchSection}>
                    
                    <TextInput
                        ref={input => { this.textInput = input }}
                        style={WelcomeStyle.TextInputStyle}
                        onChangeText={text => this._handleQueryChange(text)}
                        placeholder="Search your favourites"
                        underlineColorAndroid="transparent"
                        clearButtonMode="always"
                    />
                    <TouchableOpacity disabled={!this.state.onEditing} onPress={() => this.doClear()}>
                        <Image style={WelcomeStyle.searchButtonStyle} source={this.state.searchIcon}/>
                    </TouchableOpacity>
                </View>
                {this.messageDisplay()}

                <FlatList data={this.state.searchResults} renderItem={this.renderItem}/>
                <View style={{height:20}}/>
                </View>}
            </View>
          
          
        );
      }
    }
    
    
    
    
    
    
    export default MyFavouriteScreen;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
      });