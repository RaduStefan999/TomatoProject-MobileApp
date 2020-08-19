import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

//Constants
import colors from './../constants/colors'

const AuthInput = (props: any) => {
    return (
        <View style={styles.input}>
            <View style={styles.inputIcon}><FontAwesome name={props.icon} size={24} color={colors.background_main}/></View>
            <TextInput style={styles.inputField} secureTextEntry={props.password} placeholder={props.placeholder} placeholderTextColor="#ffffff"/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20
    },
    inputField: {
        width: '85%',
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,

        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: colors.medium_highlight,
        borderColor: colors.big_highlight,
        borderWidth: 2,
        borderLeftWidth: 0,
        
        color: 'white'
    },
    inputIcon: {
        width: '15%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AuthInput