import React from 'react';
import { Button, Checkbox, Form, Input ,Flex} from 'antd';
import { v4 as uuidv4 } from 'uuid';
import {Link, Navigate,redirect} from 'react-router-dom'

const CreateTask = (props) => {

  const onFinish = (values) => {
    let obj   = values
    obj['id'] = uuidv4();
    obj['status'] = "Incomplete"
    let array = [...props.tasks]
    array.push(values)
    props.setTasks(array)

  
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return(
    <>    
    <Link to={"/"}>Go back to home page</Link>
  <div className='wrapper' style={{display:'flex',width:"100%",justifyContent:"center", alignItems:"center",height:"80vh"}}>
   
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        width:"50%",
        left:"-6%",
        position:'relative'
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Task Name"
        name="taskName"
        rules={[
          {
            required: true,
            message: 'Please input your Task!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Urgency"
        name="urgency"
        rules={[
          {
            required: true,
            message: 'Please input your Urgency to get task done!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please Enter Short Description of your task',
          },
        ]}
      >
        <Input />
      </Form.Item>

      

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </>

)};
export default CreateTask;