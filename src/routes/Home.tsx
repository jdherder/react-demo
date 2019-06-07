import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

export { Home };

const Home: React.FC = () => {
  return (
    <div className="home">
      <Splash>
        <DemoTitle>React Demo</DemoTitle>
        <DemoNav>
          <ul>
            <li>
              <Link to="/ant">Ant Design Examples</Link>
            </li>
          </ul>
        </DemoNav>
      </Splash>
    </div>
  );
};

const Splash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #73b44b;
`;

const DemoTitle = styled.h1`
  color: white;
  font-size: 32px;
`;

const DemoNav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  li {
      padding: 8px;
      margin: 0;
  }
  a {
    color: white;
    &:hover {
      color: white;
    }
  }
`;
