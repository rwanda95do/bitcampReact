import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const Test03 = () => {
  const [count, setCount] = useState(0);

  /*
    // 카운트의 값은 계속 증가하지만 , isEven함수를 호출하지 않으니까 결과(홀수/짝수)는 바뀌지 않는다.
    const isEven = () => { 
        return count%2===0
    }
*/
    
    // useEffect도 사용가능하지만 useMemo가 최적화가 더 좋다?
    // 사용자 함수를 만들어서 return 할 경우 return 값을 기억하기 때문에 결과(홀수/짟)가 나온다.
  const isEven = useMemo(() => {
    return count % 2 === 0;
  }, [count]);

  return (
    <div>
      <h2>카운드 : {count}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <h2>결과: {isEven ? "짝수" : "홀수"}</h2>
    </div>
  );
};

export default Test03;

/*
useMemo
- 리랜더링, 최적화
- useMemo는 컴포넌트의 성능을 최적화시킬 수 있는 대표적인 react hooks 중 하나이다.
- useMemo에서 Memo는 Memoization을 뜻한다.

memoization?
- 기존에 수행한 연산의 결괏값을 어딘가에 저장해 두고 동일한 입력이 들어오면 재활용하는 프로그래밍 기법을 말한다.
*/
