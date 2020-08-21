import React, {useEffect} from 'react'
import {View, ScrollView, StyleSheet} from 'react-native'

//Redux
import {connect} from 'react-redux'
import {getProducts, setReloadProducts} from './../actions/products'

const mapStateToProps = (state) => {
    return {
        token: state.authentication.token,
        products: state.products.products,
        productsErrors: state.products.productsErrors,
        reloadProducts: state.products.reloadProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (token: string) => dispatch(getProducts(token)),
        setReloadProducts: (status: boolean) => dispatch(setReloadProducts(status))
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
        <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.screen}>
                <View style={styles.itemListConatiner}>
                    {props.products.map((obj) => 
                        <ItemCard key={obj.id} name={obj.name} image={obj.image} price={obj.price} priceUnit={obj.priceUnit} added={false}/>
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