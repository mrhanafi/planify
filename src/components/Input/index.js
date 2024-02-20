import React from 'react';
import { Image, Text, TextInput, TouchableOpacity } from 'react-native';
import style from './style';
import colors from '../../constants/colors';

const Input = ({...props}) => {
    return (
        <TextInput placeholderTextColor={colors.midgrey} 
        style={style.input} 
        {...props} />
    );
};

export default React.memo(Input);