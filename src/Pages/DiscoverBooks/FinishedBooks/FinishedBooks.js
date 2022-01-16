import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import DisplayFInishedBooks from './DisplayFinishedBooks/DisplayFInishedBooks';

const FinishedBooks = () => {
      const finishedBooks = useSelector( (state) => state.books.finishedList);
      return (
            <BooksSection>
                  {
                        finishedBooks.map( (book) => <DisplayFInishedBooks key={book.id} book={book} />)
                  }
            </BooksSection>
      );
};

const BooksSection = styled.div`
      display: flex;
      flex-direction:column;
      margin: 0px 100px;
`;

export default FinishedBooks;