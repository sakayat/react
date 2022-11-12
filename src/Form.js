import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : "",
            lastName : "",
            text: "Hello there, this is some text in a text area",
            selectValue: "coconut",

        }
    }

    firstNameHandle(e){
        this.setState({
            firstName: e.target.value
        })
    }

    lastNameHandle(e){
        this.setState({
            lastName: e.target.value
        })
    }

    textHandle(e){
        this.setState({
            text: e.target.value
        })
    }

    changedSelected(e){
        this.setState({
            selectValue: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.firstName, this.state.lastName, this.state.text, this.state.selectValue)
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="firstName">First Name : </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={(e) => this.firstNameHandle(e)}
                    />
                    <label htmlFor="lastName">Last Name : </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        value={this.state.lastName}
                        onChange={(e) => this.lastNameHandle(e)}

                    />
                    <textarea value={this.state.text} onChange={(e) => this.textHandle(e)}>

                    </textarea>

                    <select value={this.state.selectValue} onChange={(e) => {this.changedSelected(e)}}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>

                    <input type="submit" value="submit"/>
                </form>
            </>
        );
    }
}

export default Form;
