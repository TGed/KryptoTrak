import React from 'react';
import { Formik } from "formik";

function AppForm() {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}
        </Formik>
    );
}

const styles = StyleSheet.create({})

export default AppForm;