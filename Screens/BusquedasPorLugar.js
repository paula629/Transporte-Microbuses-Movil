import React, { useState, useEffect } from 'react'
import {  StyleSheet, View, Text,  ActivityIndicator } from 'react-native'
import MapView, { PROVIDE_GOOGLE } from 'react-native-maps'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/routers';



const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}
const App = ({...props}) => {
  const [curentPosition, setCurentPosition] = useState(initialState);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      //alert(JSON.stringify(position))
      const { longitude, latitude } = position.coords;
      setCurentPosition({
        ...curentPosition,
        latitude,
        longitude,
      })
    },
      error => alert(error.message),
      { timeout: 20000, maximumAge: 1000 }
    )

  }, [])

  const Drawer = createDrawerNavigator();


  return curentPosition.latitude ? (
    <View style={{ flex: 3 }} >
      <View style={{ flex: 3, backgroundColor:'#20489f'}}>
        <Text style={styles.texto}>
          Súbete a la Micro
           </Text>

      </View>
      <View style={styles.mapa}>
        <View style={styles.titulo}>
          <Icon type='ionicon' name='menu-outline' color= '#20489f' size={35}
            style={styles.icon}
            onPress={()=> props.navigation.dispatch(DrawerActions.openDrawer())}
          />
          <Text style={styles.TextoBusqueda}>
            Buscar por Nombre del Lugar </Text>

        </View>

        <MapView
          provider={PROVIDE_GOOGLE}
          style={{ flex: 0, width: 400, height: 300 }}
          showsUserLocation
          initialRegion={curentPosition}
        />
        <View style={styles.ContenedorImputText}>
          <TextInput
            style={styles.imput}
            placeholder='Ingrese Lugar' 
          />
          <Icon type='ionicon' name='search-outline' color='#00008b'
            style={styles.icon2}

          />

        </View>
      </View>

    </View>

  ) : <ActivityIndicator style={{ flex: 0 }} animating size='large' />


}
export default App


const styles = StyleSheet.create({

  titulo: {
    flex: 0.1,
    backgroundColor: `#d9e0ef`,
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    width: 400,
    height: 300,
    padding: 10



  },
  mapa: {
    flex: 20
  },
  texto: {
    fontSize: 22,
    color: '#ffba5c',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 80,
    padding: 22,
    marginLeft:50
    
  },
  TextoBusqueda: {
    fontSize: 15,
    color: '#20489f',
    textAlign: 'center',
    lineHeight: 30,
    padding:1,
    marginLeft:15
  },
  icon: {

    right: 5,
    padding: 10,
    marginRight:20


  },
  icon2: {

    right: 1,
    padding: 10,
    backgroundColor: `#d9e0ef`,


  },
  imput: {
    borderWidth: 2,
    borderColor: `#d9e0ef`,
    padding: 10,
    margin: 50,
    width: 200,
    backgroundColor: '#ffba5c'
  },
  ContenedorImputText: {
    flex: 1,
    backgroundColor: '#20489f',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',


  
  }
 
})

