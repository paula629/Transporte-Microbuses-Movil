import React from 'react'
import BusquedasDireccion from '../Screens/BusquedasDireccion'
import BusquedasLineas from '../Screens/BusquedasLineas'
import BusquedasPorLugar from '../Screens/BusquedasPorLugar'
import BusquedasPorCategorias from '../Screens/BusquedasPorCategorias'
import VerMicrobuses from '../Screens/VerMicrobuses'
import AcercaDe from '../Screens/AcercaDe'
import { createDrawerNavigator } from '@react-navigation/drawer';


import Slidebar from '../MenuPersonalizado';


const Drawer = createDrawerNavigator();
export default function Navigator() {

    return (


        <Drawer.Navigator drawerContent={(props) => <Slidebar {...props} />}>
            <Drawer.Screen 
                name="Buscar por Dirección"
                component={BusquedasDireccion}


            />

            < Drawer.Screen
                name="Buscar por Líneas"
                component={BusquedasLineas}


            />
            < Drawer.Screen
                name="Buscar por Nombre del Lugar"
                component={BusquedasPorLugar}


            />
            < Drawer.Screen
                name="Buscar Lugares por Categorías"
                component={BusquedasPorCategorias}


            />
             < Drawer.Screen
                name="Ver Microbuses"
                component={VerMicrobuses}


            />
             < Drawer.Screen
                name="Acerca de"
                component={AcercaDe}


            />
            
        </Drawer.Navigator>


    );

}

