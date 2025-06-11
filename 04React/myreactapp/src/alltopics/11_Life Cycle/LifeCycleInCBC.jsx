import React, { Component } from 'react'

export default class LifeCycleInCBC extends Component {

    constructor(){ // it runs before componentDidMount in Mounting phase - to initialise state // it run once
        super()    
        console.log("I am constructor");
        this.state = {count:0}
    }
    componentDidMount(){ // it runs once at start of component
        console.log("component did Mount");
        this.setIntervalID = setInterval(()=>{
          console.log("API Call")
        },2000)
    }

    increment = ()=> {
        this.setState({count:this.state.count+1})
    }

    componentDidUpdate(){
        console.log("componenet did update");
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("prev State was",prevState);

        return null;
    }

    componentWillUnmount(){
      
        console.log("component will Unmount bye bye");
        clearInterval(this.setIntervalID);
       
    }

  render() {
    console.log("i am render") // First execute render
    return (
      <div>
        <h1>LifeCycle Class Based {this.state.count}</h1>
        <button className="bg-blue-400 py-1 px-3" onClick={this.increment}>Click</button>
      </div>
    )
  }
}
