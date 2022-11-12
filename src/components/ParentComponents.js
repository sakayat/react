import React, {Component} from 'react';
import RegularComponents from "./RegularComponents";
import PureComValue from "./PureComValue";

class ParentComponents extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 4
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                count: this.state.count = 20
            })
        },1000)
    }


    render() {
        console.log("ParentComponents render-1")
        return (
            <div>
                <h1>Counter</h1>
                {/*<RegularComponents count={this.state.count}/>*/}
                <PureComValue count={this.state.count}/>
            </div>
        );
    }
}

export default ParentComponents;
