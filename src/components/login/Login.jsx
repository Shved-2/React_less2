import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, setSubmitFailed } from 'redux-form'
import { requaried } from '../../utils/validators/validators'
import { createField, Input } from '../common/FormsControl/FormsControl'
import { login } from '../../Redux/authReducer'
import { Redirect } from 'react-router-dom'
import ss from './../common/FormsControl/FormsControl.module.css'

const LoginForm = (handleSubmit, error) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField('Email', 'email', [requaried], Input)}
            {createField('Pasword', 'password', [requaried], Input, { type: "password" })}
            {createField(null, 'rememberMe', [requaried], Input, { type: "checkbox" }, 'remember Me')}

            <div>
                {error &&
                    <div className={ss.formSummaryError}>
                        {error}
                    </div>
                }
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (

        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);