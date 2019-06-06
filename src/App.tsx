import React from 'react';
import styled from 'styled-components';
import { Row, Col, Badge } from 'antd';

import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';

const color = '#00d8ff';

const StyledBadge = styled(Badge)`
    .ant-badge-count {
        background-color: ${color};
        color: black;
        box-shadow: 0 0 0 1px #d9d9d9 inset;
    }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  text-align: center;
  color: ${color};
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Row>
          <Col span={24}>
            <Title>Ant Design with Styled Components</Title>
          </Col>
          <Col span={12}>
            <Badge count={3}>Default Badge</Badge>
          </Col>
          <Col span={12}>
            <StyledBadge count={3}>Custom Badge</StyledBadge>
          </Col>
        </Row>
      </header>
    </div>
  );
};

export default App;
