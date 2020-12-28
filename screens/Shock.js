import React, { Component } from "react";
import { View,Text,SafeAreaView,Image,Button,TextInput,TouchableOpacity,StatusBar,Linking,Alert} from "react-native";
// import * as Font from 'expo-font';
// import BurgerMenu from './../src/components/BurgerMenu'
import styles from './../Styles'
import { Icon } from 'react-native-eva-icons';
import axios from 'axios';
import LottieView from 'lottie-react-native';


class Shock extends React.Component {
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
     

    axios.get('https://app.chseguros.com.co/api/policie/vehicule/'+this.state.placa, {})
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

       //console.log(res.data);
      })

      .catch(function (error) {


        Alert.alert ('Sin resultados','Este vehículo no se encuentra asegurado')


        
  })

}


MainView() {
      const {navigate} = this.props.navigation;
    return (

<SafeAreaView style={{flex:1}}>  
 <StatusBar backgroundColor="#fff"
      barStyle="dark-content"/>       
              <View style={styles.container}>
              <View style={ styles.headerWrapper }>
                  <View style={styles.navigation}>
                      <TouchableOpacity onPress={()=> {navigate('Movilidad')}}>
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

                      <Text style={ styles.dayWrapper3}>Ingresa tu placa para continuar</Text>

                  </View>
                  <View style={ styles.menuWrapperPago }>
                      <View style={styles.header_SearchWrapper}>
                          <Icon name="search" width={20} height={20} fill="#7E8CBA" />
                          <TextInput name="placa" placeholder="Placa del vehículo" style={styles.header_SearchInput} placeholderTextColor="#8E9AC3" value={this.state.placa} onChangeText={this.onPlacaChange}/>
                      </View>
                      <TouchableOpacity>
                          <View style={styles.botoncontenedorvehicle}>
                              <Button title="Buscar" type="" style={styles.boton} color="white" onPress={this.onPressVehicle} />
                          </View>
                      </TouchableOpacity>

                  </View>

              </View>



          <View style={{opacity : this.state.opacity}}>
              <View style={styles.contenedorresaltado}>
                <Text style={ styles.subtituloblanco }>Resultado de búsqueda:</Text>
              </View>

              <View style={styles.contenedorresultados}>
             
                <View style={styles.row}>
                  <View>
                      <View style={styles.resultado}>
                          <Icon name="car" width={20} height={20} fill="#14132A" />
                          <Text style={ styles.subtitulo }>Placa:</Text>
                      </View>
                      <Text style={ styles.dateWrapperresultado }>{this.state.placa}</Text>
                  </View>


                  <View>
                      <View style={styles.resultado}>
                          <Icon name="award" width={20} height={20} fill="#14132A" />
                          <Text style={ styles.subtitulo }>Tipo de vehiculo:</Text>
                      </View>
                      <Text style={ styles.dateWrapperresultado }>{this.state.clase}</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View>
                      <View style={styles.resultado}>
                          <Icon name="arrow-down" width={20} height={20} fill="#14132A" />
                          <Text style={ styles.subtitulo }>Marca:</Text>
                      </View>
                      <Text style={ styles.dateWrapperresultado }>{this.state.marca}</Text>
                  </View>


                  <View>
                      <View style={styles.resultado}>
                          <Icon name="arrow-down" width={20} height={20} fill="#14132A" />
                          <Text style={ styles.subtitulo }>Linea:</Text>
                      </View>
                      <Text style={ styles.dateWrapperresultado }>{this.state.referencia1}</Text>
                  </View>
                 

               
                  <View>
                      <View style={styles.resultado}>
                          <Icon name="arrow-down" width={20} height={20} fill="#14132A" />
                          <Text style={ styles.subtitulo }>Referencia:</Text>
                      </View>
                      <Text style={ styles.dateWrapperresultado }>{this.state.referencia2}</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View>
                      <View style={styles.resultado}>
                          <Icon name="shield" width={20} height={20} fill="#14132A" />
                          <Text style={ styles.subtitulo }>Aseguradora:</Text>
                      </View>
                      <Text style={ styles.dateWrapper}>{this.state.name_insurers}</Text>
                  </View>
                </View>

                 <View style={styles.botoncontenedorazul}>
                 <Text onPress={()=>{Linking.openURL('tel:'+this.state.phone)}} style={styles.boton} color="white">Solicitar ahora</Text>

                </View>


              </View>
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

export default Shock;