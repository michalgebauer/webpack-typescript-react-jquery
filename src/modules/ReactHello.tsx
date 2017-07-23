import * as React from 'react';

export interface ReactHelloProps { 
    name: string,
    age: number
}

export class ReactHello extends React.Component<ReactHelloProps, undefined> {
    render() {
        return <h1>Hello {this.props.name}, you are {this.props.age} years old</h1>;
    }
}