import React from 'react'
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'; 

//Constants
import colors from './../constants/colors'

const ItemCheckout = (props) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemImage}>
                <Image style={styles.image} source={{uri: props.image}}/>
            </View>
            <View style={styles.itemDetail}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.price}>{props.price}<Text>{props.priceUnit}</Text></Text>
                </View>
                <View style={styles.actionsContainer}>
                    <TouchableOpacity onPress={props.decreseAmount}><FontAwesome name="minus-square-o" size={26} color="black" /></TouchableOpacity>
                        <View style={{flex: 1}}><Text style={styles.quantityText}>{props.amount}</Text></View>
                    <TouchableOpacity onPress={props.increseAmount}><FontAwesome name="plus-square-o" size={26} color="black" /></TouchableOpacity>
                </View>
            </View>
            <View style={styles.itemButtons}>
                <TouchableOpacity style={{width: '100%'}} onPress={props.remove}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Remove</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    itemContainer: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 120,
        borderRadius: 20,
        padding: 10,
        marginVertical: 10
    },

    itemImage: {
        flex: 0.2
    },
    itemDetail: {
        flex: 0.55,
        paddingHorizontal: 10
    },
    itemButtons: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'center'
    },

    nameContainer: {
        flex: 0.5
    },
    actionsContainer: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },

    name: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    price: {
        marginTop: 5,
        color: 'grey'
    },

    buttonContainer: {
        borderWidth: 2,
        borderColor: colors.background_main,
        borderRadius: 20,
        alignItems: 'center'
    },
    buttonText: {
        padding: 5,
        color: colors.background_main,
        fontSize: 12
    },

    quantityText: {
        alignSelf: 'center',
        color: 'grey',
        fontSize: 20
    }
})

export default ItemCheckout