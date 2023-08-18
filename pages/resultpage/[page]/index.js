import { useQuery,gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query($number : Int){
        fetchBoard(
            number: $number
        ){number writer title contents}
    }
`

export default function resultpage(){

    const route = useRouter()
    console.log(route)
    const {data} = useQuery(FETCH_BOARD ,{
        variables:{
            number : Number(route.query.page)
        }
    })

    return(
        <div>
            {route.query.page}번째 페이지입니다. <br />
            제목 : {data?.fetchBoard?.title} <br />
            작성자 : {data?.fetchBoard?.writer} <br />
            내용 : {data?.fetchBoard?.contents}
        </div>
    )
}