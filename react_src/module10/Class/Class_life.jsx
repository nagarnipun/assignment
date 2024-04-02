
//rce 
import React, { Component } from 'react'
import Img_class from './Img_class'

export class Class_life extends Component {

    componentDidUpdate(){
        console.log('DidUpdate');
    }


    constructor(state)
    {
        super(state);
        this.state={
            name:"Nirav nagar",
            isImage:true
        }
    }


    render() {
        return (
            <div  className="container p-5 my-5 ">
                <h1>Class_life</h1>
                <button onClick={()=>this.setState({name:"Nipun Nagar"})}>Change</button>
                <h1>{this.state.name}</h1>

                <hr />
                <button onClick={()=>this.setState({isImage:false})}>Hide</button>
                <button onClick={()=>this.setState({isImage:true})}>Show</button>
                {this.state.isImage?<Img_class/> :null }
                
            </div>
        )
    }
}

export default Class_life