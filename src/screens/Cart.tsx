import React from 'react'
import {View, StyleSheet} from 'react-native'

import ItemCheckout from './../components/ItemCheckout'

const Cart = (props) => {
    return (
        <View style={styles.screen}>
            <View style={styles.itemListContainer}>
                <ItemCheckout />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
    itemListContainer: {
        marginBottom: 40
    }
})

export default Cart