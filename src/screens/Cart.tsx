import React from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'

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

import ItemCheckout from './../components/ItemCheckout'

const Cart = (props) => {
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (Cart)