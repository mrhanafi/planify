import React, { useState } from 'react';
import {  ActivityIndicator, Alert, Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Categories from '../../../components/Categories';
import { categories } from '../../../constants/categories';
import DateInput from '../../../components/DateInput';
import Button from '../../../components/Button';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setToUpdate } from '../../../store/tasks';

const AddTask = ({navigation}) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState();
    const [deadline,setDeadline] = useState(new Date());
    const [loading,setLoading] = useState(false);

    const handleBack = () => {
        navigation.goBack()
    }

    const onSubmit = () => {
        const today = moment(new Date()).format('YYYY-MM-DD');
        const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
        if(!title) {
            Alert.alert('Please enter Task title');
            return;
        }

        // if(moment(deadlineFormatted).isBefore(today)) {
        //     Alert.alert('Please enter future date');
        //     return;
        // }
        
        setLoading(true);
        firestore()
        .collection('Tasks')
        .add({
            title,
            deadline,
            category,
            checked: false,
            userId: user?.uid,
        })
        .then(() => {
                setLoading(false);
                dispatch(setToUpdate());
                navigation.navigate('Tasks');
                console.log('Task added!');
                setTitle('');
                setDeadline(new Date());
                setCategory(null);
            }).catch(e => {
                console.log('error when adding task > ',e);
                setLoading(false);
                Alert.alert(e.message)
            });
    }

    return (
        <SafeAreaView style={style.container}>
            <Pressable style={style.backContainer} onPress={handleBack} hitSlop={8}>
                <Image style={style.backIcon} source={require('../../../assets/back.png')} />
            </Pressable>

            <ScrollView>
                <Title type={'thin'}>Add New Task</Title>

                <Text style={style.label}>Describe the Task</Text>
                <Input value={title} onChangeText={setTitle} outlined placeholder={'Type Here...'} />

                <Text style={style.label}>Type</Text>
                <Categories catItem={categories} selectedCategory={category} onCategoryPress={setCategory} />

                <Text style={style.label}>Deadline</Text>
                <DateInput value={deadline} onChange={setDeadline} />

                {loading ? (
                    <ActivityIndicator />
                ) : (
                    <Button styleProp={style.button} type={'blue'} onPress={onSubmit}>Add the Task</Button>
                )}
            </ScrollView>
            


        </SafeAreaView>
    );
};

export default React.memo(AddTask);