import React from 'react';
import { Image, Text, TextInput, TouchableOpacity } from 'react-native';
import style from './style';
import colors from '../../constants/colors';

const Input = ({outlined, ...props}) => {
    return (
        <TextInput placeholderTextColor={colors.midgrey} 
        style={[style.input, outlined ? style.outlined : {}]} 
        {...props} />
    );
};

export default React.memo(Input);