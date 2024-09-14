import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  return (
    <div className=" pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300">
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="data:image/png;base64,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" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl">{selectedConversation.fullname}</h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}

export default Chatuser;