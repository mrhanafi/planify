import React, { useState } from 'react';
import { Image, Linking, SafeAreaView, Text, View } from 'react-native';
import style from './style';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import Checkbox from '../../../components/Checkbox';
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../../constants/links';

const Signup = ({navigation}) => {
    const [agreed, setAgreed] = useState(false);

    const onCheckboxPress = () => {
        setAgreed(value => !value);
    }

    const onLinkPress = (url) => {
        Linking.openURL(url);
    }

    return (
        <SafeAreaView style={style.container}>
            <Title>Join the hub!</Title>

            <Input placeholder='First Name' />
            <Input placeholder='Last Name' />
            <Input placeholder='Email' keyboardType="email-address"/>
            <Input placeholder='Password' secureTextEntry />
            <Input placeholder='COnfirm Password' />

            <View style={style.row}>
                <Checkbox checked={agreed} onPress={onCheckboxPress} />

                <Text style={style.agreeText}>
                    I agree to
                    <Text style={style.link} onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}> Terms and Conditions</Text> and
                    <Text style={style.link} onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}> Privacy Policy</Text>
                </Text>

            </View>
            <Button type={'blue'}>Create New Account</Button>

            <Text style={style.footerText}>
                Already Registered?
                <Text onPress={() => navigation.navigate('Signin')} style={style.footerLink}>Sign In</Text>
            </Text>
        </SafeAreaView>
    );
};

export default React.memo(Signup);