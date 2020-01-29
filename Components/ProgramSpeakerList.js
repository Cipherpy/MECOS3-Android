/*
* Created by Reshma B 20/10/2019
**
*/

import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image, TouchableOpacity, FlatList,
Modal,ActivityIndicator } from 'react-native';
import WelcomeStyle from '../Containers/Styles/WelcomeStyle';
import images  from '../Assets/Images';
import PropTypes from 'prop-types'

import {programDataEvents,typeSpeakers} from '../Assets/StaticData';
import moment from 'moment';
var SQLite=require('react-native-sqlite-storage')

import RNFetchBlob from 'react-native-fetch-blob'
import colors from '../Assets/Colors';
import {CustomProgressBar,} from '../Assets/CommonRoutines';
const propTypes={
    item:PropTypes.object
};
class ProgramSpeakerList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         isSelected:false,
         topic:'',
         presentationList:[],
         itemLogo:null,
         isProgress:false
    }

}
openProgressbar = () => {
    this.setState({ isProgress: true })
  }
onPress = (topic) => {
    this.setState((prevState,prevProps) =>({
        topic:topic,
        isSelected:!prevState.isSelected,
        
    }));
}




/***
   * 
   * 
   * 
   * @param item, index
   * navigate to presenations list
   * 
   * 
   */
    presenationNavigate = (data) => {
        this.setState({isProgress:true})
        
        var db1 = SQLite.openDatabase({name : "programGuide.db", createFromLocation : "~programGuide.db",location: 'Library'},(open) => {console.log("opened")}, (e) => {console.log("error")});
        
       
        db1.transaction((tx1) => {
          
            tx1.executeSql('SELECT * FROM programData WHERE (PresentationType=? OR PresentationType=?) AND Theme=? AND Day=?', [typeSpeakers.Oral,typeSpeakers.Poster,this.state.topic,this.props.day], (tx1, results1) => {
          
              const rows = results1.rows;
            
              
  
              var len = results1.rows.length;
              var presentationList=[]
            for (let i = 0; i < len; i++) {
  
                  let row = results1.rows.item(i);
                  
                  var joined = this.state.presentationList.concat(row);
                 
                  presentationList.concat(row)
                  this.setState({ presentationList: joined })
                       
              }
              this.setState({isProgress:false})
              
            this.props.navigation.navigate('Presentations',{presentationList: this.state.presentationList,day:this.props.day})
            this.setState({ presentationList: [] })
          });
          
        });
  
      
       
    }
/***
   * 
   * 
   * 
   * @param item, index
   * flatlist each item
   * 
   * 
   */
  renderItemCochair = (item) => {
    
  return(
    <View>
      <View style={WelcomeStyle.expandableViewContainer}>
     
          <View style={WelcomeStyle.profilePictureContainer}>
              <Image source={images.cochair } style={WelcomeStyle.iconStyleProgramGuide}/>
          </View>
          <View style={WelcomeStyle.profileContainerProgramGuide}>
              <Text style={[WelcomeStyle.contactExpandableDescriptionTextNameProgramGuide]}>{item.event}</Text>
              <View style={{height:5}}></View>
              <Text style={[WelcomeStyle.contactExpandableDescriptionTextName]}>{item.coChair1}</Text>
              <Text style={[WelcomeStyle.contactExpandableDescriptionTextName]}>{item.coChair2}</Text>
              <Text style={[WelcomeStyle.contactExpandableDescriptionTextName]}>{item.coChair3}</Text>
              <Text style={[WelcomeStyle.contactExpandableDescriptionTextName]}>{item.coChair4}</Text>
              <Text style={[WelcomeStyle.contactExpandableDescriptionTextName]}>{item.coChair5}</Text>

          </View>
         
      </View>
      <View style={WelcomeStyle.dividerStyle}>
      </View>
      
      
      </View>
  );
}  
   
/***
   * 
   * 
   * 
   * @param item, index
   * flatlist each item
   * 
   * 
   */
  renderItemEvents = ({item, index}) => {
    disabled=true
    if(item.event==programDataEvents.presentations){
        itemLogo=images.presentations
        disabled=false
        
    }
    else if(item.event==programDataEvents.teaBreak){
        itemLogo=images.coffee
    }
    else if(item.event==programDataEvents.Discussion){
        itemLogo=images.discussion
    }
    else if(item.event==programDataEvents.lunchBreak){
        itemLogo=images.lunch
    }
    else if(item.event==programDataEvents.dinner){
        itemLogo=images.dinner
    }
    else if(item.event==programDataEvents.windingupbyChair){
        itemLogo=images.windingUp
    }
    else if(item.event==programDataEvents.Cocktails){
        itemLogo=images.cocktail
    }
    
    else{
        itemLogo=images.award
    }
      
    
    
    
    return(
      <TouchableOpacity onPress={this.presenationNavigate.bind(this,item)} disabled={disabled}>
        <View style={WelcomeStyle.expandableViewContainerSpeakerScreen}>
       
            <View style={WelcomeStyle.profilePictureContainer}>
                <Image source={itemLogo} style={WelcomeStyle.iconStyleProgramGuide}/>
            </View>
            {(item.event==programDataEvents.Discussion||item.event==programDataEvents.dinner ||item.event==programDataEvents.Cocktails)?
            <View style={WelcomeStyle.profileContainerStaticData}>
                <Text numberOfLines={2} style={WelcomeStyle.contactExpandableDescriptionValedatory}>{item.event}</Text>
            </View>:
            <View style={WelcomeStyle.profileContainerStaticData}>
                <Text style={(item.event==programDataEvents.presentations)?WelcomeStyle.presentationStyle:WelcomeStyle.contactExpandableDescriptionText}>{item.event}</Text>
            </View>
            }
            <View style={WelcomeStyle.timeContainerProgramGuide}>
            {(item.event==programDataEvents.presentations)?<View style={WelcomeStyle.timeProgramGuide}>
                    <Text style={[WelcomeStyle.programGuideTimeStyle,{color:colors.presentationColor}]}>{item.startTime}</Text>
                    <Text style={[WelcomeStyle.programGuideTimeStyle,{alignSelf:'center',color:colors.presentationColor}]}>to</Text>
                    <Text style={[WelcomeStyle.programGuideTimeStyle,{color:colors.presentationColor}]}>{item.endTime}</Text>
                </View>:<View style={WelcomeStyle.timeProgramGuide}>
                    <Text style={WelcomeStyle.programGuideTimeStyle}>{item.startTime}</Text>
                    <Text style={[WelcomeStyle.programGuideTimeStyle,{alignSelf:'center',}]}>to</Text>
                    <Text style={WelcomeStyle.programGuideTimeStyle}>{item.endTime}</Text>
                </View>}
            </View>
        </View>
        <View style={WelcomeStyle.dividerStyle}>
        </View>
        
        
      </TouchableOpacity>
    );
  } 
  renderItem = ({item, index}) => {
      var data=item.StartTime
    var newTime = moment(data).format("hh:mm") // 24 hour format
    
    var base64Icon = 'data:image/png;base64,'+item.ProfilePic
    return(
      <View>
        <View style={WelcomeStyle.expandableViewContainerSpeakerScreen}>
            <View style={WelcomeStyle.profilePictureContainer}>
                {item.ProfilePic?<Image source={{uri:base64Icon}} style={WelcomeStyle.profilePicture} />:
                  <Image source={images.profilePicture} style={WelcomeStyle.profilePicture}/>}
                
            </View>
            <View style={WelcomeStyle.profileContainerProgramGuide}>
                <Text style={[WelcomeStyle.contactExpandableDescriptionTextNameProgramGuide]}>{item.Topic}</Text>
                <Text style={[WelcomeStyle.contactExpandableDescriptionTextName]}>{item.Author1}</Text>
            </View>
            <View style={WelcomeStyle.timeContainerProgramGuide}>
                <View style={WelcomeStyle.timeProgramGuide}>
                    <Text style={WelcomeStyle.programGuideTimeStyle}>{moment(item.StartTime).format("HH:mm")}</Text>
                    <Text style={[WelcomeStyle.programGuideTimeStyle,{alignSelf:'center',}]}>to</Text>
                    <Text style={WelcomeStyle.programGuideTimeStyle}>{moment(item.EndTime).format("HH:mm")}</Text>
                </View>
            </View>
        </View>
        <View style={WelcomeStyle.dividerStyle}>
        </View>
        
        
      </View>
    );
  } 
  renderItemPlenary= (item) => {
    var data=item.StartTime
  var newTime = moment(data).format("hh:mm") // 24 hour format
  console.log("data item",item)
  var base64Icon = 'data:image/png;base64,'+item.ProfilePic
  return(
    <View>
      <View style={WelcomeStyle.expandableViewContainerSpeakerScreen}>
          <View style={WelcomeStyle.profilePictureContainer}>
              {item.ProfilePic?<Image source={{uri:base64Icon}} style={WelcomeStyle.profilePicture} />:
                <Image source={images.profilePicture} style={WelcomeStyle.profilePicture}/>}
              
          </View>
          <View style={WelcomeStyle.profileContainerProgramGuide}>
              <Text style={[WelcomeStyle.contactExpandableDescriptionTextNameProgramGuide]}>{item.Topic}</Text>
              <View style={{height:5}}></View>
              <Text style={[WelcomeStyle.contactExpandableDescriptionTextName]}>{item.Author1}</Text>
          </View>
          <View style={WelcomeStyle.timeContainerProgramGuide}>
              <View style={WelcomeStyle.timeProgramGuide}>
                  <Text style={WelcomeStyle.programGuideTimeStyle}>{moment(item.StartTime).format("HH:mm")}</Text>
                  <Text style={[WelcomeStyle.programGuideTimeStyle,{alignSelf:'center',}]}>to</Text>
                  <Text style={WelcomeStyle.programGuideTimeStyle}>{moment(item.EndTime).format("HH:mm")}</Text>
              </View>
          </View>
      </View>
      <View style={WelcomeStyle.dividerStyle}>
      </View>
      
      
    </View>
  );
} 
  fetchImage(imageUrl){
    var imageData="data:image/png;base64," + imageUrl
    
    return(
      <Image source={{uri: imageData, scale: 1}} style={WelcomeStyle.profilePicture}/>
    )
}
    render(){
        
        
        return(
            <View style={WelcomeStyle.expandableListContainer}>
                {this.state.isProgress &&
        <CustomProgressBar />}
                <TouchableWithoutFeedback onPress={this.onPress.bind(this,this.props.data.topic)}>
                {(this.props.data.topic==programDataEvents.Plenary)? 
                <View style={[WelcomeStyle.bannerStylePlenary,
                {flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
                    
                    <Text numberOfLines={2} style={[WelcomeStyle.bannerTextStyle,{width:300}]}>{this.props.data.topic}</Text>
                        
                        
                        {this.state.isSelected?<Image source={images.upArrow}style={WelcomeStyle.imageArrow}/>
                            :<Image source={images.downArrow}style={WelcomeStyle.imageArrow}/>}
                    </View>:
                     <View style={[WelcomeStyle.bannerStylePlenary,{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
                    
                     
                     <Text style={[WelcomeStyle.bannerTextStyle,{width:300}]}>{this.props.data.topic}</Text>
                     
                     {this.state.isSelected?<Image source={images.upArrow}style={WelcomeStyle.imageArrow}/>
                         :<Image source={images.downArrow}style={WelcomeStyle.imageArrow}/>}
                 </View>}
                </TouchableWithoutFeedback>
                

                {this.state.isSelected ?(this.props.data.topic==programDataEvents.Plenary)? <View>
                 {this.renderItemPlenary(this.props.item)}

                {this.renderItemCochair(this.props.data.events)}
                </View>:<View>
                <FlatList data={this.props.item} renderItem={this.renderItem}/>
                <FlatList data={this.props.data.events} renderItem={this.renderItemEvents}/>
                </View>:null}

              {(this.state.isSelected && this.props.item2)&& <View>
                <FlatList data={this.props.item2} renderItem={this.renderItem}/>
                <FlatList data={this.props.data2.events} renderItem={this.renderItemEvents}/></View>}
                     
            </View>
        )   
    }

    }
    

    ProgramSpeakerList.propTypes=propTypes

export default ProgramSpeakerList;  