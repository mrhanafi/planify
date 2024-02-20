import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import style from './style';

const Button = ({children ,type, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[style.container,type === 'blue' ? style.blueBg : {}]}>
            <Text style={style.text}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default React.memo(Button);