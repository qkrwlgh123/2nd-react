import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const DeleteBox = styled.div`
  margin-bottom: 25px;
  color: white;
  cursor: pointer;
`;

function DeleteLetter({ deleteLetter }) {
  return (
    <Box>
      <DeleteBox onClick={deleteLetter}>DEL</DeleteBox>
    </Box>
  );
}

DeleteLetter.propTypes = {
  deleteLetter: PropTypes.func.isRequired,
};

export default DeleteLetter;
