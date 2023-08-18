import { UpCircleOutlined } from "@ant-design/icons";
import type { MouseEvent } from "react";
import styled from "@emotion/styled";
const MyIcon = styled(UpCircleOutlined)`
  color: red;
  font-size: 13px;
`;

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event: MouseEvent<HTMLDivElement>): void => {
    console.log(event.currentTarget.id);
  };

  return <MyIcon id="삭제할게시글ID" onClick={onClickDelete} />;
}
