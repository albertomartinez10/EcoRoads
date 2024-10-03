import { Message } from "./interfaces";
import styled from 'styled-components';
import './styles.css';
const MessageBoxContainer = styled.div`
    display:flex;
    flex-direction:column;
    max-width:65%;
    overflow-wrap: anywhere;
`
interface Props {
    message: Message;
}
const MessageBox = ({message}: Props):JSX.Element => {
    return(
        <MessageBoxContainer className={`${message.position === 'left' ? 
            'align-left px-4 py-2 text-white rounded bg-stone-500 shadow':
            'align-right px-4 py-2 text-gray-700 bg-gray-100 rounded shadow'}`}>
            <p>{message.user.name}</p>
            <p>{message.text}</p>
        </MessageBoxContainer>  
    )
  
}

export default MessageBox;