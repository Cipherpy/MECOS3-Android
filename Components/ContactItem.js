import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import WelcomeStyle from '../Containers/Styles/WelcomeStyle';
import images  from '../Assets/Images';
import PropTypes from 'prop-types'

import {welcomeScreenGridData,locationInfo,welcomeScreenLabels,contactData,contactSectionNames} from '../Assets/StaticData';
import {callWebsiteLink} from '../Assets/CommonRoutines';
const propTypes={
    item:PropTypes.object
};
class ContactItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         isSelected:false
    }

}
onPress = () => {
    this.setState((prevState,prevProps) =>({
        isSelected:!prevState.isSelected
    }));
}
renderDetails=() => {
    
    return(
        
        <View style={WelcomeStyle.subsectionStyle}>
            {this.props.item.section==contactSectionNames.EventManager? 
                <View style={WelcomeStyle.expandableViewContainer}>
                    <View style={WelcomeStyle.addressContainer}>
                        <Text style={WelcomeStyle.contactExpandableDescriptionTextName}>{this.props.item.address}</Text>
                        <Text style={WelcomeStyle.contactExpandableDescriptionText}>{this.props.item.address1}</Text>
                        <Text style={WelcomeStyle.contactExpandableDescriptionText}>{this.props.item.address2}</Text>
                        <Text style={WelcomeStyle.contactExpandableDescriptionText}>{this.props.item.address3}</Text>
                    </View>
                </View>:null}
            <View style={WelcomeStyle.expandableViewContainer}>
                <View style={WelcomeStyle.profilePictureContainer}>
                    <Image source={(this.props.item.photo)?this.props.item.photo:images.profilePicture} style={WelcomeStyle.profilePicture}/>
                </View>
                <View style={WelcomeStyle.profileContainer}>
                    <Text style={WelcomeStyle.contactExpandableDescriptionTextName}>{this.props.item.name}</Text>
                    <Text style={WelcomeStyle.contactExpandableDescriptionText}>{this.props.item.designation}</Text>
                </View>
            </View>
            <View style={WelcomeStyle.dividerStyle}>
            </View>
            <View style={WelcomeStyle.expandableViewContainer}>
                <View style={WelcomeStyle.profilePictureContainer}>
                    <Image source={images.phone} style={WelcomeStyle.iconStyle}/>
                </View>
                <TouchableOpacity style={WelcomeStyle.phoneContainer} onPress={()=>{callWebsiteLink(`tel:+91${this.props.item.phone}`)}}>
                    <Text style={WelcomeStyle.contactExpandableDescriptionText}>+91 {this.props.item.phone}</Text>
                </TouchableOpacity>
            </View>
            <View style={WelcomeStyle.dividerStyle}>
            </View>
            <View style={WelcomeStyle.expandableViewContainer}>
                <View style={WelcomeStyle.profilePictureContainer}>
                    <Image source={images.email} style={WelcomeStyle.iconStyle}/>
                </View>
                <TouchableOpacity style={WelcomeStyle.phoneContainer} onPress={()=>{callWebsiteLink(`mailto:${this.props.item.email}`)}}>
                    <Text style={WelcomeStyle.contactExpandableDescriptionText}>{this.props.item.email}</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:15}}>
            </View>

        </View>
        
    )
}
    render(){
        
        return(
            <View style={WelcomeStyle.expandableListContainer}>
                <TouchableWithoutFeedback onPress={this.onPress}>
                    <View style={[WelcomeStyle.contactBannerStyle,{flexDirection:'row',justifyContent:'flex-end',marginTop:5,marginBottom:5}]}>
                        <Text style={[WelcomeStyle.bannerTextStyle,{flex:1}]}>{this.props.item.section}</Text>
                        {this.state.isSelected?<Image source={images.upArrow}style={WelcomeStyle.imageArrow}/>
                            :<Image source={images.downArrow}style={WelcomeStyle.imageArrow}/>}
                    </View>
                </TouchableWithoutFeedback>
                {this.state.isSelected && this.renderDetails()}
            </View>
        )   
    }

    }

    ContactItem.propTypes=propTypes

export default ContactItem;  