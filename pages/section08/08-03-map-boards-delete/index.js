import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation ($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
  };

  return (
    <Fregment key={el.number} >
      {data?.fetchBoards.map((el) => (
        /* 특별한 이유가없으면 프레그먼트로 감싸기 div는 조금 느려짐 */
        //1.프레그먼트란? <></> <Fregment></Fregment>
        //2.프레그먼트에 key 입력하는 방법 <Fregment key={1}></Fregment>
        <div>
          {/* index는 게시글을 삭제할 때 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게됨 */}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
    </Fregment>
  );
}
