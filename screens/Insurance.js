import React, { Component } from "react";
import { 
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
  StatusBar
  
} from "react-native";
// import * as Font from 'expo-font';
// import BurgerMenu from './../src/components/BurgerMenu'
import styles from './../Styles'
import { Icon } from 'react-native-eva-icons';
import LottieView from 'lottie-react-native';
import axios from 'axios';



const Card = function({ title,title1, title2, date,date1, color, progress}) {
  return (
    <View style={styles.cardWrapper}>
      <View style={[styles.cardBody, {borderBottomColor: `${color}8C`}]}>
        <View>
          <Text style={styles.cardTextTitle}>{title1}</Text>
          <Text style={styles.cardTextDate}>{date}</Text>
          <Text style={styles.cardTextTitle}>{title2}</Text>
          <Text style={styles.cardTextDate1}>{date1}</Text>
          <Icon name="arrow-right-outline" width={30} height={30} fill="white" style={styles.detalles}  />
        </View>
      </View>
      <View style={ [styles.cardBorderBottom1, {backgroundColor: color, width: `${progress}`}] }>
      <Text style={styles.cardTextTitle2}>{title}</Text>
      </View>
    </View>
  )
}



class Insurance extends React.Component {
  static navigationOptions = { 
    title: '',
       headerShown: false,

  };

  
  constructor(props) {
    super(props)


    this.state = {
      fontsLoaded: false,
      polizas:[],
      bind:[],
      user_id:'',
      client_id:'',
      ncompleto:'',
      documento:'',
    }

    this._retrieveData = this._retrieveData.bind(this)

  }


  

componentDidMount() {
    this._loadAssetAsync()
    this._retrieveData()
    this.onPressPoliza()

   // console.warn("CLientID", this.state.client_id)


  }





  async  _retrieveData(){
    try {
      const ncompleto = await AsyncStorage.getItem('ncompleto');
      const client_id = await AsyncStorage.getItem('client_id');
      const user_id = await AsyncStorage.getItem('user_id');
      const documento = await AsyncStorage.getItem('documento');

      if (ncompleto !== null) {
        //console.warn(ncompleto);
        this.setState({ ncompleto: ncompleto })
        this.setState({ client_id: client_id })
        this.setState({ user_id: user_id })
        this.setState({ documento: documento })

      }

    } catch (error) {
      // Error retrieving data
    }
  }






  async _loadAssetAsync() {
    await Font.loadAsync({
      'poppins-regular': require('./../assets/Fonts/Poppins-Regular.ttf'),
      'poppins-semibold': require('./../assets/Fonts/Poppins-SemiBold.ttf'),
    })

    this.setState({ fontsLoaded:true })

  }
  


  



    onPressPoliza() {
    // console.warn("Ejecuntando query")




   console.log("CLientID22222", this.props.route.params.data_user.documento)

        axios.get('https://app.chseguros.com.co/api/clients/policies/'+this.props.route.params.data_user.documento)
        .then(res => {
        //console.warn(JSON.stringify(res.data))
        console.warn(res.data);
        this.setState({'polizas':res.data.policies}),
        this.setState({'bind':res.data.binds})
       /*this.setState({ numero:res.data.number_policies})
        this.setState({ estado:res.data.state_policies })
        this.setState({ asegurado:res.data.name_insured })
        this.setState({ aseguradora:res.data.insurers})
        this.setState({ ramo:res.data.branch })
        this.setState({ tomador:res.data.name_taker })
        this.setState({ inicio:res.data.start_date })
        this.setState({ fin:res.data.end_date })
        this.setState({ riesgo:res.data.risk }) */
       

      })

      .catch( (error)=> {


        Alert.alert ('Error de consulta','No se ha encontrado pólizas')

        console.log(error)

        
  })   


}




  MainView() {
  const {navigate} = this.props.navigation;

  //this.onPressPoliza()


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
            <View>
              <Image source={require('./../assets/logo-dark.png')} style={styles.logod} />
            </View>
            </View>
             <View>
             <TouchableOpacity onPress={() => {navigate('Profile')}}>
              <Image source={require('./../assets/Img/Avatar.png')} style={styles.avatar} />
            </TouchableOpacity>
            </View>
          </View>
          <View style={ styles.greatingWrapperPolizas }>
            <Text style={ styles.dayWrapper }>Mis pólizas</Text>
            <Text style={ styles.dateWrapper }>Encuentra todas tus pólizas</Text>
          </View>
          <View style={ styles.menuWrapperPoliza }>
          </View>
        </View>
                 
      <ScrollView style={styles.scrollView}>
         
          { this.state.polizas && 
            this.state.polizas.map((item,key)=>{

          return <TouchableOpacity key={key} onPress={() => {navigate('Detalle', {'detalle':item} )}}> 
          <Card 
          color="#82E0AA"
          title1="Aseguradora"
          progress="100%"
          date= {item.insurers_data.name} 
          title2="Renovación"
          date1={item.end_date}
          title={`${item.branch_data.name}`}  
          />
          </TouchableOpacity>

            })
          }   
          {
            this.state.bind && 
            this.state.bind.map((item1,key1)=>{

          return <TouchableOpacity key={key1} onPress={() => {navigate('Detalle', {'detalle':item1} )}}> 
          <Card 
          color="#82E0AA"
          title1="Aseguradora"
          progress="100%"
          date= {item1.policie_parent.insurers_data.name} 
          title2="Renovación"
          date1={item1.policie_parent.end_date}
          title={`${item1.policie_parent.branch_data.name}`}  
          />
          </TouchableOpacity>

            })
          }   

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
        { ! this.state.client_id ? <Text>Cargando</Text> : this.MainView() }


        </SafeAreaView>
    );
  }
}

export default Insurance;