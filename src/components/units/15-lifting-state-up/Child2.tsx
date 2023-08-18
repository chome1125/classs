import { useState } from "react";

export default function Child2(props: any): JSX.Element {
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    props.setCount((prev: number) => prev + 1);
  }

  return (
    <>
      <div>자식 2의 카운트 : {props.count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
    </>
  );
}
