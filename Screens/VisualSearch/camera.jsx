import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Btn, Header, Typo } from '../../componet'
import { Camera, CameraType, FlashMode } from 'expo-camera'
import Slider from '@react-native-community/slider'
import Ionicons from '@expo/vector-icons/Ionicons';

const TakePhoto = ({ navigation }) => {
    const [cameraInstance, setCameraInstance] = useState(null)
    const [permitted, setPermitted] = useState(false)
    const [cameraType, setCameraType] = useState(CameraType.back)
    const [flashMode, setFlashMode] = useState(FlashMode.off)
    const [sliderValue, setSliderValue] = useState(0);
    const [taken, setTaken] = useState()


    useEffect(() => {
        const askAccess = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync()
            if (status === 'granted') setPermitted(true)
        }
        askAccess()
    }, [])

    const changeCamera = () => {
        setCameraType(prev => prev === CameraType.front ? CameraType.back : CameraType.front)
    }

    const flash = () => {
        setFlashMode(prev => {
            if (prev === FlashMode.off) {
                setFlashMode(FlashMode.torch)
            } else if (prev === FlashMode.torch) {
                setFlashMode(FlashMode.auto)
            } else if (prev === FlashMode.auto) {
                setFlashMode(FlashMode.off)
            }
        })
    }
    const take = () => {
        cameraInstance?.takePictureAsync({ onPictureSaved: (photo) => setTaken(photo) })
    }
    // useEffect(() => {
    //     if(cameraInstance) cameraInstance?.takePictureAsync({})
    // }, [cameraInstance])
    return (<>

        {permitted ?
            !taken ?
                <Camera
                    style={styles.camera}
                    ref={(r) => {
                        setCameraInstance(r)
                    }}
                    type={cameraType}
                    flashMode={flashMode}
                    zoom={sliderValue / 10}
                    onPI
                >
                    <Header text='Search by taking a photo' />

                    <View style={styles.cameraControls}>
                        <TouchableOpacity onPress={flash}>
                            <Typo>
                                <Ionicons name="flash" size={32} color="black" />
                                {/* {flashMode === FlashMode.torch ? 'on' : flashMode} */}
                            </Typo>
                        </TouchableOpacity>
                        <Typo><Btn radius={50} onPress={take} title={<Ionicons name="camera" size={32} color="white" /> } /></Typo>
                        <TouchableOpacity onPress={changeCamera}>
                            <Typo><Ionicons name="camera-reverse-outline" size={32} color="black" /> </Typo>
                        </TouchableOpacity>
                    </View>
                    <Slider
                        maximumValue={10}
                        minimumValue={0}
                        style={{ position: 'absolute', top: 300, width: '100%', left: 200, transform: [{ rotate: '270deg' }], }}

                        minimumTrackTintColor="#DB3022"
                        thumbTintColor='#FFFFFF'
                        maximumTrackTintColor="#FFFFFF"
                        step={1}
                        value={sliderValue}
                        onValueChange={
                            (sliderValue) => setSliderValue(sliderValue)
                        }
                    />

                </Camera> : <Image source={taken} style={{ width: '100%', height: '100%' }} />
            : <Typo>You need to allow permission to access camera</Typo>}
    </>

    )
}

export default TakePhoto