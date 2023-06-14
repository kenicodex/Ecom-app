import React from 'react'
import { View } from 'react-native'
import AuthBody from '.'
import { Input, Typo } from '../../componet'
import { styles } from './styles'

const ForgotPassword = ({ navigation }) => {
    return (
        <View>
            <AuthBody
                header={'Forgot Password'}
                navigation={navigation}
                btnText={'Send'}
                elseOption={{ path: 'Signup', text: '' }}
                footerText='Or login with social account'
            >
                <View style={styles.form}>
                    <Typo>
                        Please, enter your email address. You will receive a link to create a new password via email.
                    </Typo>
                    <Input label={'Email'} />
                    {/* <Input label={'Password'} /> */}

                </View>

            </AuthBody>
        </View>
    )
}

export default ForgotPassword