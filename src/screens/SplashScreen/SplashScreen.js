import React,{useContext,useEffect, useState} from 'react'
import { View, Text, ActivityIndicator,SafeAreaView ,Image,Animated} from 'react-native'
import AuthStack from '../../routes/AuthStack'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from '../../routes/AppStack'
import {AuthContext, AuthProvider} from '../../routes/AuthProvider';
import styles from './Styles'
import { FONTS } from '../../constants/theme'


const Splash = () => {

    const [loading,setLoading] = useState(true)
    const {user, setUser} = useContext(AuthContext);

  
    
    useEffect(() => {
        setTimeout(
            () => {
                setLoading(false)
            },2000);
    },[])



    return (
            !loading ? 
                <NavigationContainer>
                    {user ? <AppStack /> : <AuthStack />}       
                </NavigationContainer>
                :
                <View style={styles.container}>
                    <Image source={require('../../assets/images/logo.png')} resizeMode="center"/>
                </View>
            
    )
}

const SplashScreen =() => {
    return(
        <AuthProvider>
            <Splash/>
        </AuthProvider>

    )
}

export default SplashScreen



