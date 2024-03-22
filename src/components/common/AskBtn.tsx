const AskBtn = () => {
  return (
    <div className="h-[70px] w-[61.5px] fixed right-[12vw] bg-white float-right mt-[216px] z-50 bg-cover rounded-[12.2px]">
      <a id="chat-channel-button" href="javascript:chatChannel()">
        <img src="/icon_ask.svg" alt="카카오톡 채널 채팅하기 버튼" />
      </a>
    </div>
  );
};
export default AskBtn;
