import React, {Component} from 'react';

class LifeCycleMounting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "hello sunny"
        }
        console.log("Constructor is running")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps running")
        return null
    }

    componentDidMount() {
        console.log("component Did mounted")
    }

    render() {
        return (
            <div>
                <h1>Life CycleMounting</h1>
            </div>
        );
    }
}

export default LifeCycleMounting;
