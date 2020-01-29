/*
* Created by Reshma B 27/09/2019
**
*/


import { StyleSheet } from 'react-native';
import colors  from '../../Assets/Colors';
import fonts  from '../../Assets/Fonts';
export default StyleSheet.create({
 headerStyle:{
   //  textAlign:"center", 
    flex:1,
    backgroundColor:colors.transparent,
    flexDirection: 'row',
    justifyContent:'center'
   //  color: colors.headerColor,
   //  fontFamily: fonts.pristina
 },
 headertext:{
   
   color: colors.headerColor,
   fontFamily: fonts.pristina,
   fontSize: 21,
 },
 headertext2:{
   color: colors.headerColor,
   fontFamily: fonts.pristina,
   fontWeight:"normal",
   fontSize: 45,
 }

});