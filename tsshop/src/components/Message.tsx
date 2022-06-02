import React from 'react'
import MessageHoc from './HOC';


const test = (props: any): any => {
    return (<p> {props.name}, {props.message}</p >)
}


const Message = MessageHoc(test);

export default Message;