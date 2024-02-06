//더하기
const PLUS_NUM = 'calculator/PLUS_NUM';
//빼기
const MINUS_NUM = 'calculator/MINUS_NUM';

export const plusNum = (payload) => {
  return { type: PLUS_NUM, payload };
};
export const minusNum = (payload) => {
  return { type: MINUS_NUM, payload };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_NUM:
      const plusValue = Number(action.payload);
      return {
        number: state.number + plusValue,
      };

    case MINUS_NUM:
      const minusValue = Number(action.payload);
      return {
        number: state.number - minusValue,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
