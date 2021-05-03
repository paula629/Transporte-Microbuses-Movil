import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { DrawerActions } from '@react-navigation/routers';

export default function AcercaDe({ ...props }) {

    return (
        <View style={{ flex: 3 }}>

            < View style={{ flex: 0.16, backgroundColor: '#20489f' }}>
                <Text style={styles.texto}>
                    Súbete a la Micro
                 </Text>

            </View>

            <View style={styles.titulo}>
                <Icon type='ionicon' name='menu-outline' color='#20489f' size={35}
                  style={styles.icon}
                    onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />

                <Text style={styles.TextoBusqueda}>
                    Acerca de </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: '#20489f' }}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    titulo: {
        flex: 0.047,
        backgroundColor: `#d9e0ef`,
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        width: 400,
        height: 300,
        padding: 10,

    },
    TextoBusqueda: {
        fontSize: 15,
        color: '#20489f',
        textAlign: 'center',
        lineHeight: 30,
        padding: 1, 
        marginLeft: 15
    },
    icon: {

        right: 5,
        padding: 10,
        marginRight:20
    
    
      }
})