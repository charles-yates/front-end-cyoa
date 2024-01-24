import React, {useState} from 'react';
import { Api } from "../api";

export default function CreateComment() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const onNameChange = (event) => {
        setName(event.target.value);
    }
    const onMessageChange = (event) => {
        setMessage(event.target.value);
    }
    const onSubmit = () => {
        Api.post("http://localhost:3000/createComment", {'name': name, 'message': message});
    } 

    return (
        <div style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <label>Name</label>
            <input 
            name="name"
            type="text" 
            style={{
                borderWidth: "none",
                marginBottom: "10px",
                padding: "5px",
                width: "400px",
            }}
            value={name}
            onChange={onNameChange}/>
            <textarea 
            name="message"
            style={{
                borderWidth: "none",
                height: "100px",
                marginBottom: "10px",
                padding: "5px",
                resize: "none",
                width: "400px",
            }}
            value={message}
            onChange={onMessageChange}
            />
            <button onClick={onSubmit}>Comment</button>
        </div>
    )
}
