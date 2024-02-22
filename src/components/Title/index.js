import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import style from './style';

const Title = ({children, type}) => {
    return (
        <Text style={style.title, type === 'thin' ? style.thin : {}}>{children}</Text>
    );
};

export default React.memo(Title);