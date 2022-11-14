import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NumBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const Button = styled.button`
  background-color: #323232;
  border: none;
  color: #e5e5e5;
  font-size: 2rem;
  font-weight: 100;
  border-radius: 35px;
  cursor: pointer;
  padding: 15px;
  width: 70px;
  height: 70px;
  &:active {
    opacity: 0.2;
    font-size: 1.2rem;
  }
`;

const CalButton = styled(Button)`
  color: #131313;
  background-color: #a9a9a9;
`;

const OperButton = styled(Button)`
  background-color: #db7e2b;
`;

function NumPad({
  getNum,
  getOper,
  changeSign,
  getPercentage,
  getResult,
  addBracket,
  getAllClear,
}) {
  return (
    <NumBox>
      <CalButton onClick={getAllClear}>C</CalButton>
      <CalButton onClick={changeSign}>+/-</CalButton>
      <CalButton value="%" onClick={getPercentage}>
        %
      </CalButton>
      <OperButton onClick={getOper} value="÷">
        ÷
      </OperButton>
      <Button value={7} onClick={getNum}>
        7
      </Button>
      <Button value={8} onClick={getNum}>
        8
      </Button>
      <Button value={9} onClick={getNum}>
        9
      </Button>
      <OperButton onClick={getOper} value="×">
        x
      </OperButton>
      <Button value={4} onClick={getNum}>
        4
      </Button>
      <Button value={5} onClick={getNum}>
        5
      </Button>
      <Button value={6} onClick={getNum}>
        6
      </Button>
      <OperButton onClick={getOper} value="-">
        -
      </OperButton>
      <Button value={1} onClick={getNum}>
        1
      </Button>
      <Button value={2} onClick={getNum}>
        2
      </Button>
      <Button value={3} onClick={getNum}>
        3
      </Button>
      <OperButton onClick={getOper} value="+">
        +
      </OperButton>
      <Button value={0} onClick={getNum}>
        0
      </Button>
      <OperButton onClick={addBracket}>()</OperButton>
      <Button value="." onClick={getNum}>
        .
      </Button>
      <OperButton onClick={getResult}>=</OperButton>
    </NumBox>
  );
}

NumPad.propTypes = {
  getNum: PropTypes.func.isRequired,
  getOper: PropTypes.func.isRequired,
  changeSign: PropTypes.func.isRequired,
  getResult: PropTypes.func.isRequired,
  addBracket: PropTypes.func.isRequired,
  getPercentage: PropTypes.func.isRequired,
  getAllClear: PropTypes.func.isRequired,
};

export default NumPad;
