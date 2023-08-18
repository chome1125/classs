import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

const firstMutation = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(
        writer: $writer,
        title: $title,
        contents: $contents
        ){_id number message}
    }
`

export default function graphqlTest (){

    const [user,setUser] = useState("")
    const [title,setTitle] = useState("")
    const [contents,setContents] = useState("")


    const [나의함수] = useMutation(firstMutation)

    const sujin = async() => {
        const result = await 나의함수({
            variables : {
                writer : "ㅋㅋㅋ",
                title : "좀",
                contents : "ㅋㅋㅋ"
            }
        })
        console.log(result)
    }

    const onChangeUser = (event) =>{
        setUser(event.target.value)
    }

    const onChangeTitle = (event) =>{
        setTitle(event.target.value)
    }

    const onChangeContents = (event) =>{
        setContents(event.target.value)
    }

    return(
        <div>
            작성자 : <input type="text" onChange={onChangeUser}/><br />
            제목 : <input type="text" onChange={onChangeTitle}/><br />
            내용 : <input type="text" onChange={onChangeContents}/><br />
            <button onClick={sujin}>GRAPHQL-API 요청하기</button>
        </div>

    )
}