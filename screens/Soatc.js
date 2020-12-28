import React, { Component } from "react";
import { Linking } from 'expo';
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  StatusBar,
  AsyncStorage
} from "react-native";
import * as Font from 'expo-font';
import BurgerMenu from './../src/components/BurgerMenu'
import styles from './../Styles'
import { Icon } from 'react-native-eva-icons';
import LottieView from 'lottie-react-native';




const Card = function({image, title, date, color, progress}) {
  return (
    <View style={styles.cardWrapper} >
      <View style={[styles.cardBody, {borderBottomColor: `${color}8C`}]}>
        <View style={styles.cardLogoBackground}>
          <Image source={ image } style={styles.cardLogo} onPress={() => navigate('Profile', {name: 'Jane'})} />
        </View>
        <View>
          <Text style={styles.cardTextTitle}>{title}</Text>
          <Text style={styles.cardTextDate}>{date}</Text>
        </View>
      </View>
      <View style={ [styles.cardBorderBottom, {backgroundColor: color, width: `${progress}`}] }></View>
    </View>
  )
}


class Soatc extends React.Component {



  static navigationOptions = { 
    title: '',
       headerShown: false,

  };
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false,
      ncompleto  : '',
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
ShowCurrentDate=()=>{
 
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
 
      var datefull = date + '-' + month + '-' + year;

     }

  async  _retrieveData(){
  try {
    const ncompleto = await AsyncStorage.getItem('ncompleto');
    if (ncompleto !== null) {
      //console.warn(ncompleto);
      this.setState({ ncompleto: ncompleto })
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
            <LottieView
                  source={require('./../assets/Img/campana.json')}
                  style={{
                  width: 50,
                  height: 50,
                  marginHorizontal:-7,
                  marginTop:-2
                }}
                  autoPlay
                  loop
                />
                 <View>
              <Image source={require('./../assets/logo-dark.png')} style={styles.logod} />
            </View>
            <View>
            <TouchableOpacity onPress={() => {navigate('Profile')}}>
              <Image source={require('./../assets/Img/Avatar.png')} style={styles.avatar} />
            </TouchableOpacity>
            </View>
          </View>

          <View style={ styles.greatingWrapper }>
            <Text style={ styles.dayWrapper }>Hola, {this.state.ncompleto} </Text>
            <Text style={ styles.nameWrapper }>Aprovecha los beneficios de ser nuestro cliente</Text>
            <Text style={ styles.dateWrapper }>{this.state.date}</Text>
          </View>

          <View style={ styles.menuWrapper }>
          <TouchableOpacity onPress={() => {navigate('Shock')}}>
            <Text style={[styles.menuItem, styles.menuItemActive]}>Me choqué</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => {navigate('Citas')}}>
            <Text style={[styles.menuItem, styles.menuItemActive]}>Citas médicas</Text>
             </TouchableOpacity>
            <Text style={[styles.menuItem, styles.menuItemActive]}>Mi SOAT</Text>

          </View>
        </View>
      <ScrollView style={styles.scrollView}>
      <TouchableOpacity onPress={() => {navigate('Pays')}}>
        <Card
          color="#5680ff"
          image={require('./../assets/Img/tarjeta-de-debito.png')}
          title="Pagos en linea"
          progress="100%"
          date="Paga tu seguro a un clic" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigate('Request')}}>
        <Card 
          color="#03f081"
          image={require('./../assets/Img/pregunta.png')}
          title="Solicitudes"
          progress="100%"
          date="Genera una solicitud" />
	</TouchableOpacity>
      
      </ScrollView>
        <View style={styles.bottomNavigation}>
          <View style={[styles.bottomMenuItem, styles.bottomMenuItemActive]}>
            <Icon name="grid" width={30} height={30} fill="#14132A" />
            <Text style={styles.bottomMenuItemText}>Inicio</Text>
          </View>
 		<TouchableOpacity onPress={() => {navigate('Insurance')}}>
          <View style={styles.bottomMenuItem}>
            <Icon name="shield" width={30} height={30} fill="#F2F6FF" />
          </View>
 		</TouchableOpacity>
    <TouchableOpacity onPress={() => {navigate('Shop')}}>
          <View style={styles.bottomMenuItem}>
            <Icon name="shopping-cart" width={30} height={30} fill="#F2F6FF" />
          </View> 
    </TouchableOpacity>
                  
        </View>
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

export default Soatc;