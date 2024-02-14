import { useState } from "react"
import LoginInput from "../components/Login/LoginInput"
import SignUpInput from "../components/SignUp/SignUpInput"
import Button from "../components/common/Button"
import LoginSignUpBtn from "../components/common/LoginSignUpBtn"

const NewPassword = () =>{
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("")
    return(
    <>
        <div className="flex flex-col justify-center h-full items-center lg:w-[500px]">
        <div className="w-[170px] h-[50px] bg-main-color mb-[24px]" />
        <SignUpInput value={newPassword} title="새 비밀번호" name="newPassword" placeholder="새 비밀번호" className="override-padding"/>
        <SignUpInput value={newPasswordConfirm} title="새 비밀번호 확인" name="newPasswordConfirm" placeholder="새 비밀번호 확인" className="override-padding"/>
        <LoginSignUpBtn label="비밀번호 변경"/>
       </div>
        <Button label="비밀번호 변경" />
        </>)
}

export default NewPassword