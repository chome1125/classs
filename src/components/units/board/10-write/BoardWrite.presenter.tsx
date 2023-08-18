import { BlueButton, RedInput } from "./BoardWrite.style";
import { ChangeEvent,MouseEvent } from "react";

interface IBoardWriteUIProps{
  onClickSubmit  : (event:MouseEvent<HTMLInputElement,MouseEvent>) => void
  onClickUpdate : (event:MouseEvent<HTMLInputElement>) => void
  onChangeWriter : (event:ChangeEvent<HTMLInputElement>) => void
  onChangeTitle : (event:ChangeEvent<HTMLInputElement>) => void
  onChangeContents : (event:ChangeEvent<HTMLInputElement>) => void
  isEdit : boolean
  data? : any
}

export default function BoardWriteUI(props:IBoardWriteUIProps) {
  return (
    <div>
      작성자 :{" "}
      <RedInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchboard.writer}
      />{" "}
      <br />
      제목 :{" "}
      <RedInput
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchboard.title}
      />{" "}
      <br />
      내용 :{" "}
      <RedInput
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchboard.contents}
      />{" "}
      <br />
      <BlueButton
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </BlueButton>
    </div>
  );
}
