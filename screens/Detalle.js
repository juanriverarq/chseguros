import React from "react";
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  StatusBar
  
} from "react-native";
// import * as Font from 'expo-font';
// import BurgerMenu from './../src/components/BurgerMenu'
import styles from './../Styles'
import { Icon } from 'react-native-eva-icons';
// import LottieView from 'lottie-react-native';
// import axios from 'axios';

const Card = function({ title,title1, title2, title3, title4, title5, date,date1, date2, date3, date4, color, progress}) {
  return (
    <View style={styles.cardWrapper}>
      <View style={[styles.cardBody, {borderBottomColor: `${color}8C`}]}>
        <View>
          <Text style={styles.cardTextTitle}>{title1}</Text>
          <Text style={styles.cardTextDate}>{date}</Text>
          <Text style={styles.cardTextTitle}>{title2}</Text>
          <Text style={styles.cardTextDate1}>{date1}</Text>
          <Text style={styles.cardTextTitle}>{title3}</Text>
          <Text style={styles.cardTextDate1}>{date2}</Text>
          <Text style={styles.cardTextTitle}>{title4}</Text>
          <Text style={styles.cardTextDate1}>{date3}</Text>
          <Text style={styles.cardTextTitle}>{title5}</Text>
          <Text style={styles.cardTextDate1}>{date4}</Text>
        </View>
      </View>
      <View style={ [styles.cardBorderBottom1, {backgroundColor: color, width: `${progress}`}] }>
      <Text style={styles.cardTextTitle2}>{title}</Text>
      </View>
    </View>
  )
}

class Detalle extends React.Component {



  static navigationOptions = { 
    title: '',
       headerShown: false,

  };

  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: true,
      nombre_completo  : '',
      detalle:this.props.route.params.detalle
    }

    this._retrieveData = this._retrieveData.bind(this)
  }


  componentDidMount() {
    this._loadAssetAsync(),
    this._retrieveData(),
    console.log(this.props.route.params.detalle)

  }
    onPress = () => {
    alert ('fawfaw') 
  }



  async _loadAssetAsync() {
    await Font.loadAsync({
      'poppins-regular': require('./../assets/Fonts/Poppins-Regular.ttf'),
      'poppins-semibold': require('./../assets/Fonts/Poppins-SemiBold.ttf'),
    });

    this.setState({ fontsLoaded: true })
  }



  async  _retrieveData(){
  try {
    const nombre_completo = await AsyncStorage.getItem('nombre_completo');

    if (nombre_completo !== null) {
      //console.warn(ncompleto);
      this.setState({ nombre_completo: nombre_completo })

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
           <TouchableOpacity onPress={() => {navigate('Insurance')}}>
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
          {this.props.route.params.detalle.type_poliza=='individual' && 
          <View style={ styles.greatingWrapperPolizas }>
            <Text style={ styles.dayWrapperDetalle }>PÓLIZA {this.state.detalle.branch_data.name}</Text>
            <Text style={ styles.dateWrapper }>Asegurado: {this.state.detalle.policies_info_taker_insured_beneficiary.name_insured}</Text>
            <Text style={ styles.dateWrapper }>Número de póliza: {this.state.detalle.number_policies}</Text>
          </View>   

          }
          {this.state.detalle.policie_parent && this.state.detalle.policie_parent.type_poliza=='Collective' &&
            <View style={ styles.greatingWrapperPolizas }>
            <Text style={ styles.dayWrapperDetalle }>PÓLIZA {this.state.detalle.policie_parent.branch_data.name}</Text>
            <Text style={ styles.dateWrapper }>Asegurado: {this.state.detalle.policie_parent.policies_info_taker_insured_beneficiary.name_insured}</Text>
            <Text style={ styles.dateWrapper }>Número de póliza: {this.state.detalle.policie_parent.number_policies}</Text>
          </View>   

          }

          <View style={ styles.menuWrapperPoliza }>
          </View>
        </View>
      {this.state.detalle.type_poliza=='individual' &&          
      <TouchableOpacity onPress={() => {navigate('pdf', {'resource':this.state.detalle.file_caratula} )}}>
        <ScrollView style={styles.scrollView}>
        <Card 
          color="#82E0AA"
          title1="Aseguradora"
          title="Ver documento"
          progress="100%"
          date={this.state.detalle.insurers_data.name}
          title2="Estado"
          date1={this.state.detalle.state_policies}
          title3="Riesgo asegurado"
          date2={this.state.detalle.risk}
          title4="Inicio vigencia"
          date3={this.state.detalle.start_date}
          title5="Fin vigencia"
          date4={this.state.detalle.end_date}
           />
          </ScrollView>
      </TouchableOpacity> 
        }
        {this.state.detalle.policie_parent && this.state.detalle.policie_parent.type_poliza=='Collective' &&         
      <TouchableOpacity onPress={() => {navigate('pdf', {'resource':this.state.detalle.file_caratula} )}}>
        <ScrollView style={styles.scrollView}>
        <Card 
          color="#82E0AA"
          title1="Aseguradora"
          title="Ver documento"
          progress="100%"
          date={this.state.detalle.policie_parent.insurers_data.name}
          title2="Estado"
          date1={this.state.detalle.policie_parent.state_policies}
          title3="Riesgo asegurado"
          date2={this.state.detalle.policie_parent.risk}
          title4="Inicio vigencia"
          date3={this.state.detalle.policie_parent.start_date}
          title5="Fin vigencia"
          date4={this.state.detalle.policie_parent.end_date}
           />
          </ScrollView>
      </TouchableOpacity> 
        }
       <View style={styles.bottomNavigation}>

    <TouchableOpacity onPress={() => {navigate('HomeScreen')}}>
            <View style={styles.bottomMenuItem}>
              <Icon name="grid" width={30} height={30} fill="#F2F6FF" />
            </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {navigate('Insurance')}}>
          <View style={[styles.bottomMenuItem, styles.bottomMenuItemActive]}>
            <Icon name="shield" width={30} height={30} fill="#14132A" />
            <Text style={styles.bottomMenuItemText}>Mis seguros</Text>
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
        { ! this.state.fontsLoaded ? <Text>Cargando</Text> : this.MainView() }
        </SafeAreaView>
    );
  }
}

export default Detalle;