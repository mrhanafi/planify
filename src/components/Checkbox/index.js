import React from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import style from './style';

const Checkbox = ({checked, onPress}) => {
    return (
        <Pressable onPress={onPress} style={[style.container, checked ? style.checkedBox : {}]}>
            {checked ? (
                <View style={style.innerSquare}/>
            ) : null}
        </Pressable>
    );
};

export default React.memo(Checkbox);