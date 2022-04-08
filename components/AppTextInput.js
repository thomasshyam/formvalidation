import React from 'react';
import {useFormikContext} from 'formik';

import TextInput from './TextInput';
import ErrorScreen from './ErrorScreen';

function AppTextInput({name, ...otherProps}) {
    const {handleChange,setFieldTouched,errors,touched} = useFormikContext();
    return (
        <>
            <TextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
            />    
            <ErrorScreen visible={touched[name]} errors={errors[name]}/>
        </>
    );
}

export default AppTextInput;
