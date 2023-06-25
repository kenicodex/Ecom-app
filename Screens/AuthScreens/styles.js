import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    authBody: {
        // marginTop: 100,
        paddingHorizontal: 20,
        display: 'flex',
        justifyContent: 'space-between',
        // flex:1,
        height
    },
    header: {
        marginTop: 100
    },
    children: {
        // marginTop: 150
    },
    btn: {
        marginTop: 30
    },
    form: {
        display: 'flex',
        gap: 10
    },
    footer: {
        marginBottom: 50,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems:'center'
        // width
    },
    social: {
        display: 'flex',
        flexDirection:"row",
        gap: 20,
    },
    socials: {
        height: 64,
        width: 92,
        borderRadius: 20,
        backgroundColor: 'white',
        marginTop:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
})