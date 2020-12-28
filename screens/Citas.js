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
import axios from 'axios';
import { WebView } from 'react-native-webview';
// import LottieView from 'lottie-react-native';
// import * as WebBrowser from 'expo-web-browser';


const Card = function({ title,title1, title2, date,date1, color, progress}) {
  return (
    <View style={styles.cardWrapper}>
      <View style={[styles.cardBody, {borderBottomColor: `${color}8C`}]}>
        <View>
          <Text style={styles.cardTextTitle}>{title1}</Text>
          <Text style={styles.cardTextDate}>{date}</Text>
          <Text style={styles.cardTextTitle}>{title2}</Text>
          <Text style={styles.cardTextDate1}>{date1}</Text>
          <Icon name="calendar-outline" width={30} height={30} fill="white" style={styles.detalles}  />
        </View>
      </View>
      <View style={ [styles.cardBorderBottom1, {backgroundColor: color, width: `${progress}`}] }>
      <Text style={styles.cardTextTitle2}>{title}</Text>
      </View>
    </View>
  )
}


class Citas extends React.Component {
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
    this.onPressCitas(),
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

  onPressCitas() {

    // axios.get('https://app.chseguros.com.co/api/citas/'+7657)this.props.route.params
    console.log( this.props.route.params.data_user )
    let request = 'https://app.chseguros.com.co/api/citas/'+this.props.route.params.data_user.documento
    console.log(request)
    axios.get(request)
      .then(res => {
        //console.warn(JSON.stringify(res.data))
        //console.warn(res.data);
        //this.setState(res.data)
        console.log(res.data)
        this.setState({'citas':res.data})   

      })

      .catch((error)=> {


        //Alert.alert ('Error de consulta','Este vehículo no se encuentra asegurado')

        console.warn(error)

        
  })

}


  MainView() {
      const {navigate} = this.props.navigation;

  return (
      <View style={styles.container}>  
       <StatusBar backgroundColor="#fff"
      barStyle="dark-content"/> 
        <View style={ styles.headerWrapper }>

          <View style={styles.navigation}>
          <TouchableOpacity onPress={() => {navigate('Salud')}}>
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
            <Text style={ styles.dayWrapper }>Agendar citas</Text>
            <Text style={ styles.dateWrapper }>Agenda citas para ti y tu grupo familiar </Text>
          </View>
          <View style={ styles.menuWrapperPoliza }>
          </View>
        </View>
        <ScrollView style={styles.scrollView}> 
            {
            this.state.citas.map((item,key)=>{
     
            return <TouchableOpacity key="key" onPress={() => this._handlePressButtonAsync(item.link)} >  
            <Card 
            color="#82E0AA"
            title1="Número de póliza"
            progress="100%"
            date={item.number_policies}
            title2="Aseguradora"
            date1={item.insurers_name}
            title="Agendar cita médica"
            />
            </TouchableOpacity>          
           
      })
      }   
          </ScrollView>
      </View>
    )
  }

        _handlePressButtonAsync = async (link) => {
            // let result = await WebBrowser.openBrowserAsync(link);
            this.props.navigation.navigate('AgendarExplorer', {'link': link} )
            // this.setState({ result });
          };





  render() {

    return (
      <SafeAreaView style={{flex:1}}>
        { this.MainView() }
        </SafeAreaView>
    );
  }
}

export default Citas;