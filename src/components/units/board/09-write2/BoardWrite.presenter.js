import { BlueButton, RedInput } from "./BoardWrite.style";
export default function BoardWriteUI(props) {
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
