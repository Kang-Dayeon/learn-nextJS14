// 존재하지 않는 페이지에 보여줄 not found 페이지를 설정 해서 자동으로 보여주는 특별한 파일임

import Navigation from "../components/navigation";

export default function NotFound(){
    return (
        <>
            <Navigation />
            <h1>Not Found🚫</h1>
        </>
    )
}