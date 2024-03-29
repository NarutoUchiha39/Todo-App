import React from 'react'
import {CheckCircleOutlined,AliwangwangOutlined,WarningOutlined,PlusCircleOutlined } from '@ant-design/icons';
import {Layout} from 'antd'
const {Sider} = Layout

const SideBar = ({setHeader,setFilter}) => {
    function redirect(event)
    {
  
  
  
    }
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
      }
      
  
    }
  return (
    <>
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
              // label: <Link to={"/CreateTask"}>Create</Link>
              
            }
          ]}
        />
      </Sider>
    </>
  )
}

export default SideBar