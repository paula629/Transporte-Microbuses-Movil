import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import { DrawerActions } from '@react-navigation/routers';


export default function BusquedasPorCategorias({ ...props }) {

    return (
        <ScrollView>
        <View style={{ flex: 7, flexDirection:'column', backgroundColor: '#20489f'}}>

            < View style={{ flex:10, backgroundColor: '#20489f', width:400, height:94 }}>
                <Text style={styles.texto}>
                    Súbete a la Micro
                 </Text>

            </View>

            <View style={styles.titulo}>
                <Icon type='ionicon' name='menu-outline' color='#20489f' size={35}
                    onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}

                />
                <Text style={styles.TextoBusqueda}>
                    Buscar por Categorías </Text>
            </View>
          
            <View style={{
                flex: 1, flexDirection: 'row', backgroundColor: '#20489f', alignContent:
                    'center', alignItems: 'center', width:360, height:580
                    
            }}>
          
                <View style={{
                    flex: 1, flexDirection: 'column', backgroundColor: '#20489f', alignContent:
                        'center', alignItems: 'flex-start'
                }}>
         
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={styles.vista1}>
                            <Icon type='ionicon' name='camera-outline' color='black' size={70}
                                style={styles.icon}
                            />
                            <Text style={styles.Textos}> Cultura </Text>
                        </View>
                        <View style={styles.vista1}>
                            <Icon type='ionicon' name='bed-outline' color='black' size={70}
                                style={styles.icon}
                            />
                            <Text style={styles.Textos}> Hotelería </Text>
                        </View>
                        <View style={styles.Bencina}>
                            <Icon type='material-community' name='gas-station' color='black' size={70}
                                style={styles.icon}
                            />
                            <Text style={styles.textoLargo}> Estación de Bencina </Text>
                        </View>
                        <View style={styles.vista1}>
                            <Icon type='material-community' name='paw' color='black' size={70}
                                style={styles.icon}
                            />
                            <Text style={styles.textoVeterinaria}> Veterinaria </Text>
                        </View>

                    </View>
                
                </View>
         
                <View style={{
                    flex: 1, flexDirection: 'column', backgroundColor: '#20489f', alignContent:
                        'center', alignItems: 'center'
                }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={styles.vista1}>
                            <Icon type='ionicon' name='person-outline' color='black' size={70}
                                style={styles.icon}
                            />
                            <Text style={styles.textoServicio}>Servicios Públicos </Text>
                        </View>
                        <View style={styles.vista1}>
                            <Icon type='ionicon' name='restaurant-outline' color='black' size={70}
                                style={styles.icon}
                            />
                            <Text style={styles.Textos}> Restaurantes </Text>
                        </View>
                        <View style={styles.vista1}>
                            <Icon type='ionicon' name='school-outline' color='black' size={70}
                                style={styles.icon}
                            />
                            <Text style={styles.Textos}> Educación </Text>
                        </View>
                        <View style={styles.vista1}>
                            <Icon type='ionicon' name='medkit-outline' color='black' size={64}
                                style={styles.FarmaciaIcon}
                            />
                            <Text style={styles.textoLargo}> Farmacia </Text>
                        </View>
                        <View style={{width: 119, height:0.9}}>
                            <Icon type='material-community' name='palette-swatch-outline' color='black' size={37}
                                style={styles.verTodasIcon}
                            />
                            <Text style={styles.textoLargo}>Ver Todas </Text>
                        </View>
                    </View>

                </View>
                <View style={{
                    flex: 1, flexDirection: 'column', backgroundColor: '#20489f', alignContent:
                        'center', alignItems: 'flex-end'
                }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={styles.vista1}>
                            <Icon type='ionicon' name='cafe-outline' color='black' size={70}
                                style={styles.icon}
                            />
                            <Text style={styles.textoLargo}> Entretenimiento </Text>
                        </View>
                        <View style={styles.vista1}>
                            <Icon type='material-community' name='basketball' color='black' size={70}
                                style={styles.icon}
                            />
                            <Text style={styles.Textos}> Deporte </Text>
                        </View>
                        <View style={styles.vista1}>
                            <Icon type='material-community' name='cart-arrow-down' color='black' size={70}
                                style={styles.icon}
                            />
                            <Text style={styles.Textos}>Supermercado </Text>
                        </View>
                        <View style={styles.vista1}>
                            <Icon type='material-community' name='pine-tree' color='black' size={70}
                                style={styles.FarmaciaIcon}
                            />
                            <Text style={styles.Textos}> Plazas </Text>
                        </View>

                    </View>

                </View>

            </View>
           
        </View>
        </ScrollView>
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
        flex: 0.1,
        backgroundColor: `#d9e0ef`,
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        width: 400,
        height: 47,
        padding: 10
    
    
    
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
        height: 70,
        width: 100,
        backgroundColor: `#d9e0ef`,
        padding: 1,
        marginVertical: 14,
        marginHorizontal: 8,
        borderColor: '#ffba5c',
        borderWidth: 3,

    },
    vista1: {
        flex: 0.20,
        flexDirection: 'column',
        alignContent: 'flex-start',

        backgroundColor: '#20489f',
        width: 119,
        height: 100
    },

    Textos: {
        fontSize: 15,
        color: '#ffba5c',
        lineHeight: 14,
        textAlign: 'center',

    },
    textoLargo: {
        fontSize: 14.9,
        color: '#ffba5c',
        lineHeight: 14,
        textAlign: 'center',
    },
    Bencina: {
        flex: 0.21,
        flexDirection: 'column',
        alignContent: 'stretch',
        backgroundColor:'#20489f',
        width: 122,
        height: 100
    },
    FarmaciaIcon: {
        height: 70,
        width: 100,
        backgroundColor: `#d9e0ef`,
        padding: 1,
        marginVertical: 19,
        marginHorizontal: 8,
        borderColor: '#ffba5c',
        borderWidth: 3,
    },
    textoServicio: {
        fontSize: 13,
        color: '#ffba5c',
        lineHeight: 13,
        textAlign: 'center',
    },
    textoVeterinaria: {
        fontSize: 15,
        color: '#ffba5c',
        lineHeight: 19,
        textAlign: 'center',
    },
    verTodasIcon: {
        height: 60,
        width: 100,
        backgroundColor: `#dcdcdc`,
        padding: 1,
        marginVertical: 19,
        marginHorizontal: 8,
        borderColor: '#ffba5c',
        borderWidth: 3,
    },

})
