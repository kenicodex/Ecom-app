import { Dimensions, Platform, View } from 'react-native';
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Typo } from './Texts';



const { height } = Dimensions.get('window')
function SafeArea({ children }) {

    const insets = useSafeAreaInsets();
    return (
        <SafeAreaProvider>
            <SafeAreaView  >
                <View>

                {children}
              {/* <Typo> { insets.bottom}</Typo> */}

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default SafeArea