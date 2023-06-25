import { StyleSheet } from "react-native";

export const mainpage = StyleSheet.create({
   
    body: {
        paddingTop: 400,
        paddingHorizontal: 10,
        color: 'white',
        position: 'relative',
        zIndex: 100,
    },

    image: {
        height: 600,
        width: '100%',
        position: 'absolute',
        zIndex: -1
    },
    whiteSection: {
        paddingTop: 40,
        paddingBottom: 100,
        position: 'relative',
        zIndex: 100
        // height:500
    },
    scrollView: {
        display: 'flex',
        flexDirection: 'row',
        gap: 24
    }
})