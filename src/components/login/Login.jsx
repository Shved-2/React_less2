import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { requaried } from '../../utils/validators/validators'
import { Input } from '../common/FormsControl/FormsControl'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'}
                    component={Input} validate={[requaried]}
                />
            </div>
            <div>
                <Field placeholder={'Pasword'} name={'password'}
                    component={Input} validate={[requaried]}
                />
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'}
                    component={Input}
                    validate={[requaried]}
                /> remember me
                </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (

        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
export default Login;