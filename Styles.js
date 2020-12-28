import { 
    StyleSheet,
  } from "react-native";

const fonts = {
    regular: {
      fontFamily: 'Poppins-Regular',
    },
    bold: {
      fontFamily: 'Poppins-SemiBold',
    }
  }

const styles = StyleSheet.create({

    
    container: {
      backgroundColor: '#f5f5ff',
      flex: 1,
    },
     containerCotizar: {
      backgroundColor: '#f5f5ff',
      flex: 1,
    },
      containerPdf: {
      backgroundColor: '#fff',
      flex: 1,
    },
      containerlogin: {
      backgroundColor: '#2e2f55',
      flex: 1,
      flexDirection:'column',
    },
    menuu: {
     ...fonts.regular,
     marginTop:-10,
     fontSize:12,
     textAlign:'center',
     color:'#14132A',
    },
      menuu1: {
     ...fonts.regular,
     marginTop:10,
     fontSize:12,
     textAlign:'center',
     color:'#14132A',
    },
    contenedorresaltado: {
      backgroundColor: '#FCAB00',
      margin:20,
      marginTop:-20,
      paddingLeft:20,
      paddingBottom:10,
      paddingTop:10,
      flexDirection:'column',
      borderRadius:5,
      width:210,
      marginBottom:-40,
      zIndex:1,

    },

    contenedorresultados: {
      backgroundColor: 'white',
      margin:20,
      height:200,
      borderRadius:5,
      padding:20,
      paddingTop:40,

    },

    row:{
      flexDirection: 'row',
      marginBottom:10
    },

      statuslogin: {
      backgroundColor: '#323255',
      flex: 1
    },

  
    headerWrapper: {
      marginBottom: 30, 
    },
     headerWrapperS: {
      backgroundColor:'red', 
    },
    headerWrapperCotizar: {
      marginBottom: 0, 
    },
    header_SearchWrapper: {
        backgroundColor: '#F3F6FF',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
        marginTop: 15,
        marginLeft:40
    },

    resultado: {
        flexDirection: 'row',
        marginRight:25,


    },
    inputFondo: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
        marginTop: 15,
        marginHorizontal: 40,
        marginLeft:40,
        marginRight:40,

    },
    
    header_SearchInput: {
        ...fonts.medium,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
        width:160,
        color:'#14132A',

    },
     input: {
        ...fonts.medium,
        marginLeft: 10,
        fontSize: 16,
        color:'#14132A',
        width:200
    },
    navigation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 30,
      backgroundColor: '#fff'
    },
        navigationCotizar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 30,
    },
    profileOption: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 0,
      paddingTop: 30,
    },

    navigationProfile: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
     botonpoliza: {
      textAlign: 'center',
      borderRadius:30,
      backgroundColor:'red',
      height:40, 
      width:220,
      fontSize:25,
    },
      botoncontenedor: {
      marginTop:20,
      borderRadius:5,
      backgroundColor:'#FCAB00',
        marginLeft:40,
        marginRight:40,
     
    },
    botoncontenedorazul: {
      marginTop:20,
      marginLeft:40,
      marginRight:40,
      borderRadius:15,
     
    },

      botoncontenedorvehicle: {
      marginTop:16,
      borderRadius:5,
      backgroundColor:'#FCAB00',
        marginLeft:40,
        marginRight:40,
     
    },

   visibilityoff:{
      opacity:0,
    },

    visibilityon:{
      opacity:100,
    }, 

    boto:{
     textAlign: 'center', 
    },

    logocontenedor: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    },

    logod: {
      height: 40,
      width: 100,
      resizeMode: 'contain',
      alignItems: 'center',
      marginTop:-40,

    },

    avatar: {
      height: 40,
      width: 40,
      resizeMode: 'contain',
    },

    profileCabecera:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    marginTop:40,
    },

    avatarprofile: {
      height: 100,
      width: 100,
      resizeMode: 'contain',
    },
    textotitulo: {
      ...fonts.bold,
      color: 'white',
      fontSize: 24,
      textAlign: 'center'
    },
     textodescripcion: {
      ...fonts.regular,
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      marginTop: -80
    },

    boton:{
      ...fonts.bold,
      color:'white',
      padding:8,
      textAlign:'center',
      backgroundColor:'#4ad295',
      fontSize:15,

    },

    infocontenedor: {
     position:'absolute',
     left:0,
     right:0,
     bottom: 0,
     height:200,
     padding:20

    },
      logo: {
      height: 220,
      width: 220,
      resizeMode: 'contain',
      marginTop: -200

    
    },
      lottie: {
      alignItems:'center',

    },
    greatingWrapper: {
      paddingVertical: 30,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      paddingBottom: 10
    },
    greatingWrapperPolizas: {
      paddingVertical: 30,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      paddingBottom: 10
    },
    nameWrapper: {
      ...fonts.regular,
      color: '#808080'
    },

    subtitulo: {
      ...fonts.bold,
      color: '#14132A'
    },
     subtituloblanco: {
      ...fonts.bold,
      color: 'white'
    },
    dayWrapper1: {
      ...fonts.bold,
      color: '#14132A',
      fontSize: 20,
      textAlign:'center',
    },
        dayWrapper2: {
      ...fonts.bold,
      color: '#14132A',
      fontSize: 16,
    },
    dayWrapper3: {
      ...fonts.bold,
      color: '#14132A',
      fontSize: 16,
      textAlign:'center',
    },
     dayWrapperDetalle: {
      ...fonts.bold,
      color: '#14132A',
      fontSize: 16,
    },
    dayWrapper: {
      ...fonts.bold,
      color: '#14132A',
      fontSize: 24
    },
    nombreProfile: {
      ...fonts.bold,
      color: '#14132A',
      fontSize: 24,
      textAlign:'center',
      alignItems: 'center',
      marginTop:50,

    },

    emailProfile:{
       ...fonts.regular,
      color: '#808080',
      textAlign:'center',
    },

    versionProfile:{
       ...fonts.regular,
      color: '#808080',
      textAlign:'center',
      marginTop:60,
    },


    cerrarProfile:{
       ...fonts.regular,
      color: '#ff3c71',
      marginTop:20,
      textAlign:'center',
    },

    dateWrapper: {
      ...fonts.regular,
      color: '#808080',
      fontSize:14,
      
    },
     dateWrapperresultado: {
      ...fonts.regular,
      color: '#808080',
      textAlign:'center',
      marginLeft:-15
    },
    dateWrapperPagos: {
      ...fonts.regular,
      color: '#808080',
      textAlign: 'left',
      paddingHorizontal:20,
      paddingBottom:25
    },
    menuWrapper: {
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 40,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      marginBottom:-10,

    },
     menuWrapperPoliza: {
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 20,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      marginBottom:-10,
    },
      menuWrapperPago: {
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 40,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100
    },
    menuItem: {
      ...fonts.regular,
      fontSize: 12,
      paddingHorizontal: 18,
      color: '#808080',
      paddingVertical: 10
    },
    menuItemActive: {
      ...fonts.bold,
      color: '#14132A',
      borderColor: '#eee',
      borderWidth: 1,
      borderRadius: 5,
    },

    cardWrapper: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
       cardWrapper1: {
        marginHorizontal: 20,
        marginBottom: 10,
    },
    cardBodyHome: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
        

    },
    cardBody: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 15,
        borderBottomWidth: 5,
        borderBottomColor: '#808080'
    },
    cardBody1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        borderWidth:1,
        borderColor:'#e5e5e563'
    },
    cardLogoBackground: {
        backgroundColor: '#F2F6FF',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        marginRight: 15
    },
    cardLogo: {
        height: 43,
        width: 43,
        resizeMode: 'contain'
    },
    cardTextTitle: {
        ...fonts.bold,
        color: '#14132A',
        fontSize: 15
    },
       cardTextTitle2: {
        ...fonts.bold,
        color: 'white',
        fontSize: 14,
        marginTop:2,
        textAlign:'center',
    },
     cardTextTitle1: {
        ...fonts.bold,
        color: '#14132A',
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'center'

    },
    cardTextDate: {
        ...fonts.regular,
        color: '#808080',
    },
      cardTextDate2: {
        ...fonts.regular,
        color: '#808080',
        fontSize:10,
    },
       cardTextDate1: {
        ...fonts.regular,
        color: '#808080',
        marginBottom:10,
    },
    cardBorderBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '50%',
        height: 5,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
  cardBorderBottom1: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '50%',
        height: 25,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop:105,
    },
    bottomNavigation: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    bottomMenuItem: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20
    },
    bottomMenuItemActive: {
        backgroundColor: '#F2F6FF'
    },
    bottomMenuItemText: {
        ...fonts.regular,
        color: '#14132A',
        marginLeft: 10
    },
    detalles: {
        marginTop:-70,
        marginLeft: '90%',
        backgroundColor: '#5680ff',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
      detalles1: {
        marginTop:'-12%',
        marginLeft: '75%',
        backgroundColor: '#5680ff',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    scrollView: {
      marginBottom:100,
    },
     scrollView1: {
      marginBottom:0,
    }

});







export default styles;