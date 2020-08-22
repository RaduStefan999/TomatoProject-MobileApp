import React from 'react'
import {View, TouchableOpacity, Modal, Text, StyleSheet} from 'react-native'

const LogoutModal = (props) => {
    return (
        <Modal visible={props.visible} transparent={true}>
            <View style={styles.logoutModal}>
                <View style={styles.logoutModalBox}>
                    <Text>Are you sure you want to logout ?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={{width: '40%'}} onPress={props.onLogout}>
                            <View style={{...styles.button, backgroundColor: 'red'}}>
                                <Text style={{color: 'white'}}>Yes</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: '40%'}} onPress={props.onCancelLogout}>
                            <View style={{...styles.button, backgroundColor: 'blue'}}>
                                <Text style={{color: 'white'}}>No</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    logoutModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000080'
    },
    logoutModalBox: {
        width: '50%',
        minWidth: 250,
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        borderRadius: 20
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-evenly"
    },
    button: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15
    }
})

export default LogoutModal