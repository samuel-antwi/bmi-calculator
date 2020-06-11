import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import loading from '../assets/img/loading.gif';

const Loading = () => {
  return (
    <Styles>
      <Container className='py-5 text-center'>
        <img src={loading} alt='Loading...' />
      </Container>
    </Styles>
  );
};

export default Loading;

const Styles = styled.div``;
