import React from 'react'
import { StyleSheet, View } from "react-native";
import { Typo } from './Texts';


const styles = StyleSheet.create({
    header: {
        // height:30,
        paddingVertical: 10,
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 10,
        display:'flex',
        justifyContent:'space-between',
        width:'100%'
    },
})
const Header = ({navigation, text= 'Header', leftIcon, rightIcon}) => {
    return (
        <View style={styles.header}>
            <View></View>
            <Typo weight='700' color='black' size={18} align='center'>{text}</Typo>
            <View></View>
        </View>
    )
}


export { Header }