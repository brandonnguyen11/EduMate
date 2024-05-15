import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',

    },
    javaContainer: {
      flex: 1,
      width: deviceWidth,
      height: deviceHeight,
      alignItems: 'center',
      backgroundColor: '#93E9F2',
    },
    javaPage: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeScreen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  
    navbar: {
        flexDirection: 'row',
        borderWidth: 1,
        margin: 'auto',
        width: (deviceWidth/2.25)*2,
        height: deviceWidth/16,
    },
  
    homebutton: {
      borderWidth: 1,
    },
  
    library: {
      borderWidth: 1,
    },
  
    libraryButton: {
      borderWidth: 1,
    },
  
    yourLibrary: {
      borderWidth: 1,
    },
  
    buttonWrapper:{
     alignItems: 'center',
     justifyContent: 'center', 
     borderRadius: 25,
     overflow: 'hidden',
  
    },
  
    addButtonWrapper: {
        borderWidth: 1,
        borderRadius: 50,
        
  
    },
  
  
    topText: {
      height: 100,
      width: deviceWidth*9,
      textAlign: 'center',
      borderWidth: 1,
      alignItems: 'center',
      
    },
  
    
  
    bottomText: {
      borderWidth: 1,
      width: deviceWidth*.9,
      height: 65,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: deviceHeight/8,
    },
  
  
    titleLine: {
      flexDirection: 'row',
      marginTop: 10,
      borderWidth: 1,
      width: deviceWidth*.9,
      justifyContent:'center',
      alignText:'center',
  
    },
  
    scrollViewContainer:{
      height:deviceHeight/1.5,
      
      
    },
    setButtonAnat: {
      
      width: (deviceWidth/5)*4,
      height: (deviceHeight/8)*1.5,
      marginTop: deviceHeight/20,
      borderRadius: 25,
      backgroundColor:'#f0b4f4',
      justifyContent:'center',
      alignItems:'center',
      
  
    },
  
    titleBox: {
      
      
      marginTop: deviceHeight/30,
      
      width: deviceWidth/2.15,
      height: deviceHeight/9,
      borderRadius: 20,
      backgroundColor: 'rgba(242, 242, 242, .64)',
      alignItems: 'center',
      justifyContent: 'center',
  
  
  
    },
  
    setButtonGeo: {
      
      width: (deviceWidth/5)*4,
      height: (deviceHeight/8)*1.5,
      marginTop: deviceHeight/20,
      borderRadius: 25,
      backgroundColor:'#68A5FF',
      justifyContent:'center',
      alignItems:'center',
    },
  
    setButtonCS: {
      
      width: (deviceWidth/5)*4,
      height: (deviceHeight/8)*1.5,
      marginTop: deviceHeight/20,
      borderRadius: 25,
      backgroundColor:'#93E9F2',
      justifyContent:'center',
      alignItems:'center',
    },
  
    eduText: {
     
      color: '#BDE0FE',
      fontSize: 100,
      fontWeight: 'bold',
  
    },
    mateText: {
      fontSize: 100,
      fontWeight: 'bold',
      color:'#D6CCC2'
    },
  
    text: {
      fontWeight: 'bold',
      fontSize: deviceHeight / 25,
  
    },
  
    homeText: {
      fontSize: 20, 
      margin: 5,
    },
    
    goButt: {
      alignSelf: 'start',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderRadius: 25,
    },
  
    setAddButton: {
      
      width: (deviceWidth/5)*4,
      height: (deviceHeight/8)*1.5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: deviceHeight/20,
      borderRadius: 25,
      backgroundColor:'#F3D0D7',
    },

    RealCS: {
      fontSize: 115,
    },
    
    RealStudy: {
      fontSize: 50,
    },

    CSCover: {
      
      alignItems: 'center',
      justifyContent: 'center',
    },

    popupContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    },

    popupContent: {
    width: '80%', // Adjust as needed
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#ccc',
  },

  closeBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  bodyPartTouchable: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyPartImage: {
    width: 300,
    height: 600,
  },
  factsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  flashcardsContainer: {
    marginBottom: 20,
  },
  goButt: {
    backgroundColor: 'lightgrey',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },


  });

  export default styles;