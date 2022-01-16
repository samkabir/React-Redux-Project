import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addToDiscoveryList, addToFinishedList, removeFromReadingList } from '../../../../redux/actions/bookAction';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const DisplayReadingBooks = ({book}) => {
      const dispatch = useDispatch();
      const {title, author, coverImageUrl, pageCount, publisher, synopsis} = book;
      return (
            <>
                  <OneBook>
                        <div>
                              <img src={coverImageUrl} width="300px" height="450px" />
                        </div>
                        <Info>
                              <h2>{title}</h2>
                              <h3>Author: {author}</h3>
                              <h3>Publisher: {publisher}</h3>
                              <p>{synopsis.slice(0, 500)}...</p>
                              <h5>Page Count: {pageCount}</h5>
                        </Info>
                        <AddIcon>
                              <button onClick={() => { dispatch((addToFinishedList(book))); dispatch((removeFromReadingList(book.id))); }} title="Finished Reading"><CheckCircleOutlineIcon style={{fontSize: '40px', display:'flex'}}/></button>
                              <button onClick={() => { dispatch((addToDiscoveryList(book))); dispatch((removeFromReadingList(book.id))); }} title="Remove From Reading List"><RemoveCircleOutlineIcon style={{fontSize: '40px', display:'flex'}}/></button>
                        </AddIcon>
                  </OneBook>
            </>
      );
};

const AddIcon = styled.div`
      > button {
            background-color: transparent;
            border-radius:30px;
            cursor: pointer;
            margin-top: 20px;
      }
`;

const OneBook = styled.div`
      width:100%;
      padding: 50px;
      display: flex;
      border: 1px solid grey;
      margin: 10px 0px;
`;

const Info = styled.div`
      padding:0px 20px;
`;

export default DisplayReadingBooks;