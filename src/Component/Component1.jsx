import React, {Component} from 'react'
import Component2 from './Component2'
import Biodata from './Biodata'
//component di react ada 2 1 statefull component, 2 stateless component
//membuat statefull component
class Component1 extends Component{
    return
        render(){
            return (
                <div>
                    <h1>halo hehehehe</h1>
                    <p>woi hahahahaha</p>
                    <Biodata hobi={'menulis'} />
                    <Component2/>
                </div>
        )
    }
}

export default Component1