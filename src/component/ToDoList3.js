

import React, { Component } from 'react';
import './TodoList.css';
import Inputtodolist from './Inputtodolit';

import { Row, Col, Button } from 'antd';


class ToDoList3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listTasks: [],
            listItemTask: []
        }
    }

    componentDidMount() {
        this.setState({
            listTasks: [
                {
                    id: 1,
                    titleName: "To Do",
                    listItemTasks: [
                        {
                            idItemtask: 1,
                            itemTaskName: "task1"
                        },
                        {
                            idItemtask: 2,
                            itemTaskName: "task2"
                        },

                    ],
                },
                {
                    id: "2",
                    titleName: "Doing",
                    listItemTasks: [
                        {
                            idItemtask: 1,
                            itemTaskName: "Task1"
                        },
                        {
                            idItemtask: 2,
                            itemTaskName: "Task2"
                        }
                    ],
                }
            ]
        })
    }

    handleAddCardClick = (listItemTasksId) => {
        console.log('listId', listItemTasksId);
    }



    addTask = id => {
        const NewListTask = this.state.listTasks.map(item => {
            if (item.id == id) {

                return {
                    ...item,

                    listItemTasks: [...item.listItemTasks, { idItemtask: 100, itemTaskName: item.input.value }]
                }
            } else {
                return item

            }
        })

        this.setState({ listTasks: NewListTask })
    }

    addCard = (id, value) => {
        this.setState({
            listTasks: this.state.listTasks.map(item => {
                if (item.id === id) {
                    console.log(true, '????');

                    let { listItemTasks } = item;
                    listItemTasks = [...listItemTasks, { idItemtask: 100, itemTaskName: value }];
                    return { ...item, listItemTasks }
                }
                return item
            })
        })
    }

    render() {
        return (
            <div className="todolist">
                <div className="content">
                    <Row className="content">

                        {(this.state.listTasks || []).map(listTask => {
                            return <Col span={4} key={listTask.id}>
                                <div className="listcards">
                                    <h1><center>{listTask.titleName}</center></h1>
                                    {(listTask.listItemTasks || []).map(itemTask => (<div className="itemCard " key={itemTask.idItemtask}>
                                        {itemTask.itemTaskName}

                                    </div>))}
                                    <div className="add-card">
                                        <div className="add">
                                            <Inputtodolist addCard={this.addCard} id={listTask.id} />
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
export { ToDoList3 };