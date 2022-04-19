import React from 'react';
import { useFormikContext } from "formik";

import TextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from '../AppTextInput';

function AppFormField({name, width, ...otherProps}) {
    const {
        setFieldTouched,
        setFieldValue,
        errors,
        touched,
        values,
    } = useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                value={values[name]}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;