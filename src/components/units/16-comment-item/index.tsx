import { useState } from "react";

export default function CommentItem(props: any): JSX.Element {
  const [isEdit, SetIsEdit] = useState(false);

  const onClickEdit = (): void => {
    SetIsEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <div>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <span style={{ margin: "10px" }}>{props.el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input key={props.el._id} type="text" />
      )}
    </div>
  );
}
