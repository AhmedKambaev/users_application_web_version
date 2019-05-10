import React from 'react';
import AuthForm from './auth';
import RegForm from './reg';
import './form.scss';


class FormContainer extends React.Component {

    render() {
        const { register, author, authorSubmit, registerSubmit, state, toggleForm } = this.props;
        if(state.reg) {
            return (
                <div className="bg-form">
                    <RegForm registerSubmit={registerSubmit} _toggleForm={toggleForm} register={register} />
                </div>
            );
        }

        return (
            <div className="bg-form">
                <AuthForm authorSubmit={authorSubmit} _toggleForm={toggleForm} author={author} />
            </div>
        );
    }
}

export default FormContainer;