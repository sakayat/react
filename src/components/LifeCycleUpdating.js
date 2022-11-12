import React, {Component} from 'react';

class LifeCycleUpdating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 23
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate")
    // return null
    return true
}

getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
    return null
}

componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
}

    updateState = () => {
        this.setState({
            count: this.state.age = 56
        })
    }

    render() {
        console.log("render")
        return (
            <>
                <h1>LifeCycle Updating {this.state.age}</h1>
                <button onClick={this.updateState}>Click</button>
            </>
        );
    }
}

export default LifeCycleUpdating;
