import React,{useState} from 'react'
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants/theme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginScreen = (props) => {
    const [phoneNumber,setPhoneNumber] = useState()
    const [focusInput,setFocusInput] = useState(true)

    const onChangePhone = () => {

    }

    return (
        <View style={styles.container}> 
            {/* <MaterialCommunityIcons name="cellphone-android" size={100} color={COLORS.red} style={{alignSelf:'center'}}/>
            <Text style={{textAlign:'center',...FONTS.h1,margin:SIZES.margin}}>Sign up to keep ordering amazing food!</Text>
             */}
            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                
                style={styles.containerAvoidingView}
            >
                <Text style={styles.textTitle}>Add your phone number. We'll send you a verification code so we know you're real.</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.openDialogView}> 
                        <Text style={{...FONTS.body2}}>{"+91"}</Text>
                    </View>
                    <TextInput 
                        style={styles.input}
                        placeholder="8959210749"
                        keyboardType="numeric"
                        value={phoneNumber}
                        onChangeText={(value) => {setPhoneNumber(value)}}
                        secureTextEntry={false}
                        onFocus={() => setFocusInput(true)}
                        onBlur={() => setFocusInput(false)}
                    />
                </View>

                <View style={styles.viewBottom}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Otp")}>
                        <View style={[styles.button,{backgroundColor:phoneNumber?COLORS.red:COLORS.gray}]}>
                        <Text style={{...FONTS.h2,color:COLORS.white}}>SEND OTP</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default LoginScreen
