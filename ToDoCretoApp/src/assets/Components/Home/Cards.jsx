import React from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined,CheckCircleOutlined,AliwangwangOutlined   } from '@ant-design/icons';
const {  useState  } = React;
import {  Avatar, Card, Skeleton, Switch ,Checkbox,Col,Row,Flex } from 'antd';
const { Meta } = Card;

const Cards = (props) => {
    const [loading, setLoading] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
  };

  function switchGroups(event){
        let  id = event.target.id
        let array = [...props.tasks]
        console.log(props.tasks)
        for (let index = 0; index < props.tasks.length; index++) {
            
            let selected_task;
            if(array[index].id == id){
                selected_task = props.tasks[index]
                selected_task.status="Complete"
                array[index] = selected_task
                break;
            }
        }           
        props.setTasks(array)
  }
  
  return (
    
    <>
    {
        props.status=="Complete"?(
        
        <Card
            style={{
            width: 400,
            marginTop: 16,
            }}
        >
            
                            <Meta
                            avatar={<CheckCircleOutlined style={{fontSize:'30px', color:"green"}}/>}
                            title={props.taskName}
                            description={props.description}
                            />
                   
        </Card>

        ):(

            <Card
            style={{
            width: 400,
            marginTop: 16,
            }}
            
        >
              <Row >
                    <Col span={20}>
            <Meta
            avatar={<AliwangwangOutlined style={{fontSize:'30px', color:props.color}}/>}
            title={props.taskName}
            description={props.description}
            />
            </Col>
            <Flex justify='center' align='center'>
                    <Col span={4}>
                        
                                <Checkbox id={props.unique} value="Mark As Completed" onClick={switchGroups}></Checkbox>
                    </Col>
            </Flex>
            </Row>
        </Card>
        )

      
        }
    </>
  )
  
}



export default Cards
