import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query ($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  // prettier-ignore
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">,IQueryFetchBoardArgs>(FETCH_BOARDS);
  const [search, setSearch] = useState("");

  const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
    //검색에서 refetch할 때, search 검색어가 refetch에 이미 저장되어 있는 상태기 때문에
    //추가로 search 포함안해도 됨
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
  }, 5000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <div>
      검색어입력 : <input type="text" onChange={onChangeSearch} />{" "}
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {/* 데이터 뿌려줌 */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
      {/* 페이지 목록 */}
      {new Array(10).fill("철수").map((_, index) => (
        <span key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
