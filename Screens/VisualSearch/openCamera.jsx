import React from 'react'

import { ImageBackground, View } from 'react-native'
import { styles } from './styles'
import { Btn, Header, Typo } from '../../componet'

const OpenCamera = () => {
    return (
        <>
        <Header text='Visual search'/>
            <ImageBackground source={require('../../assets/icon.png')} style={styles.bgimg}>
            </ImageBackground>
            <View style={styles.content}>
                <Typo weight='700' color='white' size={24} align='left' width='100%' marginBottom={16}>
                    Search for an outfit by taking a photo or uploading an image
                </Typo>
                <Btn radius={30} title='Take a photo' width='100%'  />
                <Btn radius={30} title='Upload an image' width='100%' color='inherit' bC={'#FFFFFF'} bS={'solid'} bW={1} />
            </View>
        </>
    )
}

export default OpenCamera