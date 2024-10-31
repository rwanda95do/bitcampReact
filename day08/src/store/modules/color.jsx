// 컴포넌트가 아니라, 순수 Javascript 파일이다.

// 1. 액션 생성
// 중복 방지 : 모듈이름을 앞에 붙여주어서 액션명 중복 방지
const RED = "color/RED";
const GREEN = "color/GREEN";
const BLUE = "color/BLUE";
const MAGENTA = "color/MAGENTA";

// 2. 액션 보내기
export const red = () => ({ type: RED });
export const green = () => ({ type: GREEN });
export const blue = () => ({ type: BLUE });
export const magenta = () => ({ type: MAGENTA });

// 3. 초기값
const initialState = { color: "hotpink" };

// 4. reducer 함수 만들기
// reducer : state, action 파라메터를 참조하여 새로운 상태객체를 만들어 보내준다.
// state : 현재상태, action : 액션객체
// 반드시 state에는 초기값을 주어야 한다.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RED:
      return { color: "red" };
    case GREEN:
      return { color: "green" };
    case BLUE:
      return { color: "blue" };
    case MAGENTA:
      return { color: "magenta" };
    default:
      return state;
  }
};

// 5. export
export default reducer;
