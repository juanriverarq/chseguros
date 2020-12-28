import React, { Component } from "react";
import { Linking } from 'expo';
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  Alert,
  StyleSheet, 
  TextInput,
  TouchableOpacity,
  Textarea,
  StatusBar
  
} from "react-native";

import * as Font from 'expo-font';
import BurgerMenu from './../src/components/BurgerMenu'
import styles from './../Styles'
import { Icon } from 'react-native-eva-icons';

const Card = function({image, title, date, color, progress}) {
  return (
    <View style={styles.cardWrapper}>
      <View style={[styles.cardBody, {borderBottomColor: `${color}8C`}]}>
        <View style={styles.cardLogoBackground}>
          <Image source={ image } style={styles.cardLogo} />
        </View>
        <View>
          <Text style={styles.cardTextTitle1}>{title}</Text>
        </View>
      </View>
      <View style={ [styles.cardBorderBottom, {backgroundColor: color, width: `${progress}`}] }></View>
    </View>
  )
}

class Request extends React.Component {
  static navigationOptions = { 
    title: '',
    headerShown: false,

  };
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false
    }

  }

  componentDidMount() {
    this._loadAssetAsync()
  }
    onPress = () => {
    alert ('fawfaw') 
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
           <TouchableOpacity onPress={() => {navigate('HomeScreen')}}>
           <Icon name="arrow-ios-back" width={30} height={30} fill="#14132A" />
           </TouchableOpacity>
           <View>
              <Image source={require('./../assets/logo-dark.png')} style={styles.logod} />
            </View>
            <View>
                <TouchableOpacity onPress={() => {navigate('Profile')}} >
              <Image source={require('./../assets/Img/Avatar.png')} style={styles.avatar} />
              </TouchableOpacity>

            </View>
          </View>

          <View style={ styles.greatingWrapperPolizas }>
            <Text style={ styles.dayWrapper1 }>Crear Solicitud</Text>
          </View>
          <View style={ styles.menuWrapperPago }>
          
          </View>
        </View>
      <ScrollView style={styles.scrollView}>
       
<View style={styles.inputFondo}>
        <TextInput placeholder="Nombre Completo" style={styles.input} placeholderTextColor="#8E9AC3" />
        </View>
        <View style={styles.inputFondo}>
    <TextInput placeholder="Número de documento" style={styles.input} placeholderTextColor="#8E9AC3" />
    </View>
    <View style={styles.inputFondo}>
     <TextInput placeholder="Número de teléfono" style={styles.input} placeholderTextColor="#8E9AC3" />
</View>

       
      </ScrollView>
      
        
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

export default Request;