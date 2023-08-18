import BoardWrite from "./../../../src/components/units/22-global-state/boardWrite.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/components/commons/stores";
import { useEffect } from "react";
export default function GlobalStateWithRecilPage(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(false);
  });

  return <BoardWrite />;
}
