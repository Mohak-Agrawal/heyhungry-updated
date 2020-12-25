import React, { useEffect, useRef, useState,useContext } from 'react'
import { View, Text ,Button, StyleSheet, KeyboardAvoidingView, TextInput} from 'react-native'
import { Appbar } from 'react-native-paper';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import {AuthContext} from '../../routes/AuthProvider';
import styles from'./Styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

const OtpScreen = (props) => {

    let textInput = useRef(null)
    const lengthInput = 6
    const [otp,setOtp] = useState("")
    const {login} = useContext(AuthContext);

    useEffect(() => {
      textInput.focus()
    },[])
   

    return (
        <View style={styles.container}>
            <Appbar.Header style={{backgroundColor:COLORS.white,elevation:0}} >
                <Appbar.BackAction onPress={() => {props.navigation.goBack()}} color={COLORS.red}/>
            </Appbar.Header>
            <KeyboardAvoidingView
              keyboardVerticalOffset={50}
              
              style={styles.containerAvoidingView}
            >
              <Text style={{...FONTS.body3,marginVertical:50}}>{"Input your OTP code sent via SMS"}</Text>
              <View>
                <TextInput
                  ref={(input) => textInput = input}
                  onChangeText={(value) => setOtp(value)}
                  style={{width:0,height:0}}
                  value={otp}
                  maxLength={lengthInput}
                  returnKeyType="done"
                  keyboardType="numeric"

                />
                <View style={styles.inputContainer}>
                  {
                    Array(lengthInput).fill().map((data,index) => (
                      <View 
                        key={index}
                        style={styles.cellView}>
                         <Text 
                          style={{...FONTS.body2,textAlign:'center'}}
                          onPress={() => textInput.focus()}
                          >
                            {otp && otp.length > 0 ? otp[index] : ""}
                          </Text>
                      </View>
                    ))
                  }
                  
                </View>
              </View>
              <View style={styles.bottomView}>
                <TouchableOpacity style={styles.button} onPress={() => login()}>
                    <Text style={{...FONTS.h2,color:COLORS.white}}>SUBMIT</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
        </View>
    )
}


export default OtpScreen


