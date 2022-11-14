import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextBox = styled.div`
  color: white;
  font-size: 25px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  opacity: 0.5;
`;

function Preview({ preview }) {
  return <TextBox>{preview || ''} </TextBox>;
}

Preview.propTypes = {
  preview: PropTypes.string.isRequired,
};

export default Preview;
