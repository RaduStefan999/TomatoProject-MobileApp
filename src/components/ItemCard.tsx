import React from 'react'
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native'

//Constants
import colors from './../constants/colors'

const ItemCard = (props) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.card}>
                <Image style={styles.itemImage} 
                source={{uri: props.image}}
                />
            </View>

            <Text style={styles.itemTitle}>{props.name}</Text>
            <Text style={styles.itemCost}>{props.price}<Text style={{fontSize: 16}}>  {props.priceUnit}</Text></Text>

            {(props.added) ? (
                <View style={styles.pressedContainer}>
                    <Text style={styles.pressedText}>Adaugat in cos</Text>
                </View>
            ) : (
                <TouchableOpacity style={{width: '100%'}} onPress={props.onAdd}>
                    <View style={styles.borderContainer}>
                        <Text style={styles.buttonText}>Adauga</Text>
                    </View>
                </TouchableOpacity>
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 250,
        maxWidth: '100%',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20
    },
    card: {
        width: '100%',
        height: 300,
        backgroundColor: 'white',
        elevation: 14
    },

    itemImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'center'
    },
    itemTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 15
    },
    itemCost: {
        fontSize: 30,
        color: colors.background_main,
        marginBottom: 7
    },

    borderContainer: {
        width: '100%',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: colors.background_main,
        borderRadius: 20
    },
    buttonText: {
        padding: 12,
        color: colors.background_main,
        fontSize: 20
    },

    pressedContainer: {
        width: '100%',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: colors.background_main,
        backgroundColor: colors.background_main,
        borderRadius: 20
    },
    pressedText: {
        padding: 12,
        color: 'white',
        fontSize: 20
    }
})

export default ItemCard