/*
* Created by Reshma B 28/09/2019
**
*/

import { StyleSheet,Dimensions } from 'react-native';
import colors  from '../../Assets/Colors';
import fonts  from '../../Assets/Fonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default StyleSheet.create({
 headerWelcomeStyle:{
   //  textAlign:"center", 
    flex:1,
    backgroundColor:colors.transparent,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    //justifyContent:'center',
    
   //  color: colors.headerColor,
   //  fontFamily: fonts.pristina
 },
 shadowStyle:{
  
  
  borderColor: '#ddd',
  borderBottomWidth: 1,
  shadowColor: colors.headerShadowColor,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 5,
  shadowOpacity: 7.0,
  elevation: 1,
 },
 headerWelcomeText:{
   
   color: colors.headerColor,
   fontFamily: fonts.poorich,
   fontSize: 30,
   fontWeight:'normal'
 },
 headerWelcomeText2:{
   color: colors.headerColor,
   fontFamily: fonts.poorich,
   fontWeight:"normal",
   fontSize: 45,
 },
 headerNormalText:{
  flexGrow: 1,
  textAlign: 'center',
  color: colors.headerBackground,
  fontFamily: fonts.arialce,
  fontSize: 24,
  fontWeight:'100',
  textShadowColor: 'rgba(0, 0, 0, 0.2)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
},

 welcomeContainer: {
  flex: 1,
  margin:6,
  paddingLeft:2.5,
  backgroundColor:colors.white,
  
  
},
gridItem:{
  flex: 1,
  alignItems:'center',
  justifyContent:'center',
  margin:4,
  //height:Dimensions.get('window').width/1.93
 // height:Dimensions.get('window').width/2.6
 height:Dimensions.get('window').height/4.6
},
gridItemText:{
  color: colors.homeScreenText,
  alignItems:'center',
  justifyContent:'center',
  fontFamily: fonts.segoeui,
  fontSize: 15
},
imageStyle:{
  width: 60, 
  height: 60
},
 imageStyleFavourites:{
  width: 100, 
  height: 60
},
contactContainer: {
  flex: 1,
  
  backgroundColor:colors.white,
  
},
contactBannerStyle:{
  //flex: 1,
  padding:15,
  justifyContent:'center',
  height: 50,
  backgroundColor:colors.bannerBackgroundColor,
  //flexDirection:'row',
  //justifyContent:'flex-end'
},
bannerTextStyle:{
  
  color: colors.headerBackground,
  fontFamily: fonts.arialce,
  fontSize: 14,
  fontWeight:'bold'
},
contactConenorStyle:{
  //flex: 1,
  padding:15,
  justifyContent:'center',
  
  backgroundColor:colors.transparent,
},
contactViewStyle:{
  flex:1,
  flexDirection:'row'
},
covenorTextStyle:{
  
  color: colors.headerBackground,
  fontFamily: fonts.segoeui,
  //fontSize: 18,
  fontWeight:'normal'
},

expandableListContainer:{
  flex:1,
  flexDirection:'column',
  
},
imageArrow:{
  width:10,
  height:10
},
contactExpandableDescriptionTextName:{
  color: colors.headerBackground,
  fontFamily: fonts.segoeui,
  fontSize: 14,
  fontWeight:'bold',
  flex:1,
  
},
contactExpandableDescriptionText:{
  color: colors.headerBackground,
  fontFamily: fonts.segoeui,
  fontSize: 14,
  fontWeight:'normal',
  //flex:1,
  
},
presentationStyle:{
  color: colors.presentationColor,
  fontFamily: fonts.segoeui,
  fontSize: 14,
  fontWeight:'normal',
},
expandableViewContainer:{
  paddingTop:15,
  paddingLeft:15,
  paddingRight:15,
  //justifyContent:'center',
  flexDirection:'row',
  backgroundColor:colors.transparent,
  // justifyContent:'center',
  // alignItems:'center',
},
profilePictureContainer:{
  width:50,
  height:50,
  alignItems:'center',
  justifyContent:'center',
},
profilePicture:{
  width:50,
  height:50
},
profileContainer:{
  
  height:50,
  paddingTop:5,
  paddingTop:5,
  paddingLeft:15
},
iconStyle:{
  width:15,
  height:15,
},
iconStyleProgramGuide:{
  width:30,
  height:30,
},
timeStyle:{
  width:12,
  height:12,
},


phoneContainer:{
  padding:15,
  alignItems:'center',
  justifyContent:'center',
  
},
dividerStyle:{
  height:1,
  backgroundColor:colors.bannerBackgroundColor,
  marginTop:15,
  marginLeft:15,
  marginRight:15,
},
addressContainer:{
  
  paddingTop:5,
  paddingTop:5,
  paddingLeft:5
},
exhibitionImage: {
  
  width: '100%',
  height:'100%',
  resizeMode:'contain',
  
},
backArrowStyle:{
  width:15,
  height:15

},
profileContainerProgramGuide:{
  width:'75%',
  //height:50,
  paddingTop:5,
  paddingTop:5,
  paddingLeft:15
},
searchContainer:{
  width:'90%',
  //height:50,
  paddingTop:5,
  paddingTop:5,
  paddingLeft:15
},

profilePictureContainerProgramGuide:{
  
  alignItems:'center',
  justifyContent:'center'
},
contactExpandableDescriptionTextNameProgramGuide:{
  color: colors.headerBackground,
  fontFamily: fonts.segoeui,
  fontSize: 14,
  //fontWeight:'bold',
  fontStyle: 'italic'
  //flex:1,
  
},
programGuideTimeStyle:{
  color: colors.headerBackground,
  fontFamily: fonts.segoeui,
  fontSize: 11,
  fontWeight:'normal',
  //backgroundColor:Colors.black
  
},
profileContainerStaticData:{
  //alignItems:'center',
  justifyContent:'center',
  paddingLeft:15,
  width:'75%',
  //backgroundColor:Colors.black
  
},
timeContainerProgramGuide:{
  //width:'75%',
  //height:50,
  flex:1,
  //paddingTop:5,
  //paddingTop:10,
  alignItems:'flex-end',
  //justifyContent: 'center',
  //backgroundColor:Colors.black
  //paddingLeft:15
},
programGuideBannerStyle:{
  //flex: 1,
  //padding:15,
  justifyContent:'center',
  height: 50,
  backgroundColor:colors.programGuideBannerColor,
  //flexDirection:'row',
  //justifyContent:'flex-end'
},
timeContainerProgramGuideMain:{
  //width:'75%',
  //height:50,
  flex:1,
  //paddingTop:5,
  //paddingTop:10,
  alignItems:'flex-end',
  justifyContent: 'center',
  
  //paddingLeft:15
},
profileContainerSpeakerScreen:{
  width:'95%',
  //height:50,
  paddingTop:5,
  paddingTop:5,
  paddingLeft:15
},
speakerScreenBannerStyle:{
  //flex: 1,
  padding:15,
  justifyContent:'center',
  height: 50,
  backgroundColor:colors.programGuideBannerColor,
  //flexDirection:'row',
  //justifyContent:'flex-end'

},
speakerScreenDividerStyle:{
  height:1,
  backgroundColor:colors.homeGrid3Color,
  marginTop:15,
  marginLeft:15,
  marginRight:15,
},
speakerScreenDesignationStyle:{
  color: colors.headerBackground,
  fontFamily: fonts.arialce,
  fontSize: 13,
  fontWeight:'normal',
  flex:1,
  
},
expandableViewContainerSpeakerScreen:{
  paddingTop:15,
  paddingLeft:15,
  paddingRight:15,
  //justifyContent:'center',
  alignItems:'center',
  flexDirection:'row',
  backgroundColor:colors.transparent,
},

speakerScreenTopic:{
  color: colors.headerBackground,
  fontFamily: fonts.arialce,
  fontSize: 14,
  //fontWeight:'bold',
  fontStyle: 'italic'
  //flex:1,
  
},
timeProgramGuide:{
  alignItems:'center',
  justifyContent:'center'
},
timeTextAbstract:{
  color: colors.headerBackground,
  fontFamily: fonts.arialce,
  fontSize: 14,
  fontStyle: 'italic',
  fontWeight:'normal',
  
  
},
dateTextAbstract:{
  color: colors.headerBackground,
  fontFamily: fonts.arialce,
  fontSize: 14,
  fontWeight:'normal',
  
  
},
abstractStyle:{
  color: colors.headerBackground,
  fontFamily: fonts.georgia,
  fontSize: 20,
  fontWeight:'normal', 
},
abstractNameStyle:{
  color: colors.headerBackground,
  fontFamily: fonts.arialce,
  fontSize: 14,
  fontWeight:'bold',
},
abstractAffliation:{
  color: colors.headerBackground,
  fontFamily: fonts.arialce,
  fontSize: 12,
  //fontWeight:'bold',
  fontStyle: 'italic'
  //flex:1,
  
},
abstractContentStyle:{
  color: colors.black,
  fontFamily: fonts.arialce,
  fontSize: 20,
  fontWeight:'normal',
  paddingBottom:10
},
moreButtonAbstract:{
    alignItems:'center',
    justifyContent:'center',
    width:60,
    height:50,
    backgroundColor:colors.white,
    borderRadius:10,
    borderWidth: 1,
    borderColor: colors.bannerBackgroundColor
},
abstractContainer: {
  flex: 1,
  
  backgroundColor:colors.bannerBackgroundColor,
  
},
searchButtonStyle:{
  width: 20, 
  height: 20
},
bookMarkStyle:{
  width: 50, 
  height: 50,
  
},
TextInputStyle:{
  flex:1,
  fontSize:16
  
  
},
searchSection: {
   
  margin:10,
  
  paddingLeft:25,
  paddingRight:25,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: colors.bannerBackgroundColor,
  borderWidth: 1,
  
 
  
},
searchResultsContainer:{
  padding:15,
  marginLeft:10,
  marginRight:10,
  marginBottom:5,
  
  //justifyContent:'center',
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between',
  backgroundColor:colors.white,
  
},
contactExpandableDescriptionValedatory:{
  color: colors.headerBackground,
  fontFamily: fonts.segoeui,
  fontSize: 14,
  fontWeight:'normal',
  //flex:1,
  
  
  
},
phoneContainerGuide:{
  padding:9,
  width:200,
  alignItems:'center',
  justifyContent:'center',
},
expandableViewContainerValedatory:{
  padding:15,
  //justifyContent:'center',
  flexDirection:'row',
  backgroundColor:colors.transparent,
  // justifyContent:'center',
  // alignItems:'center',
},
exhibitionContainer: {
  flex: 1,
  alignItems:  'center',
  justifyContent:'center',
  
},
presDetailScroll:{
  marginTop:10,
  marginLeft:10,
  marginRight:10,
  padding:10,
  backgroundColor:colors.white
},
oldNotificationStyle:{
  padding:15,
  marginLeft:10,
  marginRight:10,
  marginBottom:5,
  
  //justifyContent:'center',
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between',
  backgroundColor:colors.white
},
notificationContainer:{
  width:'100%',
  //height:50,
  paddingTop:5,
  paddingTop:5,
  paddingLeft:15
},
notificationView:{
  flex:1,
  paddingTop:5,
  backgroundColor:colors.bannerBackgroundColor
},
notificationText1:{
  color: colors.textColor1,
  fontFamily: fonts.segoeui,
  fontSize: 14,
  fontWeight:'bold',
  flex:1,
  
},
notificationText2:{
  color: colors.textColor2,
  fontFamily: fonts.segoeui,
  fontSize: 13,
  fontWeight:'bold',
  flex:1,
  
},
notificationText1Inactive:{
  color: colors.notificationInactive,
  fontFamily: fonts.segoeui,
  fontSize: 14,
  fontWeight:'bold',
  flex:1,
  
},
notificationText2Inactive:{
  color: colors.notificationInactive,
  fontFamily: fonts.segoeui,
  fontSize: 13,
  //fontWeight:'bold',
  flex:1,
  
},
notificationDateInactive:{
  color: colors.notificationInactive,
  fontFamily: fonts.arialce,
  fontSize: 12,
  //fontWeight:'bold',
  fontStyle: 'italic'
  //flex:1,
  
},
favouriteStyle:{
  width: 25, 
  height: 25,
  
},
dynamicBannerStyle:{
  flex:1,
  height:250,
  backgroundColor:colors.headerBackground
},
dynamicBannerInnerContainerStyle:{
  backgroundColor:colors.transparent,
  alignItems:'center',
  justifyContent:'center'
},
dynamicBannerTexthead:{
  color: colors.white,
  fontFamily: fonts.segoeui,
  fontSize: 22,
  //fontWeight:'bold',
  fontWeight:'bold',
},
dynamicBannerText:{
  color: colors.white,
  fontFamily: fonts.segoeui,
  fontSize: 14,
  //fontWeight:'bold',
  fontWeight:'normal',
},
bannerStylePlenary:{
  //flex: 1,
  padding:15,
  justifyContent:'center',
  
  //width:400,
  backgroundColor:colors.bannerBackgroundColor,
  //flexDirection:'row',
  //justifyContent:'flex-end'
  },
  exhibitionImageStyle:{
    width:450,
    height:800
    //height: '90%',
    //alignSelf: 'flex-start',
   
  },
  imageExhibitionContainer:{
    //flex: 1, 
    overflow:'hidden',
    justifyContent: 'center'
    // alignItems: 'stretch',
  },
  wordContainer:{
    width:'50%',
    padding:10,
    flexDirection: 'column',
    // borderColor:'blue',
    //  borderWidth:2  


    },
    exhibitionText:{
      width:'90%',
      fontSize:12,
    }



});