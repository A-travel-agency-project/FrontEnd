import { useState } from "react"
import LoginInput from "../components/Login/LoginInput"
import FindPopUp from "../components/Security/FindId/FindIdPopUp"
import Button from "../components/common/Button"
import LoginSignUpBtn from "../components/common/LoginSignUpBtn"

const FindId = () =>{
    const [cancle, setCancle] = useState(false)
    
    return(
        <>
      <div className="flex flex-col justify-center h-full items-center lg:w-[500px]">
        <div className="w-[170px] h-[50px] bg-main-color mb-[24px]" />
        <LoginInput placeholder={"이름"} />
        <LoginInput placeholder={"핸드폰 번호"} />
        <LoginSignUpBtn label="아이디 찾기" onClick={()=>{setCancle(true)}}/>
        <div className="flex justify-between w-full px-4 my-5 text-xs">
          <div className="flex">
            <button className="mr-4">아이디 찾기</button>
            <button>비밀번호 초기화</button>
          </div>
          <button>회원가입</button>
        </div>
        <div className="bg-main-color w-full h-[1px]" />
        <div className="flex justify-end w-full">
          <button>카카오</button>
          <button>네이버</button>
        </div>
      </div>
      <Button label={"아이디 찾기"} />
      {
cancle &&
      <FindPopUp setCancle={setCancle}/>
      }
    </>
    )
}
export default FindId