import React, { Component } from "react";
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from "react-native";

// import * as Font from 'expo-font';
// import BurgerMenu from './../src/components/BurgerMenu'
import styles from './../Styles'
import { Icon } from 'react-native-eva-icons';
// import * as WebBrowser from 'expo-web-browser';

const Card = function({image, title, date, color, progress}) {
  return (
   <View style={styles.cardWrapper1}>
      <View style={[styles.cardBody1]}>
        <View style={styles.cardLogoBackground}>
          <Image source={ image } style={styles.cardLogo} onPress={() => navigate('Profile', {name: 'Jane'})} />
        </View>
        <View>
          <Text style={styles.cardTextTitle}>{title}</Text>
          <Text style={styles.cardTextDate2}>{date}</Text>
          <Icon name="credit-card-outline" width={30} height={30} fill="white" style={styles.detalles1}  />
        </View>
      </View>

    </View>
  )
}

class Pays extends React.Component {
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
             <View>
              <Image source={require('./../assets/logo-dark.png')} style={styles.logod} />
            </View>
            </View>
            <View>
              <Image source={require('./../assets/Img/Avatar.png')} style={styles.avatar} />
            </View>
          </View>

          <View style={ styles.greatingWrapperPolizas }>
            <Text style={ styles.dayWrapper1 }>Pagar en linea</Text>
          </View>
          <View style={ styles.menuWrapperPago }>
                  <Text style={ styles.dateWrapperPagos}>Elige una aseguradora</Text>
          </View>
        </View>
      <ScrollView style={styles.scrollView1}>
       <View>
       </View>

            <TouchableOpacity onPress={this._handlePressButtonAsync}>

        <Card 
          color="#2984FC"
          image={require('./../assets/Img/companias/logo-sura.png')}
          title="Seguros Suramericana"
          progress="100%"
          date="" />
           </TouchableOpacity>
             <TouchableOpacity onPress={this._handlePressButtonAsync2}>
           <Card 
          color="#006d38"
          image={require('./../assets/Img/companias/bolivar.png')}
          title="Seguros Bolivar"
          progress="100%"
          date="" />
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressButtonAsync3}>
           <Card 
          color="#003681"
          image={require('./../assets/Img/companias/allianz.png')}
          title="Seguros Allianz"
          progress="100%"
          date="" />
           </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressButtonAsync4}>
           <Card 
          color="#9e1c64"
          image={require('./../assets/Img/companias/logo-sbs.png')}
          title="SBS Seguros"
          progress="100%"
          date="" />
           </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressButtonAsync5}>
           <Card 
          color="#21252b"
          image={require('./../assets/Img/companias/previsora.png')}
          title="Previsora Seguros"
          progress="100%"
          date="" />
           </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressButtonAsync6}>
          <Card 
          color="#00a13d"
          image={require('./../assets/Img/companias/laequidad.png')}
          title="La Equidad Seguros"
          progress="100%"
          date="" />
           </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressButtonAsync7}>
          <Card 
          color="#ffd000"
          image={require('./../assets/Img/companias/liberty.png')}
          title="Liberty Seguros"
          progress="100%"
          date="" />
 </TouchableOpacity>
       
      </ScrollView>
      
        
      </View>

    )

  }
_handlePressButtonAsync = async () => {
    this.props.navigation.navigate('PagarExplorer', {'link': 'https://www.segurossura.com.co/paginas/pago-express.aspx#Pagos'} )
  };

_handlePressButtonAsync2 = async () => {
  this.props.navigation.navigate('PagarExplorer', {'link': 'https://www.segurosbolivar.com/RecaudosElectronicos/faces/muestrapagos.jspx/pages/layout/consultUser.action'} )
  };

_handlePressButtonAsync3 = async () => {
  this.props.navigation.navigate('PagarExplorer', {'link': 'https://www.allianz.co/clientes/todos-los-clientes/pagos.html'} )
  };

_handlePressButtonAsync4 = async () => {
  this.props.navigation.navigate('PagarExplorer', {'link': 'https://www.sbseguros.co/zonapagos/'} )
  };

_handlePressButtonAsync5 = async () => {
  this.props.navigation.navigate('PagarExplorer', {'link': 'https://www.previsora.gov.co/content/pagos-en-l%C3%ADnea-1'} )
  };

_handlePressButtonAsync6 = async () => {
  this.props.navigation.navigate('PagarExplorer', {'link': 'http://www.laequidadseguros.coop/contacto/servicios-en-linea/pagos-online-tesoreria-virtual'} )
  };

_handlePressButtonAsync7 = async () => {
  this.props.navigation.navigate('PagarExplorer', {'link': 'https://www.libertycolombia.com.co/pagos'} )
  };

  render() {
  
    return (
       <SafeAreaView style={{flex:1}}>
        { ! this.state.fontsLoaded ? <Text>Cargando</Text> : this.MainView() }
      </SafeAreaView>
    );
  }
}

export default Pays;