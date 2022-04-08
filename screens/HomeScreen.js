import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity,View, Alert,Keyboard } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Entypo} from '@expo/vector-icons';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import ErrorScreen from '../components/ErrorScreen';
import AppButton from '../components/AppButton';

const validationSchema = Yup.object().shape({
    rewardName: Yup.string().required().label('Reward Name').min(5),
    rewardDescription: Yup.string().required().label('Reward Description').min(5),
    additionalInfo: Yup.string().required().label('Additional Info').min(5),
    kudos: Yup.string().required().label('Kudos').min(2),
    carbon: Yup.string().required().label('Carbon').min(2),
});

function HomeScreen({...otherProps}) {
    const [enteredText, setEnteredText] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    // const [format, setFormat] = useState('YYYY-MM-DD');
    const [text, setText] = useState('Empty');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        let tempDate = new Date(currentDate);
        let formatDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(formatDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
    };

    // const showDatepicker = () => {
    //     showMode('date');
    // };

    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.text}>Sample Form</Text>
                <Formik
                    initialValues={{
                        'rewardName': '',
                        'rewardDescription': '',
                        'additionalInfo': '',
                        'kudos': '',
                        'carbon': '',
                        'date': '',
                    }}
                    onSubmit={(values) => {
                        Alert.alert(
                            'Reward Details',
                            'Reward Name: ' + values.rewardName + '\n' +
                            'Reward Description: ' + values.rewardDescription + '\n' +
                            'Additional Info: ' + values.additionalInfo + '\n' +
                            'Kudos: ' + values.kudos + '\n' +
                            'Carbon: ' + values.carbon + '\n' +
                            'Date Picker: ' + date,
                            [
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                },
                                {
                                    text: 'OK',
                                    onPress: () => console.log('OK Pressed'),
                                },
                            ],
                        );
                    }}
                    validationSchema={validationSchema}
                >
                {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
                    <>
                        <AppTextInput
                            name='rewardName'
                            placeholder='Reward Name'
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={styles.input}
                            keyboardType='default'
                        />
                        <ErrorScreen errorValue={touched.rewardName && errors.rewardName} />
                        <AppTextInput
                            multiline
                            name='rewardDescription'
                            placeholder='Reward Description'
                            autoCapitalize='none'
                            autoCorrect={false}
                            numberOfLines={4}
                            style={styles.input}
                            keyboardType='default'
                        />
                        <ErrorScreen errorValue={touched.rewardDescription && errors.rewardDescription} />
                        <AppTextInput
                            name='additionalInfo'
                            placeholder='Additional Info'
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={styles.input}
                            keyboardType='default'
                        />
                        <ErrorScreen errorValue={touched.additionalInfo && errors.additionalInfo} />
                        <AppTextInput
                            name='kudos'
                            placeholder='Kudos'
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={styles.input}
                            keyboardType='number-pad'
                        />
                        <ErrorScreen errorValue={touched.kudos && errors.kudos} />
                        <AppTextInput
                            name='carbon'
                            placeholder='Carbon'
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={styles.input}
                            keyboardType='number-pad'
                        />
                        <ErrorScreen errorValue={touched.carbon && errors.carbon} />
                        <TouchableOpacity onPress={() => showMode('date')}>
                            <View style={styles.inputContainer} >
                                {text === 'Empty' ? (
                                    <Text style={styles.input}>Valid Till Date</Text>
                                ) : (   
                                    <Text style={styles.input}>{text}</Text>
                                )}
                                <Entypo name='calendar' size={20} color='grey' style={styles.calender} />
                                {show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date}
                                        mode={mode}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange}
                                    />
                                )}
                            </View>
                        </TouchableOpacity>
                        <AppButton
                            title='Save Changes'    
                            onPress={handleSubmit}
                        />
                    </>
                )}
                </Formik>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        alignSelf: 'center',
        top: 40,
        flex: 1,
        width: '85%',
        height: '85%',
        borderWidth: 0.5,
        backgroundColor: '#fff',
        borderColor: 'lightgrey',
    },
    text: {
        fontSize: 24    ,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: '10%',
    },
    input: {
        color: 'grey',
        fontSize: 15,
    },
    inputContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 10,
        width: '90%',
        padding: 10,
    },
    calender: {
        marginLeft: 'auto',
    }
})

export default HomeScreen;