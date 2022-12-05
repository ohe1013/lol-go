

export type User = {
    id: String;
    name: String;
    imageUri: String;
}

export type Message = {
    id: String;
    content : string;
    createdAt: string;
}

export type ChartRoom ={
    id: String;
    users : [User];
    lastMessage: string;
    
}