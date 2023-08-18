import { gql, useMutation } from "@apollo/client"

const CREATE_PRODUCT = gql`
    mutation createProduct ($seller : String, $createProductInput : CreateProductInput!){ #변수의 타입 적는 곳
        createProduct(seller : $seller, createProductInput : $createProductInput){  #실제 우리가 전달할 변수 적는 곳
            _id 
            number 
            message
        }
    }
` 

export default function GraphqlMutationPage(){
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables : {
                seller : "훈이",
                createProductInput : {
                    name : "뽀링클",
                    detail : "몸에 정말 좋음",
                    price : 3000
                }
            }
        })
        
        console.log(result)
    }

    //한 줄 일때는 괄호() 필요 없음
    return <button onClick={onClickSubmit}>Graphql-api 요청하기</button>
    
}