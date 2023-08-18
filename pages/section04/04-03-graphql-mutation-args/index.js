import { gql, useMutation } from "@apollo/client"

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer : String, $title: String, $contents :String){
        createBoard(writer : $writer , title: $title , contents: $contents ){
            _id number message
        }
    }
` 

export default function GraphqlMutationPage(){
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables:{                 
                writer: "뽀리",
                title:"안녕",
                contents :"읭???"
            }
        })
        console.log(result)
    }

    //한 줄 일때는 괄호() 필요 없음
    return <button onClick={onClickSubmit}>Graphql-api 요청하기</button>
    
}