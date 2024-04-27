import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(30),
        })
      );
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="ml-11 p-2 w-[480px] h-[660px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((user, index) => (
            <ChatMessage key={index} name={user.name} message={user.message} />
          ))}
        </div>
      </div>
      <form
        className="ml-11 p-2 mt-2 w-[480px] border-2 border-gray-400 rounded-sm"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Adarsh",
            message: liveMessage,
          }))
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 p-2 focus:outline-none underline-offset-0"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="p-1 ml-3 bg-green-100 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
