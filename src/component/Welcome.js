import React from 'react';
import { withRouter } from 'react-router-dom'

// class Welcome extends React.Component{
//     render() {
//         console.log(this.props);
//         const { person } = this.props
//         // const person = this.props.person
//     return <h1>Hello {person}</h1>;
//     }
// }

const SayST = withRouter(class extends React.Component {
    render() {
        console.log(this.props);
        console.log(this.children);
        const { whatToSay, person } = this.props
        // const person = this.props.person
        return <h1>{whatToSay} {person}</h1>;
    }
})
export { SayST };


// function () {
//     return <h1>Hello everyone. fdsfds</h1>;
// }