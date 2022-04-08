import React from 'react';
import {StyleSheet} from 'react-native';

import TextField from './TextField';

function ErrorScreen({errors,visible}) {
    if (!visible  || !errors) {
        return null;
    }
    return (
        <TextField
            style={styles.errormessage}>
            {errors}
            </TextField>
    );
}

const styles = StyleSheet.create({
    errormessage: {
        color: 'red',
        fontSize: 13,
        marginLeft: 25,
    },   
})

export default ErrorScreen;