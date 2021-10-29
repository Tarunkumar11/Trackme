import React, {useContext, useState } from 'react'
import { Text, StyleSheet, View, } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button} from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons'; 
import { style } from './componentStyle'
import  { Context as authContext } from '../context/AuthContext'


const SignupScreen  = ( { navigation} ) => {
    const { state, signup }  = useContext(authContext)
    const [email, setEmail] = useState("")
    const [password, setPassword]  = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [ error, setError] = useState(null)
    return (
        
        <View style={style.mainContainer}>
            <View>
                <Input  onChangeText={setEmail}            autoCapitalize="none" autoCorrect={false} value={email}           label="Email" placeholder='Enter you email'                   labelStyle={style.labelstyle}  inputStyle={{ outline: "none" }} containerStyle={style.container} leftIcon = { <Icon name='user' size={24} color='black' /> }/>
                <Input  onChangeText={setPassword}         autoCapitalize="none" autoCorrect={false} value={password}        label="Password" placeholder="Choose your password"           labelStyle={style.labelstyle}  inputStyle={{ outline: "none" }} containerStyle={style.container} leftIcon = {<FontAwesome name="lock" size={24} color="black" /> } secureTextEntry={true} />
                <Input  onChangeText={setConfirmPassword}  autoCapitalize="none" autoCorrect={false} value={confirmPassword} label="Confirm Password" placeholder="Confirm your password"  labelStyle={style.labelstyle}  inputStyle={{ outline: "none" }} containerStyle={style.container} leftIcon = {<FontAwesome name="lock" size={24} color="black" /> } secureTextEntry={true} />
                <Button onPress={() => { signup(email, password) }} buttonStyle={style.signIn}    title="SignIn" />
            </View>
            <View style={style.registration}>
                <Text style={style.forgot} onPress = { () => navigation.navigate("SignIn")}>Back to Sign-in</Text>
            </View>
        </View>

    )
}

export default SignupScreen