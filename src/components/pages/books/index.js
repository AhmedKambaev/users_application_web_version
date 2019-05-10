import React from 'react';
import Header from '../../header-component';
import Spinner from '../../spinner';
import BookCard from './book-card';
import SearcBar from '../../search-component';
import './book.scss';


class BooksPage extends React.Component {
    

    render() {
        const { authUser, userLogout, navigator, books, booksLoader, onSearchChange, value } = this.props;
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
                            booksLoader ? <Spinner /> : 
                            <div className="ui link cards">
                                {
                                    books.map((book, i) => {
                                        return(
                                            <BookCard {...book} key={book.id} />
                                        )
                                    })
                                }
                            </div>
                        }
                    </section>
                </div>
            );
        }
        return(
            <div className="not-user">Вы ещё не найдены...</div>
        );
    }
}

export default BooksPage;



