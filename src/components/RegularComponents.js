import React, {Component} from 'react';

class RegularComponents extends Component {
    render() {
        console.log("RegularComponents render-2")
        return (
            <div>
                <h1>Welcome regular components {this.props.count}</h1>
            </div>
        );
    }
}

export default RegularComponents;
