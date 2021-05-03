import React from 'react'
import {
    StyleSheet,
    Image,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const header = props => (
    <View style={style.container}>
        <TouchableWithoutFeedback onPress={() => props.toggle()}>
            <Icon
                name="bars"
                color="white"
                size={25}
                marginHorizontal={50}

            />
        </TouchableWithoutFeedback>
    </View>
)
const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        backgroundColor: 'green',
        paddingHorizontal: 15
    }
})
export default header