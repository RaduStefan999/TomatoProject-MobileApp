import React, {useState} from 'react'
import {View, Modal, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';

//Redux
import {connect} from 'react-redux'
import {logout} from './../actions/authentiction'

const mapStateToProps = (state) => {
    return {
        cart: state.products.cart,
        token: state.authentication.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (token) => dispatch(logout(token)) 
    }
}

//constants
import colors from './../constants/colors'

const HeaderButtons = (props) => {

    const [openLogoutModal, setOpenLogoutModal] = useState(false)

    const navigation = useNavigation()

    return (
        <View style={{flexDirection: 'row', marginRight: 15}}>
            <Modal visible={openLogoutModal} transparent={true}>
                <View style={styles.logoutModal}>
                    <View style={styles.logoutModalBox}>
                        <Text>Are you sure you want to logout ?</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={{width: '40%'}} onPress={() => {
                                setOpenLogoutModal(false)
                                props.logout(props.token)
                            }}>
                                <View style={{...styles.button, backgroundColor: 'red'}}>
                                    <Text style={{color: 'white'}}>Yes</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '40%'}} onPress={() => setOpenLogoutModal(false)}>
                                <View style={{...styles.button, backgroundColor: 'blue'}}>
                                    <Text style={{color: 'white'}}>No</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.navigate(props.navigateToTab)}>
                <View style={styles.cart}>
                    {(props.cart.length > 0 && props.displayNumberOfItems) &&
                        <View style={styles.itemsNumber}>
                            <Text style={styles.itemsNumberText}>{props.cart.length}</Text>
                        </View>
                     }
                    <FontAwesome name={props.icon} size={26} color="white" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenLogoutModal(true)}><FontAwesome name="sign-out" size={26} color="white" /></TouchableOpacity>
        </View>
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
    },
    itemsNumber: {
        backgroundColor: 'white',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6
    },
    itemsNumberText: {
        fontWeight: 'bold',
        color: colors.background_main
    }, 
    cart: {
        flexDirection: 'row'
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (HeaderButtons)