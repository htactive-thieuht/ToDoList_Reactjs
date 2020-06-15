

import React, { Component } from 'react';
//import { Row, Col, Button } from 'antd';
import './TodoList.css';
import { Row, Col, Button, Input, Popover } from 'antd';
import { withRouter } from "react-router-dom";


class ToDoList2 extends Component {
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
                    input: {
                        isShow: false, // flag
                        value: ""
                    }
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
                    input: {
                        isShow: false, // flag
                        value: ""
                    }
                }
            ]
        })
    }

    handleAddCardClick = (listItemTasksId) => {
        console.log('listId', listItemTasksId);
    }

    // ChangeInputValue=(event)=>{
    //     this.setState({ [event.target.name]: event.target.value });
    // }

    // ChangeInputItemTask = (listId) => {
    //     console.log('addItemCard', this.state.listTasks);
    //     const newListTask = this.state.listTasks.map(list => {
    //         if (list.id === listId) {
    //             return {
    //                 ...list,
    //                 input: {
    //                     isShow: true, // flag
    //                     value: ""
    //                 }
    //             }
    //         } else {
    //             return list
    //         }
    //     })
    //     this.setState({ listTasks: newListTask })
    // }

    // hanleClose=(listId)=>{
    //     const newListTask=this.state.listTasks.map(item =>{
    //         if(item.id==listId){
    //             return {
    //                 ...item,
    //                 input: {
    //                     isShow: false, // flag
    //                     value: ""
    //                 }
    //             }
    //         } else {
    //             return item
    //         }  
    //     })    
    //     this.setState({ listTasks: newListTask })
         
    // }

    handleInputValue=(listId,event)=>{
        const newListTask=this.state.listTasks.map(item =>{
            if(item.id==listId){
                return {
                    ...item,
                    input: {
                        isShow: true, // flag
                        value: event.target.value
                    }
                }
            } else {
                return item
            }  
        })    
        this.setState({ listTasks: newListTask })
    }

    handleTogleInput =(listId) => {
            console.log('addItemCard', this.state.listTasks);
            const newListTask = this.state.listTasks.map(list => {
                if (list.id === listId) {
                    return {
                        ...list,
                        input: {
                            isShow: ! list.input.isShow, // flag
                            value: ""
                        }
                    }
                } else {
                    return list
                }
            })
            this.setState({ listTasks: newListTask })
        }

    addTask = id => {
        const NewListTask=this.state.listTasks.map(item=>{
            if(item.id == id){

               return{
                   ...item,

                   listItemTasks: [...item.listItemTasks,{idItemtask:100, itemTaskName: item.input.value }]
                   
               }
            } else {
                return item
            
            }
        })

        this.setState({listTasks: NewListTask})

        // this.setState({listTasks: NewListTask}), (listId) => {  
        //     // document.getElementById("form").reset(); 
        //     // this.setState({
        //     // item: ""
        //     // })
        //     const newListTasks=this.state.listTasks.map(item =>{
        //         if(item.id==listId){
        //             return {
        //                 ...item,
        //                 input: {
        //                     isShow: true, // flag
        //                     value: ""
        //                 }
        //             }
        //         } else {
        //             return item
        //         }  
        //     })    
        //     this.setState({ listTasks: newListTasks })
        // }
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
                                            {
                                                listTask.input.isShow ?
                                                    <div id="form">
                                                        <Input type="text" value={listTask.input.value}  onChange={(event) => this.handleInputValue(listTask.id,event)} />
                                                        <Row>
                                                            <Col span={12}>
                                                                <div className="buttonSave">
                                                                    <Button  onClick={() => this.addTask(listTask.id)} type="primary">Save</Button>
                                                                </div>
                                                            </Col>
                                                            <Col span={12}>
                                                                <div className="buttonClose">
                                                                    <Button  onClick={() => this.handleTogleInput(listTask.id)} type="primary" >Close</Button>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    :
                                                    <div className="addBtn" onClick={() => this.handleTogleInput(listTask.id)}> + Add another card</div>
                                            }
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
export { ToDoList2 };