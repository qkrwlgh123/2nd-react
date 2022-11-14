/* eslint no-eval: 0 */
import React, { useEffect, useState } from 'react';
import DeleteLetter from './components/DeleteLetter';
import KeyResult from './components/KeyResult';
import NumPad from './components/Numpad';
import Preview from './components/Preview';
import GlobalStyle from './layout/GlobalStyle';
import Layout from './layout/Layout';
import ResultLayout from './layout/ResultLayout';
import ToastMessage from './UI/ToastMessage';

function App() {
  // 계산 미리보기 결과를 관리하는 상태
  const [preview, setPreview] = useState('');

  // 출력될 결과를 관리하는 상태
  const [calc, setCalc] = useState('0');

  // 토스트 메세지 상태
  const [toastMsg, setToastMsg] = useState('');

  // 토스트 메세지 활성화하는 함수
  const activeToast = text => {
    setToastMsg(text);
    const timer = setTimeout(() => {
      setToastMsg('');
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  };

  // 선택한 숫자를 출력해줄 함수
  const getNum = e => {
    const regex = /[^0-9]/g;
    const numbers = calc.replace(regex, '');
    if (numbers.length > 14) {
      return;
    }
    if (calc === '0' && e.target.value !== '.') {
      setCalc(e.target.value);
      return;
    }
    if (e.target.value === '.' && calc.includes('.')) {
      return;
    }
    setCalc(prev => prev + e.target.value);
  };

  // 선택한 연산자를 출력해줄 함수
  const getOper = e => {
    if (
      calc[calc.length - 1] === '+' ||
      calc[calc.length - 1] === '-' ||
      calc[calc.length - 1] === '×' ||
      calc[calc.length - 1] === '÷'
    ) {
      setCalc(calc.slice(0, -1));
      setCalc(prev => prev + e.target.value);
      return;
    }
    setCalc(prev => prev + e.target.value);
  };

  // 부호 변환 함수
  const changeSign = () => {
    if (Number.isNaN(Number(calc))) {
      activeToast('완성되지 않은 수식입니다.');
      return;
    }
    if (calc > 0) {
      setCalc(String(calc * -1));
      return;
    }
    setCalc(String(Math.abs(calc)));
  };

  // 모든 결과를 clear하는 함수
  const getAllClear = () => {
    setPreview('');
    setCalc('0');
  };

  // 숫자 혹은 연산자를 한 자리 지우는 함수
  const deleteLetter = () => {
    if (calc !== '0' && calc.length > 1) {
      setCalc(calc.slice(0, -1));
    } else if (calc.length === 1) {
      setCalc('0');
    }
  };

  // 퍼센트 값 구하는 함수
  const getPercentage = () => {
    if (Number.isNaN(Number(calc))) {
      activeToast('완성되지 않은 수식입니다.');
      return;
    }
    setCalc(String(calc / 100));
  };

  // 미리보기 결과값을 도출하는 함수
  const getPreviewResult = () => {
    const replaceStr = calc.replace(/×/gi, '*').replace(/÷/gi, '/');
    if (
      !Number.isNaN(Number(calc[calc.length - 1])) &&
      calc.length > 1 &&
      calc.slice(-2) !== '÷0'
    ) {
      setPreview(String(eval(replaceStr)));
    }
  };

  // 계산 결과를 도출하는 함수
  const getResult = () => {
    if (Number.isNaN(Number(calc[calc.length - 1]))) {
      activeToast('완성되지 않은 수식입니다.');
      return;
    }

    const replaceStr = calc.replace(/×/gi, '*').replace(/÷/gi, '/');

    if (eval(replaceStr) === Infinity || replaceStr === '0/0') {
      activeToast('0으로 나눌수 없습니다.');
      setCalc('0');
      setPreview('');
    } else if (String(eval(replaceStr)).length > 14) {
      activeToast('결과값은 15자리까지만 계산 가능합니다.');
      setCalc('0');
      setPreview('');
    } else {
      setCalc(String(eval(replaceStr)));
    }
  };

  // 괄호 입력 함수
  const addBracket = () => {};

  // 계산값이 변할 때마다 미리보기 값 갱신, 이스터 에그 이펙트 발동
  useEffect(() => {
    const regex = /[^0-9]/g;
    const numbers = calc.replace(regex, '');
    if (numbers.length > 14) {
      activeToast('숫자는 15자리까지 입력할 수 있어요.');
      return;
    }

    // 미리보기 값 갱신
    getPreviewResult();

    // 이스터 에그
    if (calc === '1+0+2+4') {
      setCalc('만든이 : 박지호');
      setTimeout(() => {
        setCalc('0');
        setPreview('');
      }, 1500);
    }
  }, [calc]);

  return (
    <Layout>
      <GlobalStyle />
      {toastMsg && <ToastMessage text={toastMsg} />}
      <ResultLayout>
        <KeyResult calc={calc} />
      </ResultLayout>
      <ResultLayout>
        <DeleteLetter deleteLetter={deleteLetter} />
      </ResultLayout>
      <ResultLayout>
        <Preview preview={preview} />
      </ResultLayout>
      <NumPad
        getNum={getNum}
        getOper={getOper}
        changeSign={changeSign}
        getPercentage={getPercentage}
        addBracket={addBracket}
        getResult={getResult}
        getAllClear={getAllClear}
      />
    </Layout>
  );
}

export default App;
