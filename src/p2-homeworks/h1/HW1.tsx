import React from 'react'
import Message from './Message'

type  typeData = {
    avatar: string,
    name: string,
    messages: string,
    time: string
}
const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Ты нажал NPM?',
    time: '22:00',
}

function HW1() {
    return (
        <div>


            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


        </div>
    )
}

export default HW1
