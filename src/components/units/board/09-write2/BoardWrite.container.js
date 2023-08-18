import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import {
  나의그래프큐엘셋팅,
  UPDATE_BOARD,
} from "../09-write/BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();

  const [Writer, setWriter] = useState();
  const [Title, setTitle] = useState();
  const [Contents, setContents] = useState();

  const [나의함수] = useMutation(나의그래프큐엘셋팅);
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: Writer,
        title: Title,
        contents: Contents,
      },
    });
    console.log(result);

    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`);
  };

  const [updateBoard] = useMutation(UPDATE_BOARD);
  const onClickUpdate = async () => {
    const myvariables={number : Number(router.query.number)}
    if(Writer){
      myvariables.writer = Writer
    }
    if(Title){
      myvariables.title = Title
    }
    if(Contents){
      myvariables.contents = Contents
    }


    //여기부터 수정하기
    const result = await updateBoard({
      variables: {
        myvariables
      },
    });
    console.log(result);
    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  //한 줄 일때는 괄호() 필요 없음
  return (
    <BoardWriteUI
      onClcikSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      idEdit={props.isEdit}
      data={props.data}
    />
  );
}
