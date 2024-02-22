import React from 'react';
import auth from '@react-native-firebase/auth';
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
import { Linking, StyleSheet, Text } from 'react-native';
import colors from '../../constants/colors';
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from '../../constants/links';
  
function DrawerContent(props) {
    const {navigation} = props;
    const logout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };
        

    return (
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}

        <Text style={style.link} onPress={() => navigation.navigate('Home')}>Home</Text>
        <Text style={style.link} onPress={() => navigation.navigate('Tasks')}>Tasks</Text>
        <Text style={style.link} onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}>Privacy & Policy</Text>
        <Text style={style.link} onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}>Terms & Conditions</Text>
        <Text style={style.link} onPress={logout}>Log Out</Text>
      </DrawerContentScrollView>
    );
}

const style = StyleSheet.create({
    link: {
        color: colors.black,
        fontWeight: '500',
        fontSize: 15,
        margin: 8,
        marginHorizontal: 16,
    }
});

  export default React.memo(DrawerContent);