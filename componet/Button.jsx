import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'


const Btn = ({
    onPress = () => null,
    color = '#DB3022',
    title = 'Btn text',
    radius = 4,
    textColor = 'white',
    width = 'auto'
}) => {
    const styles = StyleSheet.create({
        btnstyle: {
            color: 'green',
            paddingVertical:15,
            paddingHorizontal:32,
            borderRadius:radius,
            backgroundColor:color,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',  
            width ,
            cursor:'pointer'
        },
        text :{
            color:textColor,
            fontWeight:'600',
            fontSize:16
        }
    })
    return (
        <Pressable style={styles.btnstyle} onPress={onPress}>
        <Text style={styles.text} >{title}</Text>
      </Pressable>
    )
}

export { Btn }