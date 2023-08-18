import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query ($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
    }
  }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
  // prettier-ignore
  const { data} = useQuery<Pick<IQuery, "fetchBoards">,IQueryFetchBoardArgs>(FETCH_BOARDS);

  return <div></div>;
}
