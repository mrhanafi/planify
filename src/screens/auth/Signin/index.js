import React from 'react';
import { Image, Text, View,SafeAreaView } from 'react-native';
import style from './style';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Input from '../../../components/Input';

const Signin = ({navigation}) => {
    return (
        <SafeAreaView style={style.container}>
            <Title>Welcome Back!</Title>

            <Input placeholder="Email" keyboardType="email-address"/>
            <Input placeholder="Password" secureTextEntry/>
            <Button>Log In</Button>
            <Text style={style.footerText}>
                Not Registered?
                <Text onPress={() => navigation.navigate('Signup')} style={style.footerLink}>Sign Up!</Text>
            </Text>
        </SafeAreaView>
    );
};

export default React.memo(Signin);