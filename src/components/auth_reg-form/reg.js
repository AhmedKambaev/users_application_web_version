import React from 'react';
import Button from '@material-ui/core/Button';

const styles = {
    submit: {
        float: 'right',
        marginRight: '10px',
        marginTop: '20px'
    },
    register: {
        color: 'white',
        backgroundColor: '#2196f3',
        float: 'right',
        marginTop: '20px'
    }
}

const RegForm = ({_toggleForm, register, registerSubmit}) => {
    return (
        <div className="form-block">
            <h1 className="text-center italic">Регистрация</h1>
            <form>
                <div className="form-group">
                    <i className="fas fa-user"></i>
                    <input onChange={(e) => register(e.target)} className="login" placeholder="Логин" required/>
                </div>
                <div className="form-group">
                    <i className="fas fa-lock"></i>
                    <input onChange={(e) => register(e.target)} className="password" placeholder="Пароль" required/>
                </div>
                <Button onClick={registerSubmit} type="submit" style={styles.register} variant="contained" size="medium" color="primary">
                    <span style={{color: 'white', fontSize: '12px'}}>Зарегистрироваться</span>
                </Button>
                <Button onClick={() => _toggleForm(false)} style={styles.submit} variant="contained" size="medium" color="default">
                    <span style={{fontSize: '12px'}}>Есть аккаунт?</span>
                </Button>
            </form>
        </div>
    );
}

export default RegForm;