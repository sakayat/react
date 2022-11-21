import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 4
        }
    }

    Increment(){
        this.setState({
            count: this.state.count + 1
        })
    }

    Decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h3>Count : {this.state.count}</h3> <br/>
                <button onClick={()=> this.Increment()}>++</button>
                <button onClick={()=> {this.Decrement()}}>--</button>
            </div>
        );
    }
}

export default Counter;
