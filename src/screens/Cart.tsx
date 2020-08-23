import React, {useEffect, useState} from 'react'
import {View, ScrollView, StyleSheet, Text} from 'react-native'

//Redux
import {connect} from 'react-redux'
import {removeProductFromCart, changeProductQuantityCart} from './../actions/products'

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        cart: state.products.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProductFromCart: (id: string) => dispatch(removeProductFromCart(id)),
        changeProductQuantityCart: (id: string, amount: number) => dispatch(changeProductQuantityCart(id, amount))
    }
}

//constants
import colors from './../constants/colors'

//Components
import ItemCheckout from './../components/ItemCheckout'

const Cart = (props) => {

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let price = 0
    
        props.cart.map((obj) => {
            const checkoutProduct = (props.products.filter((product) => product.id == obj.id))[0]
            price = price + (obj.quantity * checkoutProduct.price)
        })

        if (price != totalPrice) setTotalPrice(price)
    })

    return (
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.screen}>
                <View style={styles.itemListContainer}>
                    {props.cart.map((obj) => 
                        {
                            const checkoutProduct = (props.products.filter((product) => product.id == obj.id))[0]
                            return <ItemCheckout key={checkoutProduct.id} 
                                        image={checkoutProduct.image} 
                                        name={checkoutProduct.name} 
                                        price={checkoutProduct.price} 
                                        priceUnit={checkoutProduct.priceUnit} 
                                        
                                        amount={obj.quantity}
                                        remove={() => props.removeProductFromCart(checkoutProduct.id)}
                                        increseAmount={() => props.changeProductQuantityCart(checkoutProduct.id, 1)}
                                        decreseAmount={() => props.changeProductQuantityCart(checkoutProduct.id, -1)}
                                    />
                        }
                    )}
                </View>
                <View style={styles.priceBorder}><Text style={styles.priceText}>Total price : {totalPrice.toFixed(2)}</Text></View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
    itemListContainer: {
        marginBottom: 40
    },
    priceBorder: {
        width: '100%',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: colors.background_main,
        borderRadius: 20
    },
    priceText: {
        color: colors.background_main,
        fontSize: 18,
        padding: 10
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (Cart)