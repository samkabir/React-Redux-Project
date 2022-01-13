import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
      return (
            <Container>
                  <Wrapper>
                        <h2>Welcome to the World of Books!</h2>
                        <Link to="/discoverbooks">
                              <Button>Go to Discover Books</Button>
                        </Link>
                  </Wrapper>
            </Container>
      );
};
const Wrapper = styled.div`
      text-align:center;
      padding: 100px 0px;
`;
const Button = styled.button`
      padding: 10px;
      background-color: black;
      color:white;
`;

export default Home;