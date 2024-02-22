import React, { useState } from 'react';
import { FlatList, Pressable, Text, TouchableOpacity, View } from 'react-native';
import style from './style';

const Categories = ({catItem, selectedCategory,onCategoryPress}) => {
    

    return (
    <FlatList 
        horizontal={true}
        data={catItem} 
        // style={{marginHorizontal: 32 }}
        keyExtractor={(item) => String(item?.value)}
        showsHorizontalScrollIndicator={false}
        style={{  marginTop: 12, }}
        renderItem={({item,index}) => {
            const selected = selectedCategory === item?.value;
            const displayName = item?.label;

            return (
                <TouchableOpacity 
                onPress={() => onCategoryPress(item?.value)} 
                style={[style.itemContainer, selected ? style.selectedItemContainer : {}, index === 0 ? {marginLeft: 32} : {}]}>
                    <Text style={[style.item, selectedCategory === item ? style.selectedItem : {}]}>{displayName}</Text>
                </TouchableOpacity>
            );
        }}/>
        // <Text>{catItem}</Text>
    );
};

export default React.memo(Categories);