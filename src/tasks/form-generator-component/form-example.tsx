import React from 'react';
import FormGenerator from './create-form';
import { APICall, formSchema } from './helpers';
import './form.css';
const FormExample: React.FC = () => {
    return (
        <FormGenerator
            validationSchema={formSchema}
            renderForm={({ state, errors, submit }) => (
                <form onSubmit={submit}>
                    <label>Title</label>
                    <input
                        type="text"
                        value={state.values['title']}
                        name="title"
                        onChange={(e) =>
                            state.handleChange(e.target.name, e.target.value)
                        }
                    />
                    {errors['title'] && <p>{errors['title']}</p>}
                    <label>Body</label>
                    <input
                        type="text"
                        name="body"
                        value={state.values['body']}
                        onChange={(e) =>
                            state.handleChange(e.target.name, e.target.value)
                        }
                    />
                    {errors['body'] && <p>{errors['body']}</p>}
                    <button type="submit">Submit</button>
                </form>
            )}
            APICall={APICall}
        />
    );
};

export default FormExample;
