import React from 'react'
import { View } from 'react-native'
import { shopStyles } from './styles'
import { Btn, Typo, Layout } from '../../componet'

const Shop = ({ navigation }) => {
    return (
        <Layout style={shopStyles.body} name={'Category'}>

            <View style={shopStyles.tabs}>
                <View>
                    <Typo >
                        Page Under Contruction
                    </Typo>
                </View>
            </View>
            <View >

            </View>
        </Layout>
    )
}

export default Shop