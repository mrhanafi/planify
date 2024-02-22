import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Title from '../Title';
import style from './style';
import { useNavigation } from '@react-navigation/native';


const PlusIcon = ({title}) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('AddTask');
    }

    return (
            <Pressable style={style.container} onPress={onPress} hitSlop={8}>
                <Text style={style.plus}>+</Text>
            </Pressable>
    );
}

export default React.memo(PlusIcon);