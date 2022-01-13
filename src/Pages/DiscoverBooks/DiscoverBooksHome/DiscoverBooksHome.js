import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DisplayBooks from './DisplayBooks/DisplayBooks';

const DiscoverBooksHome = () => {
      const [books, setBooks] = useState([]);
      useEffect( () => {
            fetch('books.json')
                  .then(res => res.json())
                  .then(data => setBooks(data))
        },[]);
      return (
            <div>
                  <SearchBar>
                        <h2>Search Bar Coming!!!</h2>
                  </SearchBar>
                  <BooksSection>
                        {
                              books.map(book => <DisplayBooks
                              key={book.id}
                              book={book}
                              ></DisplayBooks>)
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