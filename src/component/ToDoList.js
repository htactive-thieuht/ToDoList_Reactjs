import React, { Component } from 'react';
//import { Row, Col, Button } from 'antd';
import './TodoList.css';
import { Row, Col, Button, Input, Popover } from 'antd';
import { withRouter } from "react-router-dom";


class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
            listIsAddTask: [],
            valueAdd: "",
            cardName: '',
        }
    }
    componentDidMount() {
        this.setState({
            dataList: [
                {
                    listId: 1,
                    listName: "ToDo",
                    listTask: [
                        {
                            taskId: 1,
                            nameTask: "Card 1"
                        },
                        {
                            taskId: 2,
                            nameTask: "Card 2"
                        },
                        {
                            taskId: 3,
                            nameTask: "Card 3"
                        }
                    ]
                },
                {
                    listId: 2,
                    listName: "Doing",
                    listTask: [
                        {
                            taskId: 4,
                            nameTask: "Card 4"
                        },
                        {
                            taskId: 5,
                            nameTask: "Card 5"
                        },
                        {
                            taskId: 6,
                            nameTask: "Card 6"
                        }
                    ]
                }
            ]
        }, () => {
            this.setState({
                listIsAddTask: this.state.dataList.map(item => ({ id: item.listId, isAdd: false }))
            })
        })
    }
    addItemCard = (idList) => {
        console.log('addItemCard', this.state.listIsAddTask);
        this.setState({
            listIsAddTask: this.state.listIsAddTask.map(item => {
                if (item.id === idList) {
                    return { ...item, isAdd: !item.isAdd }
                } else {
                    return item
                }
            })
        })
    }

    // createTasks = item => {
    //     return (
    //       <div key={item.key}>
    //         {item.nameTask}
    //       </div>
    //     )
    //   }


    handleCardNemeChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    onChangeTextAdd = (event) => {
        console.log(event.target.value, '????');
    }
    isCheckAddList = (idList) => {
        const checkAddlist = this.state.listIsAddTask.find(item => item.id === idList);
        return checkAddlist && checkAddlist.isAdd
    }

    addTask = id => {
        const valueAdd = this.state[`cardTitle-${id}`];
        this.setState({
            dataList: this.state.dataList.map(item => {
                if (item.listId === id) {
                    let { listTask } = item;
                    console.log(listTask, 'listTask');
                    const idTaskEnd = listTask[listTask.length - 1].taskId;
                    listTask = [...listTask, { taskId: idTaskEnd + 1, nameTask: valueAdd }];
                    return { ...item, listTask }
                }
                return item

            })
        })
        const key = `cardTitle-${id}`;
        console.log(key, 'key');

        this.setState({
            [key]: ""
        }, console.log(this.state[key], '???????????????'))
        // this.setState({ [valueAdd]: '' })
        // this.setState({ [`cardTitle-${id}`]: '' })
        // console.log(this.state);


    }
    render() {
        return (
            <div className="todolist">
                <div className="content">
                    <Row>
                        <Col span={8}>
                            <div className="header-left" >
                                <Button>Home</Button>
                                <Button>Boards</Button>
                                <Button>Search bar</Button>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="header-midle"><h1><center>Logo</center></h1></div>
                        </Col>
                        <Col span={8}>
                            <div className="header-right">
                                <Button>Add</Button>
                                <Button>Info</Button>
                                <Button>Bell</Button>
                                <Button>Gear</Button>
                                <Button>Avatar</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row className="boardHeader ">
                        <Col span={12}>
                            <div className="header-left" >
                                <Button>Board Title</Button>
                                <Button>Star</Button>
                                <Button>Personal</Button>
                                <Button>Private</Button>
                            </div>

                        </Col>
                        <Col span={12}>
                            <div className="header-right">
                                <Button>Show menu</Button>
                                <Button>Butler</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row className="content">
                        {this.state.dataList.map(list => {
                            return <Col span={4} key={list.listId}>
                                <div className="listcards">
                                    <h1><center>{list.listName}</center></h1>
                                    {(list.listTask || []).map(task => (<div className="itemCard " key={task.taskId}>
                                        {task.nameTask}

                                    </div>))}
                                    <div className="add-card">
                                        <div className="add">
                                            {/* <Popover content={content} title="Title" trigger="click">
                                                <Button>Click me</Button>
                                            </Popover> */}
                                            {/* <Input type="text" onChange={this.onChangeTextAdd} name="add item card" placeholder="Enter name of task" /><br /> */}
                                            {this.isCheckAddList(list.listId) ?
                                                <div>
                                                    <Input type="text" name={`cardTitle-${list.listId}`} onChange={this.handleCardNemeChange} value={this.state[`cardTitle-${list.listId}`]} />
                                                    <Row>
                                                        <Col span={12}>
                                                            <div className="buttonSave">
                                                                <Button type="primary" onClick={() => { this.addTask(list.listId) }} >Save</Button>
                                                            </div>
                                                        </Col>
                                                        <Col span={12}>
                                                            <div className="buttonClose">
                                                                <Button type="primary" >Close</Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                :
                                                <span className="addBtn" onClick={() => this.addItemCard(list.listId)} >+ Add another card</span>}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        })}
                    </Row>
                </div>
            </div>
        );
    }
}
export { ToDoList };