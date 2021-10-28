import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'; 
import { style } from './componentStyle'

const SigninScreen  = ({ navigation }) => {

    
    return (
        <View style={style.mainContainer}>
            <View>
                <Input  label="Email" placeholder='Enter you email'         labelStyle={style.labelstyle}  inputStyle={{ outline: "none" }} containerStyle={style.container} leftIcon={ <Icon name='user' size={24} color='black' /> }/>
                <Input  label="Password" placeholder="Enter you password"   labelStyle={style.labelstyle}  inputStyle={{ outline: "none" }} containerStyle={style.container}  leftIcon = {<FontAwesome name="lock" size={24} color="black" /> }secureTextEntry={true} />
                <Button  buttonStyle={style.signIn} title="SignIn" />
            </View>
            <View style={style.registration}>
                <Text style={style.forgot} onPress = { () => navigation.navigate("SignUp")}>Create Account</Text>
                <Text style={style.forgot} onPress = { () => navigation.navigate("SignIn")}>Forgot Password</Text>
            </View>
        </View>
    )
}



export default SigninScreen