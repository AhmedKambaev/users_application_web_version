import React from 'react';
import Header from '../../header-component';
import Spinner from '../../spinner';
import BookCard from './book-card';
import SearcBar from '../../search-component';
import ErrorMessage from '../../error-message';
import ModalInfo from '../../moda-info';
import './book.scss';


const url = 'https://api.tvmaze.com/search/shows?q=';
const defaultUrl = 'stargate';

class BooksPage extends React.Component {
    

    state = {
        displayModal: false,
        dataModal: {}
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

    openModal = (data) => {
        this.setState({displayModal: true, dataModal: data});
    }

    closeModal = (e) => {
        console.log('click')
        if(e.target.classList.contains('modal-container')) {
            this.setState({displayModal: false});
        }
    }

    render() {
        const { authUser, userLogout, navigator, books, 
            errorBooksLoaded, booksLoader, onSearchChange, value } = this.props;
            console.log(books)
        if(authUser) {
            return(
                <div>
                    <Header navigator={navigator} userLogout={userLogout} />
                    <div className="search-books-block">
                        <div className="container container-search-bar">
                            <div>
                                <SearcBar onSearchChange={onSearchChange} value={value} />
                            </div>
                        </div>
                    </div>
                    <section className="books-sections container-books">
                        {
                            errorBooksLoaded ? <ErrorMessage service="Сервисе книг" /> :
                            booksLoader ? <Spinner /> : 
                            <div className="ui link cards">
                                {
                                    books.map((book, i) => {
                                        return(
                                            <BookCard openModal={this.openModal} {...book} key={book.id} />
                                        )
                                    })
                                }
                            </div>
                        }
                    </section>
                    {
                        this.state.displayModal ? <ModalInfo data={this.state.dataModal} closeModal={this.closeModal} /> : null
                    }
                </div>
            );
        }
        return(
            <div className="not-user">Вы ещё не найдены...</div>
        );
    }
}

export default BooksPage;



