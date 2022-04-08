import React from 'react';
import {StyleSheet,View,TextInput,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';

function TextInputField({icon,...otherProps}) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholderTextColor={'grey'}
                fontSize={20}
                {...otherProps}
            />
            <TouchableOpacity style={styles.icon}>
                {icon && <Entypo name={icon} size={20} color={'#000'}/>}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 10,
        width: '90%',
        padding: 10,
    },
    input: {
        flex: 1,
        fontSize: 22,
        color: 'grey',

    },
    icon: {
        alignSelf: 'flex-end',
    }
})

export default TextInputField;