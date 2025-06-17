import React from 'react'
import Chat from '../../../../StailasChat/Chat';
import UserImage2 from '../../../../../assets/image/chat/user1.png'
import UserImage from '../../../../../assets/image/chat/user2.png'
import Sent from '../../../../../assets/image/chat/sent.png'
import FileUpload from '../../../../StailasChat/FileUpload';
import Image from '../../../../../component/Image';

const AdminMessage = ({ isMessage, setIsMessage }) => {
      if (!isMessage) return null;
      const chat = [
    {
      id: 1,
      user_id: 2,
      text: "How am I looking?",
    },
    {
      id: 2,
      user_id: 1,
      text: `Wow, you look amazing! 😍
✨ Style Suggestion: Consider adding a statement necklace or colorful scarf for a bolder touch. A pastel blazer (lavender, mint, or peach) would really make this outfit pop!`,
    },
    {
      id: 3,
      user_id: 2,
      text: "Suggest some dress styles I should try.",
    },
    {
      id: 4,
      user_id: 1,
      text: `Wow, you look amazing! 😍 Let’s break it down:
✨ Style Suggestion: Consider adding a statement necklace or colorful scarf for a bolder touch. A pastel blazer (lavender, mint, or peach) would really make this outfit pop!`,
    },
  ]
      return (
            <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center overflow-auto">
                  <div className="bg-white p-8 rounded shadow-lg w-full mx-52 max-h-screen relative overflow-y-auto">
                        <div className='w-full mx-auto p-5 mt-10 rounded-md shadow-md font-inter bg-white'>

                              {/* Chat Messages */}
                              <div className='h-[600px] overflow-y-auto space-y-4 p-2'>
                                    {chat.map((message) => (
                                          <div
                                                key={message.id}
                                                className={`flex items-start ${message.user_id === 1 ? 'justify-start' : 'justify-end'
                                                      }`}
                                          >
                                                {/* Left user image */}
                                                {message.user_id === 1 && (
                                                      <img
                                                            src={UserImage}
                                                            alt="User 1"
                                                            className="w-8 h-8 rounded-full mr-2"
                                                      />
                                                )}

                                                {/* Message bubble */}
                                                <div
                                                      className={`px-4 py-2 rounded-lg max-w-3xl text-sm ${message.user_id === 1
                                                                  ? 'bg-[#FCF9F2] text-gray-800'
                                                                  : 'bg-secondary text-white'
                                                            }`}
                                                >
                                                      {message.text}
                                                </div>

                                                {/* Right user image */}
                                                {message.user_id === 2 && (
                                                      <img
                                                            src={UserImage2}
                                                            alt="User 2"
                                                            className="w-8 h-8 rounded-full ml-2"
                                                      />
                                                )}
                                          </div>
                                    ))}
                              </div>

                              {/* Optional: Message Input Field (Static for Now) */}
                              <div className="mt-6 flex items-center  pt-4 relative">
                                    <FileUpload />
                                    <input
                                          type="text"
                                          placeholder="Type a message..."
                                          className="flex-1 px-4 py-3.5 rounded-l-md focus:outline-none bg-gray-50 shadow-lg text-[14px]"
                                    />
                                    <button className="absolute right-3 top-11">
                                          <Image src={Sent} alt="Send" className="w-6 h-6 inline-block" />
                                    </button>
                              </div>
                        </div>

                        <button
                              onClick={() => setIsMessage(false)}
                              className="mt-4 px-2.5 py-1 bg-black text-white rounded-full font-bold font-inter absolute top-0 right-2 text-center"
                        >
                              X
                        </button>
                  </div>
            </div>
      )
}
export default AdminMessage
