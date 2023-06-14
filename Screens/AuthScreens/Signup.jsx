import React from 'react'
import { View } from 'react-native'
import AuthBody from '.'
import { Input } from '../../componet'
import { styles } from './styles'

const Signup = ({ navigation }) => {
  return (
    <View>
      <AuthBody
        header={'Sign up'}
        navigation={navigation}
        btnText={'Sign up'}
        elseOption={{ path: 'Login', text: 'Already have an account?' }}
        footerText='Or sign up with social account'
      >
        <View style={styles.form}>
          <Input label={'Name'} />
          <Input label={'Email'} />
          <Input label={'Password'} />

        </View>
      </AuthBody>
    </View>
  )
}

export default Signup