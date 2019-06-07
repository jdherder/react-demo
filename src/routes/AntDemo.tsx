import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Col, Badge, Slider, DatePicker } from 'antd';
import { rgba } from 'polished';
import { Page, CustomDatePicker } from '../core';

import 'antd/dist/antd.css';

export { AntDemo };

const AntDemo: React.FC = () => {
  return (
    <div className="App">
      <Page>
        <PaddedRow>
          <Col span={24}>
            <Title>Ant Design with Styled Components</Title>
            <hr />
          </Col>
        </PaddedRow>

        <PaddedRow>
          <Col span={12}>
            Ant Default
          </Col>
          <Col span={12}>
            Custom Styles
          </Col>
        </PaddedRow>

        <PaddedRow>
          <Col span={12}>
            <Badge count={3}>
              <Box>Default Badge</Box>
            </Badge>
          </Col>
          <Col span={12}>
            <StyledBadge count={7}>
              <Box>Custom Badge</Box>
            </StyledBadge>
          </Col>
        </PaddedRow>

        <PaddedRow>
          <Col span={12}>
            <Slider defaultValue={30} tooltipVisible />
          </Col>
          <Col span={12}>
            <StyledSlider defaultValue={30} tooltipVisible />
          </Col>
        </PaddedRow>

        <PaddedRow>
          <Col span={12}>
            <DatePicker />
          </Col>
          <Col span={12}>
            <CustomDatePicker />
          </Col>
        </PaddedRow>
      </Page>
    </div>
  );
};

const color = '#73b44b';

const StyledBadge = styled(Badge)`
    .ant-badge-count {
        background-color: ${color};
        font-weight: bold;
    }
`;

const StyledSlider = styled(Slider)`
    .ant-slider-rail {
      height: 10px;
    }
    .ant-slider-track,
    &:hover .ant-slider-track {
      height: 10px;
      background-color: ${color};
    }
    .ant-slider-step {
      height: 10px;
    }
    .ant-slider-handle {
      width: 20px;
      height: 20px;
      border-color: ${color};
    }
`;

const Title = styled.h1`
  font-size: 1.75rem;
  text-align: center;
  color: ${color};
`;

const Box = styled.div`
  color: black;
  background-color: #eee;
  padding: 12px 8px;
  border-radius: 8px;
`;

const PaddedRow = styled(Row)`
  padding: 34px;
`;
