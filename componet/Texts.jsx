import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const Typo = ({
    children,
    color = '#000000',
    weight = '400',
    size = 14,
    width = '100%',
    align = 'left',
    ...extras
}) => {
    const styles = StyleSheet.create({
        textStyles: {
            color,
            fontWeight: weight,
            fontSize: size,
            textAlign: align,
            ...extras
        }
    })
    return <Text style={styles.textStyles}>{children}</Text>
}