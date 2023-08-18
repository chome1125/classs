import { gql, useMutation } from "@apollo/client"
import Router, { useRouter } from "next/router"

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer : String, $title: String, $contents :String){
        createBoard(writer : $writer , title: $title , contents: $contents ){
            _id number message
        }
    }
` 

export default function GraphqlMutationPage(){

    const route = useRouter()


    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {

        try{ 
            //try에 있는 내용을 시도하다가 실패하면, 다음에 있는 모든 줄들을 모두 무시하고,catch에 있는 내용이 실행됨
            const result = await 나의함수({
                variables:{                 //variables 가 $역할을 함
                    writer: "뽀리",
                    title:"안녕",
                    contents :"읭???"
                }
            })
            console.log(result)
            console.log(result.data.createBoard.number)
            Router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
        }

        catch(error){
            alert(error.message)
        }


    }

    //한 줄 일때는 괄호() 필요 없음
    return <button onClick={onClickSubmit}>Graphql-api 요청하기</button>
    
}