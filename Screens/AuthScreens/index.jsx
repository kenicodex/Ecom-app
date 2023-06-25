import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Btn, Typo } from '../../componet'

const AuthBody = ({ children, header, navigation, btnText, btnPress = () => null, footerText = '', elseOption = {} }) => {
  return (
    <View style={styles.authBody}>

      <View style={styles.header}>
        <Typo size={40} weight='700'>{header}</Typo>
      </View>
      <View style={styles.children}>
        {children}

        <View style={styles.btn}>
          <Btn title={btnText} radius={100} onPress={btnPress} />
          <TouchableOpacity onPress={() => navigation.navigate(elseOption.path)}>
            <Typo marginTop={10} align='right' color='grey' >{elseOption.text}</Typo>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Typo align='center' color='grey'>{footerText}</Typo>
        <View style={styles.social}>
          <View style={styles.socials}>
            {/* <Typo>m</Typo> */}
            {/* <Ionicons name="md-checkmark-circle" size={32} color="green" />s */}
            <Image source={{ uri: 'https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227' }} style={{ width: 40, height: 40 }} />
          </View>
          <View style={styles.socials}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' }} style={{ width: 40, height: 40 }} />
            {/* https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png */}
          </View>
        </View>
      </View>
    </View>
  )
}

export default AuthBody