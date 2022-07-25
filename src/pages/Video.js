/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Component } from "react";
import { useParams } from "react-router-dom";

class Video extends Component{
    // constructor
    constructor(){
        super();
        this.state={
            id:0
        }
    }
    // constructor
    // Start componentDidMount
    componentDidMount(){
        let {id}=this.props.params
        this.setState({
            id:id
        })
    }
    // END componentDidMount
    // render
    render(){
        return (
            <>
            <div style={{'width':'400px'}}>
                <div class="ratio ratio-16x9">
                    <video width="320" height="240" controls>
                        <source src={require('../videos/MyVideo.mp4')} type="video/mp4"/>
                    </video>
                </div>
            </div>
            </>
        )
    }
    // render End
}

export default (props)=>(
    <Video
    {...props}
    params={useParams()}
    />
);