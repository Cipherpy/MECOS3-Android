
/*
* Created by Reshma B 28/10/2019
**
*/

'use strict';
import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image, TouchableOpacity, FlatList,ScrollView,ActivityIndicator } from 'react-native';
import WelcomeStyle from '../Containers/Styles/WelcomeStyle';
import images  from '../Assets/Images';
import PropTypes from 'prop-types'
import colors  from '../Assets/Colors';
import {welcomeScreenGridData,locationInfo,welcomeScreenLabels,organisorData,programGuideData,dayInfo,otherScreenlabels,typeSpeakers,staticNames} from '../Assets/StaticData';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import moment from 'moment';
import {CustomProgressBar,callAlert,favouriteCountStore} from '../Assets/CommonRoutines';
import AsyncStorage from '@react-native-community/async-storage';


var SQLite=require('react-native-sqlite-storage')

const headerName=otherScreenlabels.presentationScreenlabel    



class PresentationScreen extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
         
          presentationList:[],
          loading: true,
          day:'',
          presentationDetails:[],
          loading: false,
          countfavourites:0
         
        };
  
        
       
      

    }
      
    onPressSearch = () => {
      this.props.navigation.navigate({routeName: 'Search'})
  } 

    
    static navigationOptions = ({ navigation }) => {
      return {
        headerTitleStyle: WelcomeStyle.headerNormalText,
        
        headerTintColor: colors.headerBackground,
         
        title: headerName,
        headerRight: (<TouchableOpacity onPress={navigation.getParam('searchButtton')}
        style={{right: Platform.OS === 'ios' ? Dimensions.get("window").height < 667 ?  '10%' : '5%' : '25%', backgroundColor: 'transparent', paddingLeft: 15}}>
        <Image style={{width: 20, height: 20}} source={images.searchFav}/>
        </TouchableOpacity>),
      
     
      headerStyle:[WelcomeStyle.shadowStyle,
        {backgroundColor: colors.headerBackgroundNormal}]
      
  
      }}

      componentDidMount() {
        this.props.navigation.setParams({ searchButtton: this.onPressSearch });
      }

    /***
   * 
   * 
   * 
   * @param item, index
   * navigate to favourite list
   * 
   * 
   */
  


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
        //console.log("countFavourites",this.state.countfavourites+1)
      }
      if(item1.Favourite ==true){
        this.setState({countfavourites:this.state.countfavourites-1})
        //console.log("countFavourites",this.state.countfavourites-1)
      }
      //var key=this.props.navigation.state.params.data.key
      var topicNew=item1.Topic
      var dayNumber=item1.Day
    
      
        //console.log("this.state.day2List",this.state.day2List)
        const searchData = this.state.presentationList
        //console.log("day2data",`${day2data[index].Favourite}`)
        //console.log("day2datainverted",`${!day2data[index].Favourite}`)
        searchData[index].Favourite = !searchData[index].Favourite
        this.setState({presentationList:searchData})
        
        favourited=searchData[index].Favourite
        console.log('favourited',favourited)
        //console.log("day2data",day2data)
      
      
    //this.setState({loading:true})
      var db1 = SQLite.openDatabase({name : "programGuide.db", createFromLocation : "~programGuide.db",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});
    
                                    
        db1.transaction(function(transaction) {
          
          transaction.executeSql('UPDATE programData SET Favourite=? WHERE Topic=?;',[favourited,topicNew],
          );
        
          
        });
      
       // this.setState({loading:false})
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
      console.log("data item",item)
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

                    
                  <Text style={[WelcomeStyle.contactExpandableDescriptionTextNameProgramGuide,,{color:colors.author1color}]}>
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
                    onPress={ ()=>{ this.onPressFavourite(item,index)}}
                    >
                    <Image source={(item.Favourite==1 || item.Favourite ==true)?images.favouriteActive:images.favouriteInactive} style={WelcomeStyle.favouriteStyle}/>
                  </TouchableOpacity>
                  
              </View>

                
            </View>
            <View style={WelcomeStyle.dividerStyle}>
            </View>
            
            
          </View>
      );
    } 
    componentWillMount() {

      this.setState({
        presentationList:this.props.navigation.state.params.presentationList,
        day:this.props.navigation.state.params.day
      })
      this.setState({loading:false})
      console.log("this.props.navigation.state.params.presentationList",this.props.navigation.state.params.presentationList)


      AsyncStorage.getItem(staticNames.favouriteCountKey).then((value) => {
          
        console.log("favourite count",value)
        this.setState({countfavourites:parseInt(value), 
      })
    
    })
    }
    componentWillUnmount(){
      console.log('countFavourites',this.state.countfavourites)
      favouriteCountStore(this.state.countfavourites)
    }

      render() {
        
        return (
          <View style={WelcomeStyle.contactContainer}>
            
              <ScrollView>
                  {/* 
                  *****************
                  ****************** first day no expansion needed
                  *******************
                  */}
                    <View style={WelcomeStyle.speakerScreenBannerStyle}>
                        <Text style={WelcomeStyle.bannerTextStyle}>{this.state.day}</Text>
                        

                    </View>
                    <FlatList extraData={this.state} data={this.state.presentationList} renderItem={this.renderItem}/>
                    
                </ScrollView>
               
              
          </View>
        );
      }
    }
    
    
    
    
    
    
    export default PresentationScreen;