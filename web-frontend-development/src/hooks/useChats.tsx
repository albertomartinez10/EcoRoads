import { Message } from "../pages/Chat/components/interfaces";

const useChats = () => {
    
    const getCompleteChat = async (chat_id: string) => {
        return chats.filter((chat: Message)=>chat.chat_id === chat_id);
    }

    const getChatList = async () => {
        return chatList;
    }

    const sendMessage = async (message: Message) => {
        chats = [...chats, message];
    }

    return {
        getCompleteChat,
        getChatList,
        sendMessage
    }
}

export default useChats;



const chatList: Message[] = [
{
    chat_id:'1',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'left',
    user: {
        _id: '1',
        name: 'John Doe',
        avatar_url: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/07-1024.png'
    }
},
{
    chat_id:'2',
    text: 'Hello',
    createdAt: new Date(),
    position: 'right',
    user: {
        _id: '1',
        name:'isis'
    }
},
{
    chat_id:'3',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'left',
    user: {
        _id: '1',
        name:'dani',
    }
},
{
    chat_id:'4',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'left',
    user: {
        _id: '1',
        name: 'John Doe',
        avatar_url: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/07-1024.png'
    }
},
{
    chat_id:'5',
    text: 'Hello',
    createdAt: new Date(),
    position: 'right',
    user: {
        _id: '1',
        name:'isis'
    }
},
{
    chat_id:'6',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'left',
    user: {
        _id: '1',
        name:'dani',
    }
},
{
    chat_id:'7',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'left',
    user: {
        _id: '1',
        name: 'John Doe',
        avatar_url: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/07-1024.png'
    }
},
{
    chat_id:'8',
    text: 'Hello',
    createdAt: new Date(),
    position: 'right',
    user: {
        _id: '1',
        name:'isis'
    }
},
{
    chat_id:'9',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'left',
    user: {
        _id: '1',
        name:'dani',
    }
},
{
    chat_id:'10',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'left',
    user: {
        _id: '1',
        name:'dani',
    }
},
{
    chat_id:'11',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'left',
    user: {
        _id: '1',
        name:'dani',
    }
},
{
    chat_id:'11',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'left',
    user: {
        _id: '1',
        name:'dani',
    }
},
]





let chats: Message[] = [{
    chat_id:'1',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'left',
    user: {
        _id: '1',
        name: 'John Doe',
        avatar_url: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/07-1024.png'
    }
},
{
    chat_id:'2',
    text: 'Hello',
    createdAt: new Date(),
    position: 'right',
    user: {
        _id: '1',
        name:'isis'
    }
},
{
    chat_id:'3',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'left',
    user: {
        _id: '1',
        name:'dani',
    }
},
{
    chat_id:'1',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'right',
    user: {
        _id: '1',
        name: 'John Doe',
        avatar_url: 'https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/07-1024.png'
    }
},
{
    chat_id:'2',
    text: 'Hello',
    createdAt: new Date(),
    position: 'left',
    user: {
        _id: '1',
        name:'isis'
    }
},
{
    chat_id:'3',
    text: 'Hello world qfasdufo asdfjasndf asdouifh oasdfuihasdfuioasdf uioasdfiouh asdfuioasfasduiofhasdfuio dfasuiodf',
    createdAt: new Date(),
    position: 'right',
    user: {
        _id: '1',
        name:'dani',
    }
}]