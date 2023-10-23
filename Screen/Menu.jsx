import React from 'react'

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'

export default function Menu ({navigation}) {
    return (
        <View>
            <Text>Page Menu</Text>
            <TouchableOpacity onPress={ () => {navigation.navigate('Test')}}>
                <Text>To Test</Text>
            </TouchableOpacity>
        </View>
    )
}