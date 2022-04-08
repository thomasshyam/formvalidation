import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

function TextField({children, ...otherProps}) {
    return (
        <Text {...otherProps}>{children}</Text>
    );
}

export default TextField;