import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer : String, $title: String, $contents :String){
        createBoard(writer : $writer , title: $title , contents: $contents ){
            _id number message
        }
    }
` 

export default function GraphqlMutationPage(){
    const [writer,setWriter] = useState()
    const [Title,setTitle] = useState()
    const [Contents,setContents] = useState()

    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables:{                 //variables 가 $역할을 함
                writer: writer,
                title:Title,
                contents : Contents
            }
        })
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) =>{
        setTitle(event.target.value)
    }

    const onChangeContents = (event) =>{
        setContents(event.target.value)
    }

    //한 줄 일때는 괄호() 필요 없음
    return (
        <div>
            작성자 : <input type="text" onChange={onChangeWriter}/>
            제목 : <input type="text" onChange={onChangeTitle}/>
            내용 : <input type="text" onChange={onChangeContents}/>
            <button onClick={onClickSubmit}>Graphql-api 요청하기</button>
        </div>)

    
}