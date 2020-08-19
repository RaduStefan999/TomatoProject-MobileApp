import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

//Constants
import colors from './../constants/colors'

const ErrorDsplay = (props: any) => {
    return (
        <View style={styles.errorScreen}>
            <Text style={styles.errorText}>Error: Email is already in use</Text>
            <Text style={styles.errorText}>Error: Password canot be null</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    errorScreen: {
        width: '80%',
        backgroundColor: 'white',
        padding: 14,
        marginVertical: 40, 
        borderRadius: 20
    },
    errorText: {
        color: colors.background_main
    },
})

export default ErrorDsplay