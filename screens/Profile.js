import React from "react";
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  
} from "react-native";
//import { ListItem } from 'react-native-elements';

// import BurgerMenu from './../src/components/BurgerMenu';
import styles from './../Styles';
import { Icon } from 'react-native-eva-icons';



class Profile extends React.Component {



  static navigationOptions = { 
    title: '',
       headerShown: false,

  };

  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false,
      ncompleto  : '',
      email: '',
    }

    this._retrieveData = this._retrieveData.bind(this)
  }


  componentDidMount() {
    //this._loadAssetAsync()
    this._retrieveData()

  }
    onPress = () => {
    alert ('fawfaw') 
  }



/*
  async _loadAssetAsync() {
    await Font.loadAsync({
      'poppins-regular': require('./../assets/Fonts/Poppins-Regular.ttf'),
      'poppins-semibold': require('./../assets/Fonts/Poppins-SemiBold.ttf'),
    });

    this.setState({ fontsLoaded:true })
  }
*/


  async  _retrieveData(){
  try {
    const ncompleto = await AsyncStorage.getItem('ncompleto');
    const email = await AsyncStorage.getItem('email');

    if (ncompleto !== null) {
      //console.warn(ncompleto);
      this.setState({ ncompleto: ncompleto })
      this.setState({ email: email })

    }
  } catch (error) {
    // Error retrieving data
  }
};

  MainView() {
    const {navigate} = this.props.navigation;


  return ( 
   
      <View style={styles.container}>  
     <StatusBar backgroundColor="#fff"
      barStyle="dark-content"/> 
        <View style={ styles.headerWrapper }>
          <View style={styles.navigation}>
          <TouchableOpacity onPress={() => {navigate('HomeScreen')}}>
           <Icon name="arrow-ios-back" width={30} height={30} fill="#14132A" />
           </TouchableOpacity>
           
          </View>    

          <View style={ styles.greatingWrapper }>
            <View style={ styles.profileCabecera }>
              <Image source={require('./../assets/Img/Avatar.png')} style={styles.avatarprofile} /> 
            </View>
            <View>
              <Text style={ styles.nombreProfile }>{this.state.ncompleto} </Text>
                 <View style={styles.navigationProfile}>
                   <Icon name="email" width={15} height={15} fill="#14132A" />
                   <Text style={ styles.emailProfile }> {this.state.email}</Text>
                </View>
                 <View style={styles.navigationProfile}>
                 <TouchableOpacity onPress={() => {navigate('Login')}}>
                   <Text style={ styles.cerrarProfile }>Cerrar Sesión</Text>
                  </TouchableOpacity>
                </View>

            </View>
          </View>

            <View>
              
            </View>
            <Text style={ styles.versionProfile }>Versión 1.4</Text>

          
        </View>
      <ScrollView style={styles.scrollView}>
      
      
      </ScrollView>
        
      </View>
    )
  }

  render() {

    return (
      <SafeAreaView style={{flex:1}}>
        {  this.state.fontsLoaded ? <Text>Cargando</Text> : this.MainView() }
        </SafeAreaView>
    );
  }
}

export default Profile;