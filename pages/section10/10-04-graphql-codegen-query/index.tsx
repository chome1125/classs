import { useQuery,gql } from "@apollo/client"
import { useRouter } from "next/router"
import { IQuery,IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types"

const FETCH_BOARD = gql`
    query FETCH_BOARD($number : Int){
        fetchBoard(number: $number){
            number writer title contents
        }
    }
`
//<Pick<IQuery,"fetchBoard">,IQueryFetchBoardArgs>

export default function StaticRoutingMovedPage(){
    const router = useRouter()
    console.log(router)

    const { data } = useQuery<Pick<IQuery,"fetchBoard">,IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables : {number : Number(router.query.qqq)}
    })

    return (
        <div>
            <div>{router.query.qqq}번 게시글 이동이 완료되었습니다.</div>
            <div>작성자 : {data && data.fetchBoard?.writer}</div>
            <div>제목 : {data?.fetchBoard?.title}</div>
            <div>내용 : {data?.fetchBoard?.contents}</div>
        </div>

    )
}