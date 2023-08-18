import { useMutation, gql } from "@apollo/client";
import { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import type {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation ($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation ($file: Upload!) {
    uploadFile(file: $file) {
      url
      _id
    }
  }
`;

export default function PracticeBoard(): JSX.Element {
  /* state들 */
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const inputRef = useRef(null);

  /* mutation들 */
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  /* set-state */
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
    setWriter(event.target.value);
    console.log(writer);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    console.log(title);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
    setContents(event.target.value);
    console.log(contents);
  };

  /* 파일선택 후 이미지 띄우기 */
  const onChangeImages = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const file = event.target.files?.[0];

    if (!file.type.includes("jpeg") && !file.type.includes("png")) {
      alert("jpeg 또는 png 파일만 업로드 가능합니다.");
      return;
    }

    const result = await uploadFile({ variables: { file } });

    console.log(result.data?.uploadFile.url);
    setImageUrl(result.data?.uploadFile.url ?? "");
  };

  /* 뮤테이션 날리기 */
  const onClickSubmit = async (): Promise<void> => {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          writer,
          password: "1234",
          title,
          contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };

  /* 이미지선택 버튼 */
  const onClickButton = (): void => {
    inputRef.current?.click();
  };

  return (
    <>
      <div>
        작성자 : <input type="text" onChange={onChangeWriter} />
      </div>
      <div>
        제목 : <input type="text" onChange={onChangeTitle} />
      </div>
      <div>
        내용 : <input type="text" onChange={onChangeContents} />
      </div>
      <div>
        이미지 :{" "}
        <textarea name="" id="" cols="30" rows="10">
          <img src={`https://storage.googleapis.com/${imageUrl}`} alt="" />
        </textarea>
      </div>
      <div
        style={{ background: "yellow", width: "200px", textAlign: "center" }}
        onClick={onClickButton}
      >
        이미지 선택
      </div>
      <input
        type="file"
        ref={inputRef}
        onChange={onChangeImages}
        style={{ display: "none" }}
        //accept="image/jpeg,image/jpg,image/png"
      />
      <button onClick={onClickSubmit} style={{ display: "block" }}>
        등록하기
      </button>
    </>
  );
}
