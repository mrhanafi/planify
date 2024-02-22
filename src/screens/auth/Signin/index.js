import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Image, Text, View,SafeAreaView, Alert } from 'react-native';
import style from './style';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Input from '../../../components/Input';

const Signin = ({navigation}) => {
    const [values, setValues] = useState({});

    const onChange = (value, key) => {
        setValues((vals) => ({
            ...vals,
            [key] : value
        }))
    }

    const onSubmit = () => {
        auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => {
                console.log('User signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {

                Alert.alert('That email address is already in use!');
                }else if (error.code === 'auth/invalid-email') {
                Alert.alert('That email address is invalid!');
                }else{
                    // console.error(error);
                    Alert.alert(error.message);
                }

            });
    }

    return (
        <SafeAreaView style={style.container}>
            <Title>Welcome Back!</Title>

            <Input placeholder="Email" keyboardType="email-address" onChangeText={(val) => onChange(val,'email')} />
            <Input placeholder="Password" secureTextEntry onChangeText={(val) => onChange(val,'password')}/>
            <Button onPress={onSubmit}>Log In</Button>
            <Text style={style.footerText}>
                Not Registered?
                <Text onPress={() => navigation.navigate('Signup')} style={style.footerLink}>Sign Up!</Text>
            </Text>
        </SafeAreaView>
    );
};

export default React.memo(Signin);