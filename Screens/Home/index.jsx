import React from 'react'
import { View } from 'react-native'
import { homeStyles } from './styles'
import { Btn, Typo } from '../../componet'

const Home = ({ navigation }) => {
    return (
        <View style={homeStyles.body}>
            <Typo weight='700' size={50}>Welcome</Typo>
            <Btn title='Join us' radius={100} onPress={() =>
                navigation.navigate('Signup', { name: 'Jane' })
            } />
        </View>
    )
}

export default Home