import { Form, Input, Select, Button} from 'antd';
import React, { useState } from 'react'
import style from './Form.module.css'

const { Option } = Select

const ModalForm = ({visibl, changeShowForm, name}) => {
    const [visible, setVisible] = useState(visibl)
    const [form] = Form.useForm()

    const onFinish = (value) => {
        debugger
        setVisible(false)
        changeShowForm(false)
    }

    const onCancel = () => {
        setVisible(false)
        changeShowForm(false)
    }

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
    };

      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        }
      };

      const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70
            }}
            size = {'small'}
          >
            <Option value="7">+7</Option>
          </Select>
        </Form.Item>
      );
        
        return (
            <div className={style.modal}>
                <div className={style.form}>
                    <Form form={form} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
                        initialValues={{
                            product: name,
                            prefix: '+7',
                        }}
                    >
                        <Form.Item
                            name={['user', 'name']}
                            label="Имя"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'phone']}
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                    required: true
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name='product' label="Название товара">
                            <Input />
                        </Form.Item>
                        <div className={style.buttons}>
                            <Form.Item >
                                <Button type="primary" onClick={onCancel}>
                                    Cancel
                                </Button>
                            </Form.Item>
                            <Form.Item >
                                <Button style={{marginLeft: '10px'}} type="primary" htmlType="submit">
                                    Ok
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        )
}


export default ModalForm
