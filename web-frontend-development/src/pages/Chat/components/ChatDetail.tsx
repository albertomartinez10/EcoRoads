import { Message } from "./interfaces";
import MessageBox from "./MessageBox";
import Input from "./Input";
import { useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:grid;
    align-content: space-between;
    padding: 5px;
    overflow: hidden;
    background-image: url('https://w0.peakpx.com/wallpaper/920/587/HD-wallpaper-whatsapp-app-fondo-sms-verde-wall-whatsapp.jpg');
`
const ChatDetailContainer = styled.div`
    display:grid;
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
`

interface Props {
    selectedChat: Message[] | undefined;
    sendMessage: (message: Message) => Promise<void>;
    firstTime: boolean;
}
const ChatDetail = ({selectedChat, sendMessage, firstTime}:Props): JSX.Element => {
    const messagesEndRef = useRef<any>(null);

    const scrollToBottom = () => {
        messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
    }


    const [message, setMessage] = useState<string>('');

    const onSend = async () => {
        await sendMessage({
            createdAt: new Date(),
            text: message,
            user: {
                _id: '1',
                name: 'Admin',
            },
            position: 'right',
            chat_id: selectedChat ? selectedChat[0].chat_id: '',
        });

        setMessage('');
        scrollToBottom();
    }

    return(
        
        <Container>
            <ChatDetailContainer className="space-y-2 pb-2" ref={messagesEndRef}>
                {
                    selectedChat?.map((message,index)=><MessageBox key={index} message={message}/>)
                }
            </ChatDetailContainer>
            {!firstTime && <Input setMessage={setMessage} message={message} onSend={onSend}/>}
        </Container>

    )
}
export default ChatDetail;