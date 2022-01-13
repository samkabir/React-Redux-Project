import React from 'react';
import books from '../../../fakeData/books.json';
import styled from 'styled-components';
import DisplayBooks from './DisplayBooks/DisplayBooks';

const DiscoverBooksHome = () => {
      
      return (
            <div>
                  <SearchBar>
                        <h2>Search Bar Coming!!!</h2>
                  </SearchBar>
                  <BooksSection>
                        {
                              books.map( (book) => <DisplayBooks key={book.id} book={book} />)
                        }
                  </BooksSection>
            </div>
      );
};


const SearchBar = styled.div`
      text-align:center;
`;
const BooksSection = styled.div`
      display: flex;
      flex-direction:column;
      margin: 0px 100px;
`;

export default DiscoverBooksHome;