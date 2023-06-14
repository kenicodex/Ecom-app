import React from 'react'
import { TextInput, View } from 'react-native'
import { Typo } from './Texts'
import { StyleSheet } from 'react-native'

const Input = ({ onChangeText = () => null, value, placeholder, keyboardType, label }) => {
    const styles = StyleSheet.create({
        container: {
            height: 64,
            padding: 10,
            backgroundColor:'white',
            
        },
        field:{
            fontSize:20,
            fontWeight:'700'
        }
    })
    return (
        <View style={styles.container}>
            <Typo color='grey' size={12}>
                {label}
            </Typo>
            <TextInput
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                cursorColor={'black'}
                style={styles.field}
            />
        </View>
    )
}


export { Input }