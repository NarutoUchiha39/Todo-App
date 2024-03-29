import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme,Flex } from 'antd';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './assets/Components/Home/Home';
import CreateTask from './assets/Components/CreateTask/CreateTask';
import Error from './assets/Components/Error/Error';
import {CheckCircleOutlined,AliwangwangOutlined,WarningOutlined,PlusCircleOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const App = () => {
  const[tasks,setTasks] = useState([
    {
        id:1,
        taskName:"Complete AI Assignment",
        urgency:"urgent",
        status:"Incomplete",
        description:"Completed Experiment 8"
    },
    {
        id:2,
        taskName:"Complete abstract of research Paper",
        urgency:"urgent",
        status:"Incomplete",
        description:"Complete abstract of kisan sevak"
    },
    {
        id:3,
        taskName:"Research model to use",
        urgency:"normal",
        status:"Complete",
        description:"Search which model to use"

    },
    {
        id:4,
        taskName:"Complete FMS assignment",
        urgency:"normal",
        status:"Incomplete",
        description:"Complete FMS experiment 8"
    }
])
  const [header,setHeader] = useState("All Tasks")
  const[filter,setFilter] = useState(null)
  const [collapsed, setCollapsed] = useState(false);
 
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  function setHeadet(event){

    let key = event.key
    if(key==1){
        setHeader("All Tasks")
        setFilter(null)

    }else if(key==2){

      setHeader("Completed Tasks")
      setFilter("Complete")
    }else if(key==3){
      setHeader("Pending Tasks")
      setFilter("Incomplete")

    }else if(key == 4){
      setHeader("Urgent Tasks")
      setFilter("urgent")
    }else if(key==5){
      setHeader("Create Task")
    }
    

  }
  return (
    <Layout style={{height:"100vh"}}>
      {/* <Sider trigger={null} style={{position:'fixed',height:'100vh'}}*/}
      <Sider
      trigger={null}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}

        collapsible collapsed={collapsed}
        
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'All Tasks',
              onClick:setHeadet
            },
            {
              key: '2',
              icon: <CheckCircleOutlined />,
              label: 'Completed Tasks',
              onClick:setHeadet
            },
            {
              key: '3',
              icon: <AliwangwangOutlined />,
              label: 'Pending Tasks',
              onClick:setHeadet
            },
            {
              key: '4',
              icon: <WarningOutlined />,
              label: 'Urgent Task',
              onClick:setHeadet
            },
            {
              key: '5',
              icon: <PlusCircleOutlined />,
              label:<Link to={"/CreateTask"}>Create Task</Link>,
              onClick:setHeadet
              
              
            }
          ]}
        />
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                  position:'fixed'
                }}
              />
              <Flex justify='center' align='center'>
              {header}
              </Flex>
            </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: 'initial'
          }}
        >
          
                <Routes>
                  <Route path='/' element={<Home tasks = {tasks} setTasks = {setTasks} filter={filter} setHeader={setFilter}/>}/>
                  <Route path='/CreateTask' element={<CreateTask tasks = {tasks} setTasks = {setTasks}/>}/>
                  <Route path='*' element={<Error/>}/>
                </Routes>
        </Content>
      </Layout>
    </Layout>

  );
};
export default App;