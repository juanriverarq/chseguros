   import React, { Component } from "react";
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,

  
} from "react-native";
// import * as Font from 'expo-font';
// import BurgerMenu from './../src/components/BurgerMenu'
import styles from './../Styles'
import { Icon } from 'react-native-eva-icons';
import axios from 'axios';
// import LottieView from 'lottie-react-native';
 import { WebView } from 'react-native-webview';



class Soat extends React.Component {
  static navigationOptions = { 
    title: '',
    headerShown: false,

  };


  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: true,
      placa : '',
      marca: '',
      name_insurers: '',
      phone: '',
      referencia1: '',
      referencia2: '',
      referencia3: '',
      clase: '',

      opacity : 0,
      opacity1 : 1
    }





    this.onPressVehicle = this.onPressVehicle.bind(this)

    var nplaca = ''
    
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

  onPlacaChange = placa => {

    this.setState({ placa : placa })
    nplaca = placa

    //console.log(nplaca)
  };


    onPressVehicle() {
     

    axios.get('http://app.chseguros.com.co/api/policie/vehicule/'+this.state.placa, {})
      .then(res => {
        //console.warn(JSON.stringify(res.data))
        //console.log(res);

        this.setState({ marca:res.data.marca })
        this.setState({ referencia1:res.data.referencia1 })
        this.setState({ referencia2:res.data.referencia2 })
        this.setState({ placa:res.data.placa })
        this.setState({ referencia3:res.data.referencia3 })
        this.setState({ phone:res.data.phone })
        this.setState({ clase:res.data.clase })
        this.setState({ name_insurers:res.data.name_insurers })


        this.setState({ opacity: 1 })
        this.setState({ opacity1: 0 })

       console.log(res.data);
      })

      .catch(function (error) {


        //Alert.alert ('Error de consulta','Este vehículo no se encuentra asegurado')

        console.warn('error')

        
  })

}


MainView() {
      const {navigate} = this.props.navigation;
    return (

<SafeAreaView style={{flex:1}}>        
 <StatusBar backgroundColor="#fff"
      barStyle="dark-content"/> 
     <View style={styles.containerCotizar}>
              <View style={ styles.headerWrapperCotizar }>
                  <View style={styles.navigationCotizar}>
                      <TouchableOpacity onPress={()=> {navigate('Shop')}}>
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
                 
              </View>

				  <View style={styles.container}>  
				          <WebView source={{ uri: 'https://chseguros.com.co/soat-app.html' }} />
				  </View>


    </View>

</SafeAreaView>
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

export default Soat;
 