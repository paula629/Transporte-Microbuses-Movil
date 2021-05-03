import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated'
import { Icon } from 'react-native-elements'
import { DrawerActions } from '@react-navigation/routers';



function Slidebar({ progress, ...props }) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0]
  });
  return (
    <View style={{ flex: 2, flexDirection: 'column', backgroundColor: `#d9e0ef` }}>
      <View style={{ flex: 0.16, flexDirection: 'column', backgroundColor: '#20489f' }}>
        <Text style={styles.texto}>
          Súbete a la Micro
           </Text>

      </View>
      <View style={{ flex:0.08, flexDirection: 'row', backgroundColor: `#d9e0ef`}}>
        <Icon type='ionicon' name='menu-outline' color='#20489f' size={35}
          style={{ marginTop: 25 }}
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())} />
        <Text style={styles.TextoBusqueda}>
          Inicio </Text>
      </View>
      <DrawerContentScrollView {...props}>
        <Animated.View style={{ transform: [{ translateX }] }} >
          <DrawerItemList {...props} />

        </Animated.View>
      </DrawerContentScrollView>


    </View>
  );
}
export default Slidebar;

const styles = StyleSheet.create({
  texto: {
    fontSize: 22,
    color: '#ffba5c',
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 80,
    padding: 22,
    marginLeft: 50

  },
  icon: {

    right: 1,
    padding: 2,
    marginRight: 10

  },
  TextoBusqueda: {
    fontSize: 15,
    color: '#20489f',
    textAlign: 'left',
    lineHeight: 30,
    padding: 1,
    marginLeft: 15
  }
})