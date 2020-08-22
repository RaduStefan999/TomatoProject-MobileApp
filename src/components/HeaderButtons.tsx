import React, {useState} from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
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

//Components
import LogoutModal from './../components/LogoutModal'

const HeaderButtons = (props) => {

    const [openLogoutModal, setOpenLogoutModal] = useState(false)

    const logoutHandler = () => {
        setOpenLogoutModal(false)
        props.logout(props.token)
    }

    const navigation = useNavigation()

    return (
        <View style={{flexDirection: 'row', marginRight: 15}}>
            <LogoutModal visible={openLogoutModal} onLogout={logoutHandler} onCancelLogout={() => setOpenLogoutModal(false)}/>

            <TouchableOpacity style={{marginRight: 25}} onPress={() => navigation.navigate(props.navigateToTab)}>
                <View style={styles.cart}>
                    {(props.cart.length > 0 && props.displayNumberOfItems) &&
                        <View style={styles.itemsNumber}>
                            <Text style={styles.itemsNumberText}>{props.cart.length}</Text>
                        </View>
                     }
                    <FontAwesome name={props.icon} size={30} color="white" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenLogoutModal(true)}><FontAwesome name="sign-out" size={30} color="white" /></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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