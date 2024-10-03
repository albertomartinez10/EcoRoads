import React from "react";
import { Message } from "./interfaces";
import styled from "styled-components";

const Img = styled.img`
    width:50px;
    height:50px;
    border-radius:50px;
`

const ChatContainer = styled.div`
    display:flex;
    align-items:center;
    gap: 15px;
    cursor: pointer;
    padding: 5px;
    border-bottom: 1px solid black;
    min-height: 75px;

    &:hover {
        background-color: #2e60f729 !important;
    }
`

const ChatListContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    border-right: 1px solid black;
`

interface Props {
    selectChat: (chat_id: string) => void; 
    chats: Message[];
    selectedChatId: string;
}

const MAX_CHAT_LENGTH = 50;
const ChatList = ({selectChat, chats, selectedChatId}:Props): JSX.Element => {
   return(
        <ChatListContainer>
            {
            chats.map((chat: Message) => 
                <ChatContainer 
                    key={chat.chat_id} 
                    onClick={()=>selectChat(chat.chat_id)}
                    style={{'background': `${selectedChatId === chat.chat_id ? '#2e60f729' : '#0000002b'} `}}
                >
                    <Img src={chat.user.avatar_url ?? 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'}></Img>
                    <div>
                        <p>{chat.user.name}</p>
                        <p>{`${chat.text.length > MAX_CHAT_LENGTH ? chat.text.substring(0, MAX_CHAT_LENGTH) + ' ...' : chat.text}`}</p>
                    </div>

                </ChatContainer>
            )}
            
        </ChatListContainer>        
   )
}

export default ChatList;