import 'react-chat-elements/dist/main.css'; 
import { ChatItem, MessageBoxProps} from 'react-chat-elements-typescript';

import {useEffect, useState} from 'react';
import styled from 'styled-components';
import ChatList from './components/ChatList';
import ChatDetail from './components/ChatDetail';
import { Message } from './components/interfaces';
import useChats from '../../hooks/useChats';	

const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr;
`

const Chat = () => {
    const { getChatList, getCompleteChat, sendMessage } = useChats();

    const [selectedChatId, setSelectedChatId] = useState<string>('');

    const [selectedChat, setSelectedChat] = useState<Message[]>();

    const [chatList, setChatList] = useState<Message[]>([]);

    const [firstTime, setFirstTime] = useState<boolean>(true);

    const sendMessageHandler = async (message: Message) => {
        await sendMessage(message);
        getChatDetail(selectedChatId);
    }

    const getChatsList = async () => {
        const chats = await getChatList();
        setChatList(chats);
    }

    const getChatDetail = async (chatId: string) => {
        const chatDetails = await getCompleteChat(chatId);
        setSelectedChat(chatDetails);
    }

    const setSelectedChatIdHandler = (chatId: string) => {
        setSelectedChatId(chatId);
        setFirstTime(false);
    }

    useEffect(()=>{
        getChatsList();
    },[])

    useEffect(()=>{
        getChatDetail(selectedChatId);
    },[selectedChatId])

    return (
        <Container style={{height:'100%'}}>
            <ChatList selectChat={setSelectedChatIdHandler} chats={chatList} selectedChatId={selectedChatId}/>
            <ChatDetail selectedChat={selectedChat} sendMessage={sendMessageHandler} firstTime={firstTime}/>
        </Container>
    )
}
export default Chat;