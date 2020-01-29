/*
* Created by Reshma B 28/09/2019
**
*/

import images  from './Images';
import colors  from './Colors';
//take build apk
// react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
// cd android/
// ./gradlew assembleDebug

const staticNotifKey=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","forteen"]

const organisorData=
  {
    section:'Organiser',
    name:'Convenor, MECOS 3',
    address1:'The Marine Biological Association of India',
    address2:'PB No. 1604, CMFRI Campus',
    address3:'Cochin - 682018, Kerala State, India'

  }
const staticNames={
  favouriteCountKey:"FavouriteCount",
  
}

const otherScreenlabels={
  presentationScreenlabel:"Presentations",
  abstract:"Abstracts",
  myFavourites:"My Favourites"
}

const welcomeScreenLabels={
  symbosiumItinerary:"Program",
  howToReach:"How to Reach",
  leadSpeakers:"Lead Speakers",
  Sessions:"My Favourites",
  Sponsors:"Sponsors",
  Advisors:"Advisors",
  Contacts:"Contacts",
  search:"Find",
  Exhibition:"Exhibition",
  WebsiteLink:"Book of Abstracts",
  Notification:'Notifications'
  
}

const welcomeScreenGridData = 
[
  {
    name:welcomeScreenLabels.symbosiumItinerary,
    image:images.itinerary,
    backgroundColor:colors.homeGrid1Color
  },
  {
    name:welcomeScreenLabels.howToReach,
    image:images.venue,
    backgroundColor:colors.homeGrid2Color
  },
  {
    name:welcomeScreenLabels.leadSpeakers,
    image:images.leadSpeakers,
    backgroundColor:colors.homeGrid3Color
  },
  {
    name:welcomeScreenLabels.Sessions,
    image:images.sessions,
    backgroundColor:colors.homeGrid4Color
  },
  {
    name:welcomeScreenLabels.search,
    image:images.searchBy,
    backgroundColor:colors.homeGrid5Color
  },
  // {
  //   name:welcomeScreenLabels.Sponsors,
  //   image:images.sponsors,
  //   backgroundColor:colors.homeGrid5Color
  // },
  // {
  //   name:welcomeScreenLabels.Advisors,
  //   image:images.advisors,
  //   backgroundColor:colors.homeGrid6Color
  // },
  {
    name:welcomeScreenLabels.WebsiteLink,
    image:images.website,
    backgroundColor:colors.homeGrid8Color
  },
  
  {
    name:welcomeScreenLabels.Exhibition,
    image:images.exhibition,
    backgroundColor:colors.homeGrid7Color
  },
  {
    name:welcomeScreenLabels.Contacts,
    image:images.contacts,
    backgroundColor:colors.homeGrid6Color
  },
 
  
]
const locationInfo={
  latitude :"9.988298",
  longitude :"76.272126",
  label : "Central Marine Fisheries research Institute",
}
const contactSectionNames={
  Convenor:'Convenor',
  CoConvenor:'Co-Convenor',
  HelpDesk:'Help Desk',
  Registration:'Registration',
  Accommodation:'Accommodation & Travel Co-ordination',
  Hospitality:'Hospitality/Guest Management',
  EventManager:'Event Manager'
}
const typeSpeakers={
  Talk:'T',
  Oral:'EP',
  Poster:'DP'
}

const contactData=[
  {
    section:contactSectionNames.Convenor,
    name:'Dr. Sunilkumar Mohammed',
    designation: 'Principal Scientist, CMFRI',
    phone:'9447056559',
    email:'ksmohamed@gmail.com',
    photo:images.ksm
  },
  {
    section:contactSectionNames.CoConvenor,
    name:'Dr. V. Kripa',
    designation: 'Principal Scientist, CMFRI',
    phone:'9495317931',
    email:'vasantkripa@gmail.com',
    photo:images.Kripa
  },
  {
    section:contactSectionNames.HelpDesk,
    name:'Dr. Josileen Jose',
    designation: 'Principal Scientist, CMFRI',
    phone:'9447232966',
    email:'drjoslin@gmail.com',
    photo:images.josileen
  },
  {
    section:contactSectionNames.Registration,
    name:'Dr. Somy Kuriakose',
    designation: 'Principal Scientist, CMFRI',
    phone:'9446375363',
    email:'somycmfri@gmail.com',
    photo:images.somy
  },
  {
    section:contactSectionNames.Accommodation,
    name:'Dr. Jayasankar J',
    designation: 'Principal Scientist, CMFRI',
    phone:'9446412132',
    email:'jjsankar@gmail.com',
    photo:images.jayasankar
    
  },
  {
    section:contactSectionNames.Hospitality,
    name:'Dr. Prathibha Rohit',
    designation: 'Principal Scientist, CMFRI',
    phone:'9916129255',
    email:'rohitprathi@yahoo.co.in',
    photo:images.PrathibhaRohit
  },
  {
    section:contactSectionNames.EventManager,
    name:'Mr. Santhosh',
    designation:'CEO',
    address:'Ocean Color Holidays Pvt Ltd',
    
    address1:'3rd floor, Krishna Apartments',
    address2:'M.G.Road, Ravipuram',
    address3:'Kochi-16, India.',
    
    phone:'9447465549',
    
    email:'santosh.oceancolor@gmail.com',
    website:'www.oceancolorholidays.com',
    photo:''
  },
]
const programDataEvents={
  registration:'Registration',
  inaugurationJonesAward:'Inauguration & Jones Award',
  highTeaRegistration:'High Tea & Registration',
  presentations:'Presentations',
  teaBreak:'Tea break',
  windingupbyChair:'Winding up by Chair',
  lunchBreak:'Lunch break',
  dinner:'Dinner (Kerala Ethnic) available on payment',
  valedictoryDistributionofAwards:'Valedictory & Distribution of Awards',
  Discussion:'Discussion on Indian Seafood Sustainability',
  Cocktails:'Cocktails, refreshments & snacks',
  TeaAndClosure:'Tea & Close of MECOS 3',
  Plenary:'Plenary Session, Recommendations & Presentation Awards',
  CoChair:'Co-Chairs'

}
const dayInfo={
  day1:'Day 1',
  day2:'Day 2',
  day3:'Day 3',
  day4:'Day 4'
}
const themes={
  fisheriesSustainability:'Fisheries and Ecosystem Sustainability',
  responsibleAquaculture:'Responsible Aquaculture Production Systems',
  marineBiodiversity:'Marine Biodiversity Assessments and Valuation',
  climateChange:'Climate change and meeting SDG 14 goals',
  marineBiotechnology:'Marine biotechnology and bio-marine products',
  livelihoodTrade:'Livelihood, economics and trade',
  greenHarvest:'Green harvests and post-harvest technologies'
}

const programGuideData=
  [
    {
      
        date:'January 07, 2020',
        day:dayInfo.day1,
        event1:programDataEvents.registration,
        event1StartTime:'11.00',
        event1EndTime:'15.00',
        event2:programDataEvents.inaugurationJonesAward,
        event2StartTime:'15.00',
        event2EndTime:'16.30',
        event3:programDataEvents.highTeaRegistration,
        event3StartTime:'16.30',
        event3EndTime:'18.00',
        event4:programDataEvents.TeaAndClosure,
        event4StartTime:'16.00',
        event4EndTime:'17.00'
    },
    {
      
        date:'January 08, 2020',
        day:dayInfo.day2,
        topics:
        [
          {
            topic:themes.fisheriesSustainability,
            events:
            [
              
              {
                event:programDataEvents.teaBreak,
                startTime:'10.35',
                endTime:'11.00'
              },
              {
                event:programDataEvents.presentations,
                startTime:'11.00',
                endTime:'11.50'
              },
              {
                event:programDataEvents.windingupbyChair,
                startTime:'11.50',
                endTime:'12.00'
              }
            ]
          },
          {
            topic:themes.responsibleAquaculture,
            events:
            [
              {
                event:programDataEvents.lunchBreak,
                startTime:'12.45',
                endTime:'13.45'
              },
              
            ]
          
          }  ,
          {
            topic:themes.responsibleAquaculture,
            events:
            [
              {
                event:programDataEvents.teaBreak,
                startTime:'15.20',
                endTime:'15.50'
              },
              {
                event:programDataEvents.presentations,
                startTime:'15.50',
                endTime:'16.50'
              },
              {
                event:programDataEvents.windingupbyChair,
                startTime:'16.50',
                endTime:'17.00'
              },

              {
                event:programDataEvents.Discussion,
                startTime:'17.00',
                endTime:'17.30'
              },
              {
                event:programDataEvents.Cocktails,
                startTime:'17.30',
                endTime:'18.00'
              },
              {
                event:programDataEvents.dinner,
                startTime:'18.00',
                endTime:'20.00'
              }
            ]
          
        },
        ]
      },
        {
    
        date:'January 09, 2020',
        day:dayInfo.day3,
        topics:
        [
          {
            topic:themes.marineBiodiversity,
            events:
            [
              {
                event:programDataEvents.presentations,
                startTime:'10.15',
                endTime:'10.35'
              },
              {
                event:programDataEvents.teaBreak,
                startTime:'10.35',
                endTime:'11.05'
              },
              {
                event:programDataEvents.presentations,
                startTime:'11.05',
                endTime:'12.05'
              },
              {
                event:programDataEvents.windingupbyChair,
                startTime:'12.05',
                endTime:'12.15'
              },
          
            ]
          
          },
          {
            topic:themes.climateChange,
            events:
            [
              {
              event:programDataEvents.lunchBreak,
              startTime:'13.00',
              endTime:'14.00'
              },
              {
              event:programDataEvents.presentations,
              startTime:'14.00',
              endTime:'15.00'
              },
              {
              event:programDataEvents.windingupbyChair,
              startTime:'15.00',
              endTime:'15.10'
              },
              {
              event:programDataEvents.teaBreak,
              startTime:'15.10',
              endTime:'15.40'
              },
            ]
          
        },
        {
          topic:themes.marineBiotechnology,
          events:
          [
            {
              event:programDataEvents.presentations,
              startTime:'16.55',
              endTime:'17.55'
            },
            {
              event:programDataEvents.windingupbyChair,
              startTime:'17.55',
              endTime:'18.05'
            },
            {
              event:programDataEvents.dinner,
              startTime:'18.30',
              endTime:'20.00'
            },
         
          ]
          
        }
      ]
  },

    {
      date:'January 10, 2020',
      day:dayInfo.day4,
      topics:[
        {
          topic:themes.livelihoodTrade,
          events:
          [
            {
              event:programDataEvents.teaBreak,
              startTime:'10.10',
              endTime:'10.40'
            },
            {
              event:programDataEvents.presentations,
              startTime:'10.40',
              endTime:'11.40'
            },
            {
              event:programDataEvents.windingupbyChair,
              startTime:'11.40',
              endTime:'11.50'
            },
         
          ]
         
        },


        {
          topic:themes.greenHarvest,
          events:
            [
              {
                event:programDataEvents.lunchBreak,
                startTime:'12.40',
                endTime:'13.40'
              },
              {
                event:programDataEvents.presentations,
                startTime:'13.40',
                endTime:'14.30'
              },
              {
                event:programDataEvents.windingupbyChair,
                startTime:'14.30',
                endTime:'14.40'
              },
              
         
            ]
          
        },


        {
          topic:programDataEvents.Plenary,
          events:
          {
          event:programDataEvents.CoChair,
          startTime:'14.45',
          endTime:'16.00',
          coChair1:'Dr A Gopalakrishnan',
          coChair2:'Dr K K C Nair',
          coChair3:'Dr N G K Pillai',
          coChair4:'Dr P Nammalwar',
          coChair5:'Dr K Sunil Mohamed'
          }
        
        }
      ]
    }
]









    
    
  
  
  export{
    
    welcomeScreenGridData,
    locationInfo,
    welcomeScreenLabels,
    contactData,
    contactSectionNames,
    organisorData,
    programDataEvents,
    programGuideData,
    dayInfo,
    otherScreenlabels,
    typeSpeakers,
    themes,
    staticNotifKey,
    staticNames
  }