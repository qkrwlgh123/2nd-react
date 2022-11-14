import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  position: fixed;
  z-index: 99;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: 3rem;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 var(--black-40);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 8px;
`;

const ToastText = styled.div`
  font-weight: bold;
  letter-spacing: 0.29px;
  text-align: center;
  margin-top: 0.6rem;
`;

function ToastMessage({ text }) {
  return (
    <Container>
      <ToastText>{text}</ToastText>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ToastMessage;
