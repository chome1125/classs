import {BlueButton,RedInput} from './BoardWrite.style'
export default function BoardWriteUI(props){
    
    return(
        <div>
        작성자 : <RedInput type="text" onChange={props.bbb}/> <br />
        제목 : <RedInput type="text" onChange={props.ccc}/> <br />
        내용 : <RedInput type="text" onChange={props.ddd}/> <br />
        <BlueButton onClick={props.aaa}>Graphql-api 요청하기</button>
    </div>
    )
}