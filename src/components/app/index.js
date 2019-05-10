import React, { Component } from "react";
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { userAuthor, userLogout, loadedBooks, searchChanged,
    getMovies } from '../../actions';
import FormContainer from '../auth_reg-form';
import VideosPage from '../pages/videos';
import BooksPage from '../pages/books';
import { firebaseDB } from '../../firebase';
import { withRouter } from 'react-router-dom';

import '../../styles/App.scss';


const url = 'https://api.tvmaze.com/search/shows?q=';
const defaultUrl = 'stargate';

class App extends Component {

    state = {
        reg: false
    }

    registerValues = {
        login: '',
        password: ''
    }

    authorValues = {
        login: '',
        password: ''
    }

    componentDidMount = () => {
        fetch(url+defaultUrl)
            .then(response => {
                return response.json();
            }) 
            .then(res => {
                const data = res.map(item => item.show);
                this.props.loadedBooks(data);
            })
            .catch(err => {
                console.log(err)
            });

    }

    register = (input) => {
        if(input.classList.contains('login')) {
            const value = input.value;
            this.registerValues.login = value;
        } else if(input.classList.contains('password')) {
            const value = input.value;
            this.registerValues.password = value;
        }
    }

    author = (input) => {
        if(input.classList.contains('login')) {
            const value = input.value;
            this.authorValues.login = value;
        } else if(input.classList.contains('password')) {
            const value = input.value;
            this.authorValues.password = value;
        }
    }

    authorSubmit = (e) => {
        e.preventDefault();

        if(this.authorValues.login !== '' && this.authorValues.password !== '') {
            const { userAuthor } = this.props;
            firebaseDB.ref('users').once('value')
            .then((response) => {
                const data = response.val();
                let users = [];
                for(let i in data) {
                    let obj = {login: data[i].login, password: data[i].password};
                    users.push(obj);
                }

                const user = users.find(item => (item.login === this.authorValues.login && item.password === this.authorValues.password));
                if(user) {
                    userAuthor(user);
                    this.props.history.push('/video');
                }
                else alert('Не верный логин или пароль');
            })
            .catch(err => console.log(err))
        }
    }

    
    registerSubmit = (e) => {
        e.preventDefault();

        if(this.registerValues.login !== '' && this.registerValues.password !== '') {
            const { userAuthor } = this.props;
            firebaseDB.ref('users').once('value')
            .then((response) => {
                const data = response.val();
                let users = [];
                for(let i in data) {
                    let obj = {login: data[i].login, password: data[i].password};
                    console.log(obj)
                    users.push(obj);
                }

                const user = users.find(item => (item.login === this.registerValues.login));
                if(!user) {
                    console.log(user)
                    const { userAuthor } = this.props;
                    firebaseDB.ref('users').push({
                        login: this.registerValues.login,
                        password: this.registerValues.password
                    })
                    .then(() => {
                        userAuthor({
                            login: this.registerValues.login,
                            password: this.registerValues.password
                        });
                        this.props.history.push('/video');
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }
                else alert('Такой user уже занят');
            })
            .catch(err => console.log(err))
        }
    }

    toggleForm = (status) => {
        this.setState({reg: status});
    }

    onSearchChange = (e) => {
        const input = e.target
        this.props.searchChanged(input.value)
        this.props.getMovies(input.value)
    }

    render() {
        const { authUser } = this.props.user;
        const { userLogout, books, booksLoader, loadedBooks, movies } = this.props;
        return (
            <Switch>
                <Route
                    exact 
                    path="/"
                    component={() => <FormContainer toggleForm={this.toggleForm} state={this.state} authorSubmit={this.authorSubmit} 
                        registerSubmit={this.registerSubmit} author={this.author} register={this.register} />}
                    />
                    
                <Route
                    path="/video"
                    component={() => <VideosPage navigator={this.props.history} userLogout={userLogout} authUser={authUser} />}
                    />

                <Route
                    path="/books"
                    render={() => <BooksPage value={movies} onSearchChange={this.onSearchChange} loadedBooks={loadedBooks} books={books} booksLoader={booksLoader} navigator={this.props.history} userLogout={userLogout} authUser={authUser} />}
                    />
            </Switch>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        books: state.books.books,
        booksLoader: state.books.booksLoader,
        movies: state.books.movie
    }
};

const mapDispatchToProps = {
    userAuthor,
    userLogout,
    searchChanged,
    getMovies,
    loadedBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));