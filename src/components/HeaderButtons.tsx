import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';

const HeaderButtons = (props) => {

    const navigation = useNavigation()

    return (
        <View style={{flexDirection: 'row', marginRight: 15}}>
            <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.navigate(props.navigateToTab)}><FontAwesome name={props.icon} size={26} color="white" /></TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}><FontAwesome name="sign-out" size={26} color="white" /></TouchableOpacity>
        </View>
    )
}

export default HeaderButtons