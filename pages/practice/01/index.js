import { useRouter } from "next/router"

export default function page(){
    const router = useRouter()

    const  onClickpage1 = () => {
        router.push('/resultpage/100')
    }

    const  onClickpage2 = () => {
        router.push("/resultpage/101")
    }

    const  onClickpage3 = () => {
        router.push("/resultpage/102")
    }

    return(
        <div>
            <button onClick={onClickpage1}>1번 게시물로 이동</button>
            <button onClick={onClickpage2}>2번 게시물로 이동</button>
            <button onClick={onClickpage3}>3번 게시물로 이동</button>
        </div>
    )
}