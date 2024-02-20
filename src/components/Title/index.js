import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import style from './style';

const Title = ({children}) => {
    return (
        <Text style={style.title}>{children}</Text>
    );
};

export default React.memo(Title);