import React, {useEffect} from 'react'
import {View, FlatList, StyleSheet} from 'react-native'

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
        <View style={styles.screen}>
            <View style={styles.itemListConatiner}>
                <FlatList data={props.products} 
                keyExtractor={(obj) => (obj.id).toString()} 
                renderItem={(obj) => <ItemCard name={obj.item.name} image={obj.item.image} price={obj.item.price} priceUnit={obj.item.priceUnit} added={false}/>}/>
            </View>
        </View>
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