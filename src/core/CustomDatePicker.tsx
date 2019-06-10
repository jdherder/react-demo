import React from 'react';
import { DatePicker } from 'antd';
import { DatePickerProps } from 'antd/lib/date-picker/interface';
import styled, { createGlobalStyle } from 'styled-components';

export { CustomDatePicker };

const dropdownClassName = 'customDatePicker';

const CustomDatePicker: React.FC<DatePickerProps> = ( props ) => {
  return (
    <React.Fragment>
      <StyledDatePickerAntGlobalOverride />
      <StyledDatePicker dropdownClassName={dropdownClassName} { ...props }></StyledDatePicker>
    </React.Fragment>
  );
};

const color = '#73b44b';

const StyledDatePicker = styled(DatePicker)`
  .ant-calendar-picker-input {
    border-color: ${color};
  }
`;

/**
 * We have to do this global style injection because Ant Design builds the datepicker DOM node and appends it to the <body>, therefore it is not in the generated scope of the styled component.
 */
const StyledDatePickerAntGlobalOverride = createGlobalStyle`
  .${dropdownClassName}.ant-calendar-picker-container {
    .ant-calendar-selected-day .ant-calendar-date {
      background: ${color};
      color: white;
    }

    .ant-calendar-today .ant-calendar-date {
      border-color: ${color};
    }
  }
`;
