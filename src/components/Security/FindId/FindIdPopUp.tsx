import { useState } from "react"

interface FindIdProps{
    setCancle:(value:boolean)=> void;
}
const FindPopUp = ({setCancle}:FindIdProps)=>{
    const [isActive, setIsActive] = useState(true)
return(

    <div className="absolute py-11 centerPosition border flex flex-col justify-center items-center border-main-color w-1/3 bg-white rounded-lg shadow-md bg-no-repeat">
        {
            isActive ? 
        <>
        <div>회원님의 아이디는</div>
        <div className="my-6">test@test.com</div>
        <div className="mb-6">입니다.</div>
        <button className="bg-main-color flex justify-center items-center px-12 py-2 rounded-2xl">
            <span className="text-white">로그인 하기</span>
        </button>
        </>:<div>일치하는 아이디가 없습니다.</div>
        }
        
        <button className="absolute top-0 right-[20px]" onClick={()=>{setCancle(false)}}>
            <span>x</span>
        </button>
    </div>
)
}

export default FindPopUp