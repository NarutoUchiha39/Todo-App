import React, { useState } from 'react'
import './Home.css'
import {Flex} from 'antd'
import Cards from './Cards';

const Home = (props) => {
   
  return (
    
    <div className='Home'>


        
            <Flex className='tasks' justify='center' gap="middle" wrap='wrap' vertical>
                {
                    props.tasks.map((element,index)=>(
                        props.filter == element.status || props.filter == element.urgency || props.filter==null?(
                        element.urgency=="urgent"?(
                        
                        <Cards taskName={element.taskName} description={element.description} status={element.status} color={"red"} key={element.id} unique={element.id} tasks={props.tasks} setTasks={props.setTasks}/>

                    ):(
                        <Cards taskName={element.taskName} description={element.description} status={element.status} color={"blue"} key={element.id} unique={element.id} tasks={props.tasks} setTasks={props.setTasks}/>

                    )
                        ):(

                            console.log('')
                        )
                    ))

                }
                
            </Flex>
        
    </div>
  )
            }
                    

export default Home