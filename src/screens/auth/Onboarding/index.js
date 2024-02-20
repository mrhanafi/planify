import React from 'react';
import { Image, Text, View } from 'react-native';
import style from './style';
import Button from '../../../components/Button';

const Onboarding = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={{ flex:1 }}>
                <Image style={style.image} 
                source={require('../../../assets/onboarding.png')} />

                <View style={style.footer}/>
            </View>

            <View style={style.content}>
                <Text style={style.title}> Best Task Management</Text>
                <Text style={style.subtitle}> Get organize by sorting out all your tasks and boost your productivity.</Text>
                <Button onPress={() => navigation.navigate('Signin')}>Log In</Button>
                <Button onPress={() => navigation.navigate('Signup')} type={'blue'}>Get Started</Button>
            </View>
        </View>

    );
};

export default React.memo(Onboarding);