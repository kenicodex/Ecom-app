import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Btn, Typo } from '../../componet'

const AuthBody = ({ children,header, navigation, btnText, footerText = '', elseOption = {} }) => {
  return (
    <View style={styles.authBody}>

      <View style={styles.header}>
        <Typo size={40} weight='700'>{header}</Typo>
      </View>
      <View style={styles.children}>
        {children}

        <View style={styles.btn}>
          <Btn title={btnText} radius={100} />
          <TouchableOpacity onPress={()=>navigation.navigate(elseOption.path)}>
            <Typo marginTop={10} align='right' color='grey' >{elseOption.text}</Typo>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Typo align='center' color='grey'>{footerText}</Typo>
        <View style={styles.social}>
          <View style={styles.socials}></View>
          <View style={styles.socials}></View>
        </View>
      </View>
    </View>
  )
}

export default AuthBody