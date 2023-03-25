import React,{ Component } from "react";
import { Outlet } from 'react-router-dom';
import Profile from './Profile';
import ProfileClass from './ProfileClass';

class About extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: "Ashu Negi",
            class: 10,
        }
        // console.log("Parent-contructor..");
    }

    componentDidMount(){
        // console.log("Parent-mounted..");
        
    }
    render(){
        // console.log("Parent-rendered...")
        return (
            <>
            <div>
                <h1>This is our About Page...</h1>
                <h2>Name:{this.state.name}</h2>
                <h2>Class:{this.state.class}</h2>
                {/* <ProfileClass xyz = "React" />  */}
                <Profile  name = "function ashu"/>
                <ProfileClass />
            </div>
            </>
        )
    }
}

export default About;