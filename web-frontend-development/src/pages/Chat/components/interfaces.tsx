export interface Message {
    createdAt: Date;
    text: string;
    user: UserChat;
    position: 'left' | 'right';
    chat_id: string;

}

export interface UserChat {
    _id: string;
    name: string;
    avatar_url?: string|undefined;
}
export interface Chat {
    messages: Message[];
}