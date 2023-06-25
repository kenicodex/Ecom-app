import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { mainpage } from './styles'
import { Btn, Typo } from '../../componet'
import { Image } from 'expo-image'
import { getProducts } from '../../services'
import { HomeCard } from '../../componet/Card'
import { Layout } from '../../componet'
const MainPage = ({ test }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts({ limit: 10 })
            setProducts(data?.products)
        }
        fetchData()
    }, [])

    return (
        <Layout>
            <Image source='https://picsum.photos/seed/696/3000/2000' style={mainpage.image} />
            <View style={mainpage.body}>
                <Typo weight='700' color='white' size={50}>Gadjet</Typo>
                <Typo weight='700' color='white' size={50}> sale</Typo>
                <Btn title='Check' radius={100} width={200} onPress={() =>
                    null
                } />

                <View style={mainpage.whiteSection}>
                    <Typo size={36} weight={700}>
                        New
                    </Typo>

                    <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginVertical: 10 }}>
                        <Typo color='#9B9B9B' >
                            You’ve never seen it before!
                        </Typo>
                        <Typo  >
                            View all {products.length}
                        </Typo>
                    </View>

                    <FlatList
                        style={mainpage.scrollView} horizontal
                        data={products}
                        renderItem={
                            ({ item }) => <HomeCard {...item} />
                        }
                        keyExtractor={(item) => item.title}
                    />
                </View>
            </View>
        </Layout>
    )
}

export default MainPage