import './App.css';
import { useDispatch } from 'react-redux';
import { minusNum, plusNum } from './redux/modules/calculator';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const [inputVal, setInputVal] = useState();
  const totalNum = useSelector((state) => state.calculator.number);

  const dispatch = useDispatch();
  const onChange = (e) => {
    setInputVal(e.target.value);
  };
  const plusBtn = () => {
    dispatch(plusNum(inputVal));
    setInputVal('');
  };
  const minusBtn = () => {
    dispatch(minusNum(inputVal));
    setInputVal('');
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={inputVal} onChange={onChange} /> 만큼을{' '}
        <button onClick={plusBtn}>더할게요</button>{' '}
        <button onClick={minusBtn}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{totalNum}</p>
      </div>
    </div>
  );
}

export default App;
