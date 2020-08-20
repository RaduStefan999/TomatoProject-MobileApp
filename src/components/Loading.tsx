import React from 'react'
import {ActivityIndicator, Modal, View, StyleSheet} from 'react-native'

import colors from './../constants/colors'

const Loading = (props: any) => {
    return (
        <Modal visible={props.visible} transparent={true}>
            <View style={styles.contrastBackground}>
                <ActivityIndicator size='large' color={colors.background_secondary} animating={props.visible}/>
            </View>
        </Modal>
    )
}

const styles =  StyleSheet.create({
    contrastBackground: {
        flex: 1,
        backgroundColor: colors.contrast,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Loading