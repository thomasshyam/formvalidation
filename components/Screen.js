import React from 'react';
import {StyleSheet,View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'; 

function Screen({children}){
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#C5E5CB', '#C5E5CB']}
                style={styles.linearContainer}
            />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        top:60,
        // opacity:1,
    },
    linearContainer: {
      justifyContent: 'center',
      borderRadius: 5,
      height: 250,
      width: '100%',
    },
})

export default Screen;