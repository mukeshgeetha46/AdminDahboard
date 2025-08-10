import React, { useState, useEffect } from 'react';
import Chatlist from './Chatlist';
import ChatHeader from './ChatHeader';
import Chatbottom from './Chatbottom';
import Chatsidebar from './Chatsidebar';
import ChatBody from './ChatBody';
import useWindowSize from '../../utils/useWindowSize';

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(0);
  const [opensidebar, setOpensidebar] = useState(true);
  const { isMobile } = useWindowSize();

  // Reset to chat list when switching from mobile to desktop
  useEffect(() => {
    if (!isMobile) {
      setSelectedUser(0);
    }
  }, [isMobile]);

  const chatList = [
    { id: 1, name: "Mike Nielsen", role: "Designer", time: "58 minutes", profile: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "Sophie Turner", role: "UI/UX Designer", time: "2 hours", profile: "https://randomuser.me/api/portraits/women/45.jpg" },
    { id: 3, name: "John Smith", role: "Developer", time: "10 minutes", profile: "https://randomuser.me/api/portraits/men/21.jpg" },
    { id: 4, name: "Emma Watson", role: "Product Manager", time: "1 hour", profile: "https://randomuser.me/api/portraits/women/33.jpg" },
    { id: 5, name: "David Brown", role: "Backend Dev", time: "3 hours", profile: "https://randomuser.me/api/portraits/men/12.jpg" },
    { id: 6, name: "Lily James", role: "Frontend Dev", time: "5 minutes", profile: "https://randomuser.me/api/portraits/women/14.jpg" },
    { id: 7, name: "Chris Evans", role: "Fullstack Dev", time: "45 minutes", profile: "https://randomuser.me/api/portraits/men/44.jpg" },
    { id: 8, name: "Sophia White", role: "QA Engineer", time: "30 minutes", profile: "https://randomuser.me/api/portraits/women/26.jpg" },
    { id: 9, name: "James Wilson", role: "Scrum Master", time: "6 hours", profile: "https://randomuser.me/api/portraits/men/37.jpg" },
    { id: 10, name: "Olivia Davis", role: "Marketing", time: "20 minutes", profile: "https://randomuser.me/api/portraits/women/52.jpg" },
    { id: 11, name: "Daniel Lee", role: "Designer", time: "8 hours", profile: "https://randomuser.me/api/portraits/men/19.jpg" },
    { id: 12, name: "Amelia Clark", role: "Content Writer", time: "12 minutes", profile: "https://randomuser.me/api/portraits/women/36.jpg" },
    { id: 13, name: "Matthew Hall", role: "Developer", time: "1 day", profile: "https://randomuser.me/api/portraits/men/8.jpg" },
    { id: 14, name: "Charlotte Moore", role: "HR Manager", time: "25 minutes", profile: "https://randomuser.me/api/portraits/women/29.jpg" },
    { id: 15, name: "Andrew Scott", role: "DevOps Engineer", time: "2 days", profile: "https://randomuser.me/api/portraits/men/50.jpg" },
  ];

  // 📱 MOBILE VIEW
  if (isMobile) {
    if (selectedUser === 0) {
      // Show only chat list
      return (
        <div className="bg-white rounded-2xl shadow">
          <Chatlist
            chatList={chatList}
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
          />
        </div>
      );
    }
    // Show only selected chat
    return (
      <div className="bg-white rounded-2xl shadow h-[770px] grid grid-rows-9">
        <div className="row-span-1 flex flex-col justify-center p-5">
          <ChatHeader setOpensidebar={setOpensidebar} opensidebar={opensidebar} setSelectedUser={setSelectedUser} />
        </div>
        <div className="row-span-7 border-t border-b border-gray-300">
          <div className="grid grid-cols-7">
            <div className={`${!opensidebar ? 'col-span-7' : 'hidden'}`}>
              <ChatBody />
            </div>
            <div className={`${opensidebar ? 'col-span-7' : 'hidden'}  border-l border-gray-300`}>
              <Chatsidebar />
            </div>
          </div>
        </div>
        <div className="row-span-1 flex flex-col justify-center p-5">
          <Chatbottom />
        </div>
      </div>
    );
  }

  // 💻 DESKTOP VIEW
  return (
    <div className="grid grid-cols-9 bg-white rounded-2xl shadow h-[770px]">
      <div className="col-span-2 border-r border-gray-300">
        <Chatlist
          chatList={chatList}
          setSelectedUser={setSelectedUser}
          selectedUser={selectedUser}
        />
      </div>
      <div className="col-span-7 grid grid-rows-9">
        <div className="row-span-1 flex flex-col justify-center p-5">
          <ChatHeader setOpensidebar={setOpensidebar} opensidebar={opensidebar} />
        </div>
        <div className="row-span-7 border-t border-b border-gray-300">
          <div className="grid grid-cols-7">
            <div className={`${opensidebar ? 'col-span-5' : 'col-span-7'}`}>
              <ChatBody />
            </div>
            <div className={`${opensidebar ? 'col-span-2' : 'hidden'}  border-l border-gray-300`}>
              <Chatsidebar />
            </div>
          </div>
        </div>
        <div className="row-span-1 flex flex-col justify-center p-5">
          <Chatbottom />
        </div>
      </div>
    </div>
  );
};

export default Chat;
