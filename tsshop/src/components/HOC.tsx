import { Component } from "react";

const initialState = {
    name: "HOC",
    message: "Comming from HOC"
}

type State = Readonly<typeof initialState>

const MessageHoc = (WrappedComponent: any) => {

    class HOC extends Component<{}, State>{
        readonly state: State = initialState;

        render() {
            return (<WrappedComponent name={this.state.name} message={this.state.message} />)
        }
    }
    return HOC;
}

export default MessageHoc;