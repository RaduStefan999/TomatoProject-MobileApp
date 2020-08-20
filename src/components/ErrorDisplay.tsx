import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

//Constants
import colors from './../constants/colors'

const ErrorDsplay = (props: any) => {
    return (
        <View style={styles.errorScreen}>
            {props.errors.map((error, index) => <Text style={styles.errorText} key={index}>{error}</Text>)}
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