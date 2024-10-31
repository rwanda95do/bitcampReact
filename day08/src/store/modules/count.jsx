// 1. 액션 생성
const INCREMENT = "count/INCREMENT";
const DECREMENT = "count/DECREMENT";
const RESET = "count/RESET";

// 2. 액션 보내기
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });

// 3. 초기값
const initialState = { count: 0 };

// 4. reducer 함수 만들기 (상태변수의 값을 이벤트에 따라 바꿔준다)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
};

// 5. export reducer
export default reducer;
