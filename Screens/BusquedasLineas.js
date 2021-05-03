import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, SafeAreaView, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native'
import MapView, { PROVIDE_GOOGLE } from 'react-native-maps'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
import { DrawerActions } from '@react-navigation/routers';


const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const CONTENT = [{
  isExpanded: false,
  category_name: 'Seleccione',
  subcategory: [
    { id: 0, val: 'Linea 1' },
    { id: 1, val: 'Linea 2' },
    { id: 2, val: 'Linea 3' },
    { id: 3, val: 'Linea 4' },
    { id: 4, val: 'Linea 6' },
    { id: 5, val: 'Linea 7' }
  ]

}];
const ExpandableComponent = ({ item, onClickFunction }) => {
  const [layoutHeight, setmulayoutHeight] = useState(0);
  useEffect(() => {
    if (item.isExpanded) {
      setmulayoutHeight(null);

    } else {
      setmulayoutHeight(0);
    }

  }, [item.isExpanded])

  return (
    <View >
      <TouchableOpacity style={styles.item}
        onPress={onClickFunction}
      >
        <Text style={{ fontSize: 18, color: '#20489f', fontWeight: '400', padding: 10, alignContent: 'center' }}>
          {item.category_name}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden'
        }}
      >
        {
          item.subcategory.map((item) => (
            <TouchableOpacity

              style={styles.content}
            >
              <Text style={styles.text}>
                {item.val}
              </Text>
              <View style={styles.separator} />
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  )
}
const App = ({ ...props }) => {
  const [curentPosition, setCurentPosition] = useState(initialState);
  const [multiSelect, setmultiSelect] = useState(false);
  const [listDataSource, setlistDataSource] = useState(CONTENT);
  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];

    if (multiSelect) {
      array[index]['isExpanded'] = !array[index]['isExpanded'];

    } else {
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
          : (array[placeindex]['isExpanded'] = false)
      );
    }
    setlistDataSource(array)
  }

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
          <Icon type='ionicon' name='menu-outline' color='#20489f' size={35}
            style={styles.icon}
            onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
          />
          <Text style={styles.TextoBusqueda}>
            Buscar por Línea </Text>

        </View>

        <MapView
          provider={PROVIDE_GOOGLE}
          style={{ flex: 0, width: 400, height: 300 }}
          showsUserLocation
          initialRegion={curentPosition}
        />
        <View style={styles.ContenedorImputText}>
          <Text style={styles.textoIngreseLinea}>
            Seleccione Línea
         </Text>
          <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.cont}>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => setmultiSelect(!multiSelect)}
                >
                </TouchableOpacity>
              </View>
              <ScrollView>
                {
                  listDataSource.map((item, key) => (
                    <ExpandableComponent
                      key={item.category_name}
                      item={item}
                      onClickFunction={() => {
                        updateLayout(key)
                      }}
                    />
                  ))
                }
              </ScrollView>
            </View>

          </SafeAreaView>
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
  textoIngreseLinea: {
    fontSize: 20,
    color: '#20489f',
    textAlign: 'center',
    lineHeight: 50,
    padding: 10
  },
  TextoBusqueda: {
    fontSize: 15,
    color:'#20489f',
    textAlign: 'center',
    lineHeight: 30,
    padding: 2
  },
  icon: {

    right: 5,
    padding: 10,
    marginRight:20
  },
  icon2: {

    right: 3,
    padding: 1,
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
  },
  item: {
    backgroundColor: '#ffba5c',
    padding: 5,

  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#ffba5c'
  },
  text: {
    fontSize: 16,
    padding: 10,
    color:'#20489f'

  },
  separator: {
    height: 0.5,
    backgroundColor: 'blue',
    width: '100%'
  },
  cont: {
    flex: 1,

  },
  header: {
    flexDirection: 'row',
    padding: 1,



  }


})

