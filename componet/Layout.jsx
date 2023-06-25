import * as React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import App_Bar from './AppBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Typo } from './Texts';
import ArrowBack from 'react-native-vector-icons/Ionicons';
import Search from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const Layout = ({ children, name = false , }) => {
    const { goBack } = useNavigation()
    const { height } = Dimensions.get('window')
    const { bottom, top } = useSafeAreaInsets();
    return (
        <View style={{
            height,
            width: '100%'
        }}>
            {name && <View style={{
                // position: 'absolute',
                // top: 0,
                height: 50,
                width: '100%',
                // backgroundColor: 'none',
                display: 'flex',
                flexDirection: 'row',
                marginTop: top,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10
            }}>
                <ArrowBack name="arrow-back" size={30} color="#000000" onPress={() => goBack(-1)} />
                <Typo size={24} weight='700' >{name}</Typo>
                <Search name="search" size={30} color="#000000" />

            </View>}
            <ScrollView>
                {children}
            </ScrollView>
            <View style={{ paddingBottom: bottom }} />
            <App_Bar />
        </View>
    );
};


export { Layout };