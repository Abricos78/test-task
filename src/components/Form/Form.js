import { Modal } from 'antd';
import React, { useState } from 'react'
import style from './Form.module.css'

class Form extends React.Component  {

    state = {
        visible: this.props.visible.showForm,
        name: this.props.visible.name
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.visible.showForm !== prevProps.visible.showForm) {
            this.setState({
                visible: false
            })
        }
    }

    render() {
        const { name, visible } = this.state
        const { changeShowForm } = this.props
        debugger
        return (
            <div>
                <h1>{name}</h1>
                <Modal title='Add to basket' visible={visible} onCancel={changeShowForm} onOk={changeShowForm} >
                </Modal>
            </div>
        )
    }

}

export default Form
