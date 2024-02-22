import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '../../../components/Checkbox';
import Categories from '../../../components/Categories';
import { categories } from '../../../constants/categories';
import { setTasks, setToUpdate } from '../../../store/tasks';

const Tasks = ({navigation}) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks.data);
    const [category, setCategory] = useState('all');
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        if(category && category !== 'all'){
            const filtered = tasks.filter(task => task?.category === category);
            setFilteredTasks(filtered);
        }else{
            setFilteredTasks(tasks);
        }
    },[category,tasks])

    const onTaskUpdate = (item) => {
        firestore()
            .collection('Tasks')
            .doc(item?.uid)
            .update({
                checked: !item.checked,
            })
            .then(() => {
                // console.log('updated');
                dispatch(setToUpdate());
                // dispatch(setToUpdate({uid:item?.uid,checked:!item?.checked}));
            });
    }

    const renderTask = ({item}) => {
        return (
            <View style={style.row}>
                <Checkbox checked={item.checked} onPress={() => onTaskUpdate(item)} />
                <Text style={[style.taskText, item?.checked ? style.checked : {}]}>{item.title}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={style.container}>
            <Header title={'Tasks'} />

            <FlatList 
            ListHeaderComponent={( 
                <View style={{ marginBottom:24 }}>
                    <Title type={'thin'}>To do Tasks</Title>
                    <Categories catItem={[{label: 'All', value: 'all'}, ...categories]} selectedCategory={category} onCategoryPress={setCategory} />
                </View>
            )}
            data={filteredTasks}
            renderItem={renderTask}
            keyExtractor={item => String(item?.uid)}
            />

      

            <PlusIcon />

        </SafeAreaView>
    );
};

export default React.memo(Tasks);