import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Title from '../Title';
import getStyle from './style';
import { useNavigation } from '@react-navigation/native';


const StatusCard = ({label,count,type}) => {

    const navigation = useNavigation();
    const style = getStyle(type);

    const onPress = () => {
        navigation.navigate('Tasks');
    }

    return (
            <Pressable style={style.container} onPress={onPress} hitSlop={8}>
                <Text style={style.label}>{label}</Text>
                <Text style={style.count}>{count}</Text>
            </Pressable>
    );
}

export default React.memo(StatusCard);