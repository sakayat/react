import React, {PureComponent} from "react";

class PureComValue extends  PureComponent {

    render() {
        console.log("PureComponent render")
        return (
            <>
            <h1>Welcome pure components {this.props.count}</h1>
            </>
        )
    }
}

export default PureComValue
