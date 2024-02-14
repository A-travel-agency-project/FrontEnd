import LoginInput from "../components/Login/LoginInput"
import Button from "../components/common/Button"
import LoginSignUpBtn from "../components/common/LoginSignUpBtn"

const ForgotPassword = () =>{
    return(
        <>
        <div className="flex flex-col justify-center h-full items-center lg:w-[500px]">
        <div className="w-[170px] h-[50px] bg-main-color mb-[24px]" />
        <p className="text-[10px]">회원가입 시 등록한 이메일 정보를 입력해주세요.</p>
        <LoginInput placeholder={"아이디(이메일 계정)"} />
        <LoginSignUpBtn label="비밀번호 초기화 메일 발송" />
        <p className="text-[10px] mt-2">이메일주소가 실제 사용하지 않는 이메일인 경우 고객센터에 연락 후 이메일을 변경하셔야 합니다.</p>
       </div>
        <Button label="비밀번호 변경" />
        </>
    )
}

export default ForgotPassword