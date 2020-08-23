import React, {useEffect} from 'react'
import {View, RefreshControl, ScrollView, StyleSheet} from 'react-native'

//Redux
import {connect} from 'react-redux'
import {getProducts, setReloadProducts, addProductToCart} from './../actions/products'

const mapStateToProps = (state) => {
    return {
        token: state.authentication.token,
        products: state.products.products,
        productsErrors: state.products.productsErrors,
        reloadProducts: state.products.reloadProducts,
        cart: state.products.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (token: string) => dispatch(getProducts(token)),
        setReloadProducts: (status: boolean) => dispatch(setReloadProducts(status)),
        addProductToCart: (id: string) => dispatch(addProductToCart(id))
    }
}

//Components
import ItemCard from './../components/ItemCard'

const Home = (props) => {

    useEffect(() => {
        if (props.reloadProducts) {
            props.getProducts(props.token)
            props.setReloadProducts(false)
        }
    })

    return (
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}} refreshControl={
            <RefreshControl refreshing={props.reloadProducts} onRefresh={() => props.setReloadProducts(true)}/>
        }>
            <View style={styles.screen}>
                <View style={styles.itemListConatiner}>
                    {props.products.map((obj) => 
                        <ItemCard key={obj.id}
                            name={obj.name}
                            image={obj.image}
                            price={obj.price}
                            priceUnit={obj.priceUnit}
                            onAdd={() => props.addProductToCart(obj.id)}
                            added={(props.cart.filter((product) => product.id == obj.id)).length > 0}
                        />
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
    itemListConatiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        alignContent: 'center'
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (Home)