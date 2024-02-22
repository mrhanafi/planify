import React, { useState } from 'react';
import { Alert, Image, Linking, SafeAreaView, ScrollView, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import style from './style';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import Checkbox from '../../../components/Checkbox';
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../../constants/links';

const Signup = ({navigation}) => {
    const [agreed, setAgreed] = useState(false);
    const [values, setValues] = useState({});

    const onCheckboxPress = () => {
        setAgreed(value => !value);
    }

    const onLinkPress = (url) => {
        Linking.openURL(url);
    }

    const onSubmit = () => {
        if(!values.first_name || !values.last_name) {
            Alert.alert('Please enter name');
            return;
        }

        if(values.password !== values.confirm_password) {
            Alert.alert('Password do not match');
            return;
        }

        if(!agreed) {
            Alert.alert('You should agree to the terms');
            return;
        }

        auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
                auth().currentUser.updateProfile({displayName: `${values.first_name} ${values.last_name}`});
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                Alert.alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                Alert.alert('That email address is invalid!');
                }

                console.error(error);
            });
    }

    const onChange = (value, key) => {
        setValues((vals) => ({
            ...vals,
            [key] : value
        }))
    }
    console.log('values =>',values)

    return (
        <SafeAreaView style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Join the hub!</Title>

                <Input onChangeText={(val) => onChange(val,'first_name')} placeholder='First Name' />
                <Input onChangeText={(val) => onChange(val,'last_name')} placeholder='Last Name' />
                <Input onChangeText={(val) => onChange(val,'email')} placeholder='Email' keyboardType="email-address"/>
                <Input onChangeText={(val) => onChange(val,'password')} placeholder='Password' secureTextEntry />
                <Input onChangeText={(val) => onChange(val,'confirm_password')} placeholder='COnfirm Password' />

                <View style={style.row}>
                    <Checkbox checked={agreed} onPress={onCheckboxPress} />

                    <Text style={style.agreeText}>
                        I agree to
                        <Text style={style.link} onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}> Terms and Conditions</Text> and
                        <Text style={style.link} onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}> Privacy Policy</Text>
                    </Text>

                </View>
                <Button onPress={onSubmit} type={'blue'}>Create New Account</Button>

                <Text style={style.footerText}>
                    Already Registered?
                    <Text onPress={() => navigation.navigate('Signin')} style={style.footerLink}>Sign In</Text>
                </Text>

            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Signup);