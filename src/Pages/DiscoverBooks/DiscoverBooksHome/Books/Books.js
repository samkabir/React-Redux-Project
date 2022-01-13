import React from 'react';
import styled from 'styled-components';

const Books = ({book}) => {
      const {title, author, coverImageUrl, pageCount, publisher, synopsis} = book;
      return (
            <OneBook>
                  <div>
                        image
                  </div>
                  <div>
                        <div>Title</div>
                        <div>author</div>
                        <div>publisher</div>
                        <div>Synopsis</div>
                        <div>pageCount</div>
                  </div>
            </OneBook>
      );
};

const OneBook = styled.div`
      width:100%;
      padding: 20px;
`;

export default Books;