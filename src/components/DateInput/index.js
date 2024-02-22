import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker'
import style from './style';
import colors from '../../constants/colors';
import moment from 'moment';

const DateInput = ({value, onChange, ...props}) => {
    // const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const onDateOpen = () => {
        setOpen(true)
    }
    return (
        <>
            <TouchableOpacity onPress={onDateOpen} style={style.outlined} >
                <Image 
                resizeMode='contain'
                style={style.icon} 
                source={require('../../assets/datepicker.png')} />
                <Text style={style.text}>{moment(value).format('L') || 'Select Date...'}</Text>
            </TouchableOpacity>
            <DatePicker
                modal
                mode='date'
                open={open}
                date={value}
                onConfirm={(date) => {
                setOpen(false)
                onChange(date)
                }}
                onCancel={() => {
                setOpen(false)
                }}
            />
        </>
        
    );
};

export default React.memo(DateInput);