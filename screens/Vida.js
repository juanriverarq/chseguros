import React from "react";
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  StatusBar,
  Linking
  
} from "react-native";
// import * as Font from 'expo-font';
// import BurgerMenu from './../src/components/BurgerMenu'
import styles from './../Styles'
import { Icon } from 'react-native-eva-icons';
import axios from 'axios';
import { WebView } from 'react-native-webview';
// import LottieView from 'lottie-react-native';
// import * as WebBrowser from 'expo-web-browser';


const Card = function({ image,title,title1, title2, date,date1, color, progress}) {
  return (
    <View style={styles.cardWrapper1}>
      <View style={[styles.cardBody1]}>
        <View style={styles.cardLogoBackground}>
          <Image source={ image } style={styles.cardLogo} onPress={() => navigate('Profile', {name: 'Jane'})} />
        </View>
        <View>
          <Text style={styles.cardTextTitle}>{title1}</Text>
          <Text style={styles.cardTextDate2}>{date}</Text>
          <Icon name="arrow-right" width={30} height={30} fill="white" style={styles.detalles1}  />
        </View>
      </View>

    </View>



  )
}

const WhatsApp = () => {
    
    let url =
      'https://wa.link/aqr3o5';
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp abierto');
      })
      .catch(() => {
        alert('Debes instalar WhatsApp');
      });
  };

class Hogar extends React.Component {
  static navigationOptions = { 
    title: '',
       headerShown: false,

  };
  
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false,
      citas:[],
      ncompleto  : '',
      email: '',
    }

  }

  componentDidMount() {
    this._loadAssetAsync(),
    this._retrieveData()

    console.log( this.props.route.params )

  }
   

  async _loadAssetAsync() {
    await Font.loadAsync({
      'poppins-regular': require('./../assets/Fonts/Poppins-Regular.ttf'),
      'poppins-semibold': require('./../assets/Fonts/Poppins-SemiBold.ttf'),
    });

    this.setState({ fontsLoaded:true })


  }

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
            <View>
              <Image source={require('./../assets/logo-dark.png')} style={styles.logod} />
            </View>
             <View>
             <TouchableOpacity onPress={() => {navigate('Profile')}}>
              <Image source={require('./../assets/Img/Avatar.png')} style={styles.avatar} />
            </TouchableOpacity>
            </View>
          </View>
          <View style={ styles.greatingWrapperPolizas }>
            <Text style={ styles.dayWrapper }>Vida</Text>
            <Text style={ styles.dateWrapper}>Procesos relacionados con tu seguro de vida</Text>
          </View>
          <View style={ styles.menuWrapperPoliza }>
          </View>
        </View>


            <ScrollView style={styles.scrollView1}>
          <TouchableOpacity onPress={WhatsApp}>
            <Card
              image={require('./../assets/Img/reclamacion.png')}
              title1="Reclamación"
              progress="100%"
              date="Inicia una reclamación aquí" />
          </TouchableOpacity>

          

          </ScrollView>

      </View>
    )
  }



  render() {

    return (
      <SafeAreaView style={{flex:1}}>
        { this.MainView() }
        </SafeAreaView>
    );
  }
}

export default Hogar;