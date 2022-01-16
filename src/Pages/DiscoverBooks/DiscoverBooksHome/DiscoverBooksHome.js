import React from 'react';
import styled from 'styled-components';
import DisplayBooks from './DisplayBooks/DisplayBooks';
import { useSelector } from 'react-redux';

const DiscoverBooksHome = () => {
      const discover = useSelector( (state) => state.books.discover);
      return (
            <div>
                  <SearchBar>
                        <h2>Search Bar Coming!!!</h2>
                  </SearchBar>
                  <BooksSection>
                        {
                              discover.map( (book) => <DisplayBooks key={book.id} book={book} />)
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