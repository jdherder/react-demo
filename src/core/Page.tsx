import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

export { Page };

const Page: React.FC = ({ children }) => {
  return (
    <Wrapper>{ children }</Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto 0;
`;
