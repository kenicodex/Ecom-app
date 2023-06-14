import React from 'react'
import { View } from 'react-native'
import AuthBody from '.'
import { Input, Typo } from '../../componet'
import { styles } from './styles'

const Login = ({ navigation }) => {
    return (
        <View>
            <AuthBody
                header={'Login'}
                navigation={navigation}
                btnText={'Login'}
                elseOption={{ path: 'ForgotPassword', text: 'Dont have an account?' }}
                footerText='Or login with social account'
            >
                <View style={styles.form}>
                    <Input label={'Email'} />
                    <Input label={'Password'} />

                </View>

            </AuthBody>
        </View>
    )
}

export default Login