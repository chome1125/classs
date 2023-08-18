import { useQuery, gql } from "@apollo/client";
import { MouseEvent } from "react";
import {Checkbox} from "./checkbox"

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  // const onClickAlert = (event:MouseEvent<HTMLDivElement>) => {
  //   console.log(event.currentTarget.id)
  // }

  const qqq1 = () =>{
    alert("1번 클릭")
  }



  return (
    <div>
      {data?.fetchBoards.map((el :any) => (
        <div id={el.writer} onClick={qqq1}>
          <Checkbox/>
          <span style={{ margin: "10px" }}>글번호 : {el.number}</span>
          <span style={{ width:"150px", display : "inline-block" }}>제목 : {el.title}</span>
          <span style={{ margin: "10px" }}>작성자 : {el.writer}</span>
        </div>
      ))}
    </div>
  );
}
