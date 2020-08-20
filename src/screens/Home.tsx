import React from 'react'
import {View, StyleSheet} from 'react-native'

//Components
import ItemCard from './../components/ItemCard'

const Home = (props) => {
    return (
        <View style={styles.screen}>
            <View style={styles.itemListConatiner}>
                <ItemCard added={false}/>
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

export default Home