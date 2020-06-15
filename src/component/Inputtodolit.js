import React, { Component } from 'react';
import './TodoList.css';
import { Row, Col, Button } from 'antd';
import { Input } from 'antd';

class Inputtodolist extends Component {
    state = {
        isShow: false,
        value: ""
    }

    handleNumberChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleTogleInput = () => {
        this.setState({
            isShow: !this.state.isShow, // flag
            value: " "
        })
    }

    handleGetInput = () => {
        const { addCard, id } = this.props;
        addCard(id, this.state.value);
        this.handleTogleInput();
    }

    render() {
        return (
            <div>
                {this.state.isShow ?
                    <div>
                        <Input
                            type="text"
                            name="InputText"
                            value={this.state.value}
                            onChange={event => this.setState({ value: event.target.value })}
                        />
                        <Row>
                            <Col span={12}>
                                <div className="buttonSave">
                                    <Button onClick={this.handleGetInput}>Save</Button>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="buttonClose">
                                    <Button type="primary" onClick={this.handleTogleInput}>Close</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    :
                    <div className="addBtn" onClick={this.handleTogleInput} > + Add another card </div>
                }
            </div>
        );
    }

}
export default Inputtodolist