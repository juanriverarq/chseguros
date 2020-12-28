import React from "react";

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
// import * as Font from 'expo-font';
// import BurgerMenu from './../src/components/BurgerMenu'
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
          <Text style={styles.cardTextDate2}>{date}</Text>
        </View>
      </View>
      <View style={ [styles.cardBorderBottom, {backgroundColor: color, width: `${progress}`}] }></View>
    </View>
  )
}


class Home extends React.Component {


  static navigationOptions = { 
    title: '',
    headerShown: false,
  };

  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false,
      ncompleto  : '',
      user_id:'',
      client_id:'',
      documento: '',
      vinculado: '',
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
    const user_id = await AsyncStorage.getItem('user_id');
    const documento = await AsyncStorage.getItem('documento');
    const client_id = await AsyncStorage.getItem('client_id');
    const vinculado = await AsyncStorage.getItem('vinculado');

    if (ncompleto !== null) {
      //console.warn(ncompleto);
      console.log(documento)
      this.setState({ ncompleto: ncompleto })
      this.setState({ user_id: user_id })
      this.setState({ documento: documento })
      this.setState({ client_id: client_id })
      this.setState({ vinculado: vinculado })

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
            <Text style={ styles.dayWrapper2 }>Hola, {this.state.ncompleto} </Text>
            <Text style={ styles.nameWrapper }>Aprovecha los beneficios de ser nuestro cliente</Text>
            <Text style={ styles.dateWrapper }>{this.state.date}</Text>
          </View>

          <View style={ styles.menuWrapper }>
          <TouchableOpacity onPress={() => {navigate('Shock')}}>
            <Text style={[styles.menuItem, styles.menuItemActive]}>Reportar choqué</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => {navigate('Citas', {'data_user':this.state})}}>
            <Text style={[styles.menuItem, styles.menuItemActive]}>Pedir Citas médicas</Text>
             </TouchableOpacity>

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

      </ScrollView>
        <View style={styles.bottomNavigation}>
   <TouchableOpacity style={[styles.bottomMenuItem, styles.bottomMenuItemActive]}>
          <View  style={styles.bottomMenuItem}>
            <Icon name="grid" width={30} height={30} fill="#14132A" />
          </View>
          <Text style={styles.menuu}>Inicio</Text>
    </TouchableOpacity>
    <TouchableOpacity  onPress={() => {navigate('Insurance', {'data_user':this.state} )}}>
          <View style={styles.bottomMenuItem}>
            <Icon name="shield" width={30} height={30} fill="#14132A" />
          </View>
          <Text style={styles.menuu}>Mis seguros</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {navigate('Shop')}}>
          <View style={styles.bottomMenuItem}>
            <Icon name="shopping-cart" width={30} height={30} fill="#14132A" />
          </View>
          <Text style={styles.menuu}>Comprar</Text> 
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



export default Home;