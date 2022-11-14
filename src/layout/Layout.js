import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LayoutBox = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Layout({ children }) {
  return (
    <LayoutBox>
      <InnerBox>{children}</InnerBox>
    </LayoutBox>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
