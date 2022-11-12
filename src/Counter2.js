import React, {Component} from 'react';

class Counter2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 6
        }
    }

    Increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.Increment}>Increase</button>
            </div>
        );
    }
}

export default Counter2;
