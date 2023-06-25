import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Typo } from './Texts'
import { Image } from 'expo-image'

const HomeCard = ({ title, images }) => {
    return (
        <View style={styles.card}>
            <View style={styles.new}>
                <Typo color='white' weight='700'>
                    New
                </Typo>
            </View>
            <Image source={images[0]} style={{ height: '100%', borderRadius: 8 }} />
            <View>

            </View>
        </View>
    )
}

export { HomeCard }

const styles = StyleSheet.create({
    card: {
        height: 150, width: 150,
        backgroundColor: 'red',
        borderRadius: 8,
        marginHorizontal: 5,

    },
    new: {
        position: 'absolute',
        top: 10,
        left: 20,
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        zIndex: 100
    }
})