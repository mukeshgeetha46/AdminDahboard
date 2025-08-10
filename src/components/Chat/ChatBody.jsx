import React from "react";
import image1 from "../../assets/chat/product-1-C2bm6yWA.jpg";
import profile from "../../assets/Profile/user-6-DXcW9yFx.jpg";
import video from '../../assets/chat/6831190-uhd_2560_1440_25fps.mp4'
import doc from '../../assets/chat/tablecomponents.txt'
import audio from '../../assets/chat/IPhone Alarm Ringtone Download - MobCup.Com.Co.mp3'


const ChatBody = () => {
  const Messages = [
    {
      id: 1,
      message: "Nug gi fulzu futetu hilawu.",
      datetime: "5 hours ago",
      profile: profile,
      sendername: "James Johnson",
      img: "",
      subtype: "text",
      sender: true,
      receiver: false,
    },
    {
      id: 2,
      message: "Here’s the document",
      datetime: "4 hours ago",
      profile: profile,
      sendername: "James Johnson",
      file: doc,
      subtype: "document",
      sender: false,
      receiver: true,
    },
    {
      id: 3,
      message: "Listen to this audio",
      datetime: "3 hours ago",
      profile: profile,
      sendername: "James Johnson",
      audio: audio,
      subtype: "audio",
      sender: false,
      receiver: true,
    },
    {
      id: 4,
      message: "Watch this video",
      datetime: "2 hours ago",
      profile: profile,
      sendername: "James Johnson",
      video: video,
      subtype: "video",
      sender: true,
      receiver: false,
    },
    {
      id: 5,
      message: "Replying to previous message",
      datetime: "1 hour ago",
      profile: profile,
      sendername: "James Johnson",
      replyTo: {
        sendername: "James Johnson",
        message: "Nug gi fulzu futetu hilawu.",
      },
      subtype: "reply",
      sender: false,
      receiver: true,
    },
    {
      id: 6,
      message: "",
      datetime: "just now",
      profile: profile,
      sendername: "James Johnson",
      img: image1,
      subtype: "image",
      sender: false,
      receiver: true,
    },
  ];

  return (
    <div className="h-[597px] overflow-auto hide-scrollbar">
      <div className="p-5 flex flex-col gap-10">
        {Messages.map((Msg) => (
          <div
            key={Msg.id}
            className={`flex ${
              Msg.sender
                ? "justify-end items-center"
                : "justify-start items-start gap-4"
            }`}
          >
            {Msg.receiver && (
              <img
                className="w-[40px] h-[40px] rounded-full object-cover"
                src={Msg.profile}
                alt="profile"
              />
            )}
            <div className="flex flex-col gap-1">
              {/* Date & Time */}
              <div
                className={`flex items-center ${
                  Msg.sender ? "justify-end" : "justify-start"
                }`}
              >
                <p className="text-[12px] leading-[16px]">{Msg.datetime}</p>
              </div>

              {/* TEXT */}
              {Msg.subtype === "text" && (
                <p className="text-[14px] leading-[21px] px-3 py-2 bg-[#E5F3FB] w-fit rounded-[5px]">
                  {Msg.message}
                </p>
              )}

              {/* IMAGE */}
              {Msg.subtype === "image" && (
                <img
                  src={Msg.img}
                  className="w-[220px] rounded-[6px]"
                  alt="sent"
                />
              )}

              {/* VIDEO */}
              {Msg.subtype === "video" && (
                <video
                  src={Msg.video}
                  controls
                  className="w-[300px] rounded-[6px]"
                />
              )}

              {/* AUDIO */}
              {Msg.subtype === "audio" && (
                <audio src={Msg.audio} controls className="w-[250px]" />
              )}

              {/* DOCUMENT */}
              {Msg.subtype === "document" && (
                <a
                  href={Msg.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-100 text-blue-600 rounded hover:underline"
                >
                  📄 {Msg.message}
                </a>
              )}

              {/* REPLY */}
              {Msg.subtype === "reply" && (
                <div className="bg-gray-100 rounded p-2 w-fit">
                  <div className="border-l-4 border-blue-500 pl-2 mb-1 text-sm text-gray-500">
                    <p className="font-medium">{Msg.replyTo.sendername}</p>
                    <p className="text-xs">{Msg.replyTo.message}</p>
                  </div>
                  <p>{Msg.message}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBody;
