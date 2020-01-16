import React from 'react';
import Book from './Book';

class BookCollection extends React.Component {
  render() {
    const data = this.props.data;

    const listOfBooks = data.map(el => {
      return <Book data={el} key={el.book_uri}></Book>;
    });
    return <div className="collection">{listOfBooks}</div>;
  }
}

export default BookCollection;