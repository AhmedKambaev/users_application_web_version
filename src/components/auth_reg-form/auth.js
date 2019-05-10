import React from 'react';
import Button from '@material-ui/core/Button';

const styles = {
    submit: {
        color: 'white',
        backgroundColor: '#2196f3',
        float: 'right',
        marginTop: '20px'
    },
    register: {
        float: 'right',
        marginRight: '10px',
        marginTop: '20px'
    }
}

const AuthForm = ({_toggleForm, author, authorSubmit}) => {
    return (
        <div className="form-block">
            <h1 className="text-center italic">Вход</h1>
            <form>
                <div className="form-group">
                    <i className="fas fa-user"></i>
                    <input className="login" onChange={(e) => author(e.target)} placeholder="Логин" required/>
                </div>
                <div className="form-group">
                    <i className="fas fa-lock"></i>
                    <input className="password" onChange={(e) => author(e.target)} placeholder="Пароль" required/>
                </div>
                <Button onClick={authorSubmit} type="submit" style={styles.submit} variant="contained" size="medium" color="primary">
                    <span style={{color: 'white', fontSize: '12px'}}>Войти</span>
                </Button>
                <Button onClick={() => _toggleForm(true)} style={styles.register} variant="contained" size="medium" color="default">
                    <span style={{fontSize: '12px'}}>Регистрация</span>
                </Button>
            </form>
        </div>
    );
}

export default AuthForm;