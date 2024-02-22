import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Title from '../Title';
import style from './style';
import { useNavigation } from '@react-navigation/native';


const Header = ({title}) => {

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <View style={style.container}>
            <Pressable onPress={openDrawer} hitSlop={8}>
                <Image style={style.icon} source={require('../../assets/menu.png')} />
            </Pressable>
            <Text style={style.title}>{title}</Text>
            <View style={style.icon}>

            </View>
        </View>
    );
}

export default React.memo(Header);