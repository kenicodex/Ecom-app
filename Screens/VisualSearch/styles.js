import { Dimensions, Platform, StyleSheet } from "react-native";
const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    body: {
        height,
        width,
    },
    header: {
        // height:30,
        paddingVertical: 10,
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 10
    },
    bgimg: {
        height: '100%',
        width: '100%',
        opacity: .5,
        position: 'absolute',
        backgroundColor: 'black',
        left: 0,
        top: 10
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        paddingHorizontal: 10,
        gap: 10,
        width,
    },
    cameraContainer: {
        height:'100%',
        width,
    },
    camera: {
        display: 'flex', justifyContent: 'space-between', height , width: '100%'
    },
    cameraControls: {
        width: '100%',
        height: Platform.OS === 'ios'?  '17%' : '10%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom:Platform.OS === 'ios'?  50 : 0,
        flexDirection:'row'
        

    }
})