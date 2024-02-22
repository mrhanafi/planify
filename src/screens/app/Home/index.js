import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../../store/tasks';
import StatusCard from '../../../components/StatusCard';
import moment from 'moment';

const Home = ({navigation}) => {

    const user = useSelector(state => state.user.data);
    const tasks = useSelector(state => state.tasks.data);
    const toUpdate = useSelector(state => state.tasks.toUpdate);
    const [counts, setCounts] = useState({});
    const dispatch = useDispatch();

    // console.log('toUpdate>', toUpdate);

    useEffect(() => {
        const subscriber = firestore()
            .collection('Tasks')
            .where('userId','==',user?.uid)
            .get()
            .then(querySnapshot => {
            // console.log('Total Tasks: ', querySnapshot.size);
            const tasksList = [];
        
            querySnapshot.forEach(documentSnapshot => {
                // console.log('Task ID: ', documentSnapshot.id, documentSnapshot.data());
                tasksList.push({uid: documentSnapshot.id, 
                    ...(documentSnapshot.data() || {}),
                });
            });

            dispatch(setTasks(tasksList));
            
        });
      }, [user,dispatch,toUpdate]);

      useEffect(() => {
        if(tasks?.length){
            const today = moment(new Date()).format('YYYY-MM-DD');
            // const deadline = moment(tasks?.deadline).format('YYYY-MM-DD');

            const highPriority = tasks?.filter(task => task?.category === 'urgent' || task?.category === 'important');
            const dueDeadline = tasks?.filter(task => {
                const deadline = task?.deadline?.seconds * 1000;
                const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
                // console.log(today);
              return moment(deadlineFormatted).isBefore(today)
            });
            // console.log(tasks?.filter(task => moment(task?.deadline?.Date).isBefore(today)))
            const quickWin = tasks?.filter(task => task?.category === 'quick_task');

            setCounts({
                highPriority: highPriority?.length,
                dueDeadline: dueDeadline?.length,
                quickWin: quickWin?.length,
            })
        }
      },[tasks]);

    // console.log('redux user >', user);
    return (
        <SafeAreaView style={style.container}>
            <Header title={'Home'} />
            <ScrollView>
                <Title type={'thin'}>Daily Tasks:</Title>

                <View style={style.row}>
                    <StatusCard label={"High Priority"} count={counts?.highPriority} />
                    <StatusCard label={"Due Deadline"} type="error" count={counts?.dueDeadline} />
                    <StatusCard label={"Quick Win"} count={counts?.quickWin} />

                </View>

                <TouchableOpacity style={style.titleContainer} onPress={() => navigation.navigate('Tasks')}>
                    <Text style={style.title}>
                        Check all my tasks
                    </Text>
                    <Text style={style.subtitle}>
                        See all tasks and filter them by categories you have selected when creating them
                    </Text>
                </TouchableOpacity>
            </ScrollView>

            <PlusIcon />

        </SafeAreaView>
    );
};

export default React.memo(Home);