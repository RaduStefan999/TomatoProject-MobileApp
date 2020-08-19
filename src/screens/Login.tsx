import React from 'react'
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {LinearGradient} from 'expo-linear-gradient';

//Constants
import colors from './../constants/colors'
import Constants from 'expo-constants'

const Login = (props: any) => {
    return (
        
        <LinearGradient style={{flex: 1}} colors={[colors.background_secondary, colors.background_main]}>
            <View style={styles.screen}>
                <View style={styles.titleSection}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('./../../assets/logo.png')}/>
                    </View>
                    <Text style={styles.title}>Tomato<Text style={{color: colors.big_highlight}}>App</Text></Text>
                </View>
                <View style={styles.inputSection}>
                    <View style={styles.input}><TextInput style={styles.inputField}/></View>
                    <View style={styles.input}><TextInput style={styles.inputField}/></View>
                    <TouchableOpacity><Text style={styles.registerButton}>Nu aveti cont ? Inregistrati-va aici</Text></TouchableOpacity>
                </View>
                
            </View>
        </LinearGradient>


    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        padding: 20
    },

    titleSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputSection: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    logoContainer: {
        width: 200,
        maxWidth: '80%',
        height: 200,

        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: colors.small_highlight,
        borderRadius: 60,

        marginBottom: 20
    },
    logo: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },

    input: {
        width: '80%',
        marginBottom: 20,

    },
    inputField: {
        backgroundColor: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 10,
        borderRadius: 20
    },

    registerButton: {
        color: 'white',
        fontSize: 16
    }
})

export default Login