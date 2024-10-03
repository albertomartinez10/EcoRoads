import { FormEvent } from 'react'; 
import styled from 'styled-components';
const InputContainer = styled.div`
    padding: 1em;
    background-color: white;
`
interface Props {
    setMessage: React.Dispatch<React.SetStateAction<string>>
    message: string;
    onSend: () => void;
}
const Input = ({setMessage, message, onSend}:Props): JSX.Element => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }
    const sendMessage = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(message);
        if(message.trim().length > 0) onSend(); 
    }

    return (

        <InputContainer>
            <form className="flex items-center border-b border-teal-500 py-2" onSubmit={ e =>sendMessage(e)}>
                <input 
                    value={message} 
                    onChange={onChange} 
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    type="text" 
                    placeholder="Respond ..." 
                    aria-label="Full name"
                />
                <button 
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" 
                    type="submit"
                >
                Send 
                </button>
            </form>
        </InputContainer>
    )
}
export default Input;