import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FunctionalCounterPage(): JSX.Element {
  const router = useRouter();
  const [count, setCount] = useState(0);

  //componentDidMount와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행!!");
  }, []);

  //componentDidMount + componentWillUnmount와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행!!");
  });

  //componentWillUnmount와 동일
  useEffect(() => {
    return () => {
      console.log("사라지기 전 실행!!");
    };
  }, []);

  //1. useEffect 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행!!");

    return () => {
      console.log("사라지기 전 실행!!");
    };
  });

  //2. useEffect 잘못된 사용법
  useEffect(() => {
    SetWriter();
  }, [count]);

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  console.log("나는 언제 실행될까?");

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
