import React, { Component } from 'react'
import { Dimensions, StyleSheet, View, Text, Image, ScrollView } from 'react-native'

const { width, height } = Dimensions.get('window')

class menu extends Component {
    render() {
        return (
            <View>
                <View style={styles.menu}>
                </View>
                <ScrollView style={styles.ScrollContainer}>
                
                </ScrollView>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: 'black'
    },
    text:{
        color: 'red',
        fontSize: 20
    },
    ScrollContainer:{
        width: width/2+59
    },
    items:{
        paddingVertical:20,
        paddingLeft:20,
        marginTop: 5
    },
    itemSelected:{
        borderLeftWidth: 5,
        borderColor: 'red'
    },
    noSelectedItems:{
        paddingVertical:20,
        paddingLeft: 25,
        marginTop: 5
    }
})
export default menu