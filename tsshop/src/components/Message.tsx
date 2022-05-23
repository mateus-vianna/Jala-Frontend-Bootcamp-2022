import react from 'react'
import MessageHoc from './HOC';


const test = (props: any): any => {
return({props.name? <p>{props.name}, {props.message}</p> : <a>FUiwheuifhewuifhwu</a> } )
}


const Message = MessageHoc(test);

export default Message;