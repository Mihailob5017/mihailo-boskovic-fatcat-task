import React, { useState } from 'react';
import { IFormErrors, IFormGeneratorProps, IFormValues } from './types';

const FormGenerator: React.FC<IFormGeneratorProps> = ({
    renderForm,
    validationSchema,
    APICall,
}) => {
    const [values, setValues] = useState<IFormValues>({});
    const [errors, setErrors] = useState<IFormErrors>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const parsedValues = validationSchema.safeParse(values);
        if (!parsedValues.success) {
            console.log(parsedValues);
            const { error } = parsedValues;
            const parsedError = JSON.parse(error);
            const { message, path } = parsedError[0];
            setErrors({ ...errors, [path]: message });
        } else {
            APICall(values);
        }
    };

    const handleChange = (name: string, value: string) => {
        setValues({ ...values, [name]: value } as IFormValues);
        if (!(name in errors)) return setErrors({ ...errors, [name]: '' });
        setErrors({ ...errors, [name]: '' });
    };

    return (
        <div>
            {renderForm({
                state: { values, handleChange },
                errors: errors,
                submit: handleSubmit,
            })}
        </div>
    );
};

export default FormGenerator;
