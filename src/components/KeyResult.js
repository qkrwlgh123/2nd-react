import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextBox = styled.div`
  color: white;
  font-size: 55px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

function KeyResult({ calc }) {
  return <TextBox>{calc}</TextBox>;
}

KeyResult.propTypes = {
  calc: PropTypes.string.isRequired,
};

export default KeyResult;
