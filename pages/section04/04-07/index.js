import { gql, useMutation } from "@apollo/client"
import axios from "axios"
import { useState } from "react"


export default function graphqlTest (){

    const getRest = async() => {
        const result = await axios.get("https://koreanjson.com/users")
        console.log(result)
    }

    return(
        <div>
            <button onClick={getRest}>REST-API 요청하기</button>
        </div>

    )
}