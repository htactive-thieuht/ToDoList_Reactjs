
import React from 'react';
import { withRouter } from 'react-router-dom'

const Sum = withRouter(class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstNumber: "",
            secondNumber: "",
            sum: ""
        }
    }

    // handelFNumberchange = (event) => {
    //     this.setState({ firstNumber: event.target.value });
    // }
    // handelSNumberchange(event) {                                ///cách 1: lấy value trong input
    //     this.setState({ secondNumber: event.target.value });
    // }

    // kernal code
    handleNumberChange = (event) => {// cách 2: lấy value trong input
        this.setState({ [event.target.name]: event.target.value });
        // if event from  name="firstNumber" -> event.target.name = firstNumber
        // so this.setState("firstNumber": event.target.value)
    }

    handleClick = (eventt) => {
        //cách 1: tái sử dụng được
        const { firstNumber, secondNumber } = this.state;
        this.setState({
            sum: parseInt(firstNumber) + parseInt(secondNumber)
        })
        // const event = {
        //     target: {
        //         name: "sum",
        //         value: parseInt(firstNumber) + parseInt(secondNumber)
        //     }
        // }
        // // resuse 
        // this.handleNumberChange(event)
        // this.setState({sum: parseInt(firstNumber) + parseInt(secondNumber)})->cách 2: khó tái sử dụng
    }

    render() {
        return (
            <form>
                <h1> <strong> Caculator </strong></h1>
                <label> First Number:  </ label>
                <input type="number" value={this.state.firstNumber} onChange={this.handleNumberChange} name="firstNumber" /><br />
                <label> Second Number:  </ label>
                <input type="number" value={this.state.seconNumber} onChange={this.handleNumberChange} name="secondNumber" /><br />
                <input type="button" value="Sum" onClick={this.handleClick} /><br />
                <hr />
                <h2> Your Results: </h2> {this.state.sum}
            </form>
        );
    }
})

export { Sum };