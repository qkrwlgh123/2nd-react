import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LayoutBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

function ResultLayout({ children }) {
  return <LayoutBox>{children}</LayoutBox>;
}

ResultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResultLayout;
