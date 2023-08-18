import { gql, useMutation } from "@apollo/client"

const 나의그래프큐엘셋팅 = gql`
    mutation{
        createBoard(writer : "유니", title:"뭐야", contents: "뭘쳐다봐"){
            _id number message
        }
    }
` 

export default function GraphqlMutationPage(){
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수()
        console.log(result)
    }

    //한 줄 일때는 괄호() 필요 없음
    return <button onClick={onClickSubmit}>Graphql-api 요청하기</button>
    
}