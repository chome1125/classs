import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../commons/types/generated/types";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyExample(): JSX.Element {
  // prettier-ignore
  const { data } = useQuery<Pick<IQuery, "fetchBoards">,IQueryFetchBoardArgs>(FETCH_BOARDS);
  //{fetchPolicy : "network-only"}

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
