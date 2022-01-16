import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import DisplayReadingBooks from './DisplayReadingBooks/DisplayReadingBooks';

const ReadingBooks = () => {
      const readingBooks = useSelector( (state) => state.books.readingList);
      return (
            <BooksSection>
                  {
                        readingBooks.map( (book) => <DisplayReadingBooks key={book.id} book={book} />)
                  }
            </BooksSection>
      );
};


const BooksSection = styled.div`
      display: flex;
      flex-direction:column;
      margin: 0px 100px;
`;

export default ReadingBooks;