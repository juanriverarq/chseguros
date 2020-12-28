import React, { Component } from "react";
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
  StyleSheet,
  TouchableOpacity,
  StatusBar
  
} from "react-native";
// import * as Font from 'expo-font';
// import BurgerMenu from './../src/components/BurgerMenu'
import styles from './../Styles'
import { Icon } from 'react-native-eva-icons';
import LottieView from 'lottie-react-native';
import { Card, ListItem, Button} from 'react-native-elements'
// import { WebView } from 'react-native-webview';


class Shop extends React.Component {
  static navigationOptions = { 
    title: '',
       headerShown: false,

  };
  
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: true
    }

  }

  componentDidMount() {
    this._loadAssetAsync()
  }

  async _loadAssetAsync() {
    await Font.loadAsync({
      'poppins-regular': require('./../assets/Fonts/Poppins-Regular.ttf'),
      'poppins-semibold': require('./../assets/Fonts/Poppins-SemiBold.ttf'),
    });

    this.setState({ fontsLoaded:true })
  }


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
          <View style={ styles.greatingWrapperPolizas }>
            <Text style={ styles.dayWrapper }>Compra en linea</Text>
            <Text style={ styles.dateWrapper }>Elige el producto que necesitas</Text>
          </View>
          <View style={ styles.menuWrapperPoliza }>
          </View>
        </View>
      <ScrollView style={styles.scrollView} horizontal={true}>
       <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => {navigate('Cotizar')}}>
        <Card
        containerStyle={{borderRadius:10,borderColor:'white'}}
          image={require('./../assets/Img/auto.jpg')} imageStyle={{borderRadius:10}}>  
          <Text style={{marginBottom: 10, textAlign:'center' }}>
          Seguro Todo Riesgo
          </Text>
          <Button
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, borderRadius:5,backgroundColor:'#567ff9'}}
          title='Cotizar' onPress={() => {navigate('Cotizar')}} />
        </Card>
          </TouchableOpacity>
           <TouchableOpacity onPress={() => {navigate('Soat')}}>
        <Card
          containerStyle={{borderRadius:10,borderColor:'white'}}
          image={require('./../assets/Img/soat.jpg') } imageStyle={{borderRadius:10}} > 

          <Text style={{marginBottom: 10, textAlign:'center' }}>
           Seguro obligatorio
          </Text> 
          <Button
          buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 0, borderRadius:5, backgroundColor:'#567ff9'}}
          title='Cotizar' onPress={() => {navigate('Soat')}} />
        </Card>
        
         </TouchableOpacity>
           </View>      
      </ScrollView>
     <View style={styles.bottomNavigation}>
   <TouchableOpacity onPress={() => {navigate('HomeScreen')}}>
          <View  style={styles.bottomMenuItem}>
            <Icon name="grid" width={30} height={30} fill="#14132A" />
          </View>
          <Text style={styles.menuu}>Inicio</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.bottomMenuItem, styles.bottomMenuItemActive]}>
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
        { ! this.state.fontsLoaded ? <Text>Cargando</Text> : this.MainView() }
        </SafeAreaView>
    );
  }
}

export default Shop;