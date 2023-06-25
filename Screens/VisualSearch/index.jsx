import React, { useState } from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import OpenCamera from './openCamera'
import Camera from './camera'
import SafeArea from '../../componet/SafeArea'

const VisualSearch = ({ navigation, children }) => {
    const [screen, setScreen] = useState(<OpenCamera />)
    return (
        <SafeArea>
            <View style={styles.body}>


                {/* {screen} */}
                <Camera />
            </View>
        </SafeArea>
    )
}

export default VisualSearch