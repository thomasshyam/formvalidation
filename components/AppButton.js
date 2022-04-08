import React from 'react';
import {  Text, StyleSheet, TouchableOpacity  } from 'react-native';



function AppButton({title,onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}  >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#C5E5CB',
        borderRadius:10,
        alignItems  : "center",
        justifyContent: "center",
        alignSelf:"center",
        top:10,
        height:40,
        width:150,
    },
    text:{
        color: "#fff",
        fontSize: 22,
    }
})
export default AppButton;