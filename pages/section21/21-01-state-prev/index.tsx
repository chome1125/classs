import { useState } from "react";

export default function CounterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    //1.화살표 함수
    setCount((prev) => prev + 1);

    //2.함수 선언식
    setCount(function (prev){retrun prev + 1});

    //3.매개변수 바꾸기
    setCount((asdfqwedas) => asdfqwedas + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </>
  );
}
