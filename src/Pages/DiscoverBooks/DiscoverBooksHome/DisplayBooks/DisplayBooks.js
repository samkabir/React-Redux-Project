import React from 'react';
import styled from 'styled-components';

const DisplayBooks = ({book}) => {
      const {title, author, coverImageUrl, pageCount, publisher, synopsis} = book;
      return (
            <>
                  <OneBook>
                        <div>
                              <img src={coverImageUrl} />
                        </div>
                        <Info>
                              <h2>{title}</h2>
                              <h3>{author}</h3>
                              <h3>{publisher}</h3>
                              <p>{synopsis}</p>
                              <h5>Page Count: {pageCount}</h5>
                        </Info>
                  </OneBook>
            </>
      );
};

const OneBook = styled.div`
      width:100%;
      padding: 50px;
      display: flex;
`;

const Info = styled.div`
      padding:20px;
`;

export default DisplayBooks;