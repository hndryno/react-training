import React, {Component} from 'react'
import Component2 from './Component2'
//component di react ada 2 1 statefull component, 2 stateless component
//membuat statefull component
class Component1 extends Component{
    return
        render(){
            return (
                <div>
                    <h1>halo hehehehe</h1>
                    <p>woi hahahahaha</p>
                    <Component2/>
                </div>
        )
    }
}

export default Component1