/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Component } from "react";
import { useParams } from "react-router-dom";
import '../css/video.css'
import * as Icon from 'react-bootstrap-icons';
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
    loop(){
        return(<a href="/h" className="card item-video">
        <div  className="row">
            <div className="col-sm-6 col-md-4">
                <img src={require('../videos/fs.jpg')} class="img-thumbnail" alt="..."/>
            </div>
            
            <div className="col-sm-6 col-md-8">
                <p className="card-text ">100 viwes 10 likes 20 unlike</p>
            </div>
        </div>
    </a>)
}
    // render
    render(){
        return (
            <div className="container">
                {/* div for video and list  */}
                <div className="row">
                    {/* video */}
                    <div className="video col-sm-12 col-md-9 ">
                        {/* video  */}
                        <div class="ratio ratio-16x9">
                            <video width="320" height="240" controls>
                                <source src={require('../videos/MyVideo.mp4')} type="video/mp4"/>
                            </video>
                        </div>
                        {/* end video */}
                        {/* video info */}
                        <div className="card">
                            <div className="card-header row">
                                <h5 className="card-title col-8">Special title treatment</h5>
                                <p className="info-count card-text col-4">100 viwes 10 likes 20 unlike</p>
                            </div>
                            {/* card body */}
                            <div className="card-body row">
                                {/* like list */}
                                <div className="btn-group col-4 like-unlike" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-outline-primary"> <Icon.HandThumbsUp /></button>
                                    <button type="button" className="btn btn-outline-danger"><Icon.HandThumbsDown /></button>
                                </div>
                                {/*End  like list */}
                                {/* channel */}
                                <a className="col-8 channel " href="/l">
                                    <p className="">
                                        Abbas Alkbbi
                                    </p>
                                    <img src={require('../videos/fs.jpg')} class="channel-img  img-thumbnail" alt="..."/>
                                </a>
                                {/*END channel */}
                            </div>
                            {/* End Card body */}
                        </div>
                        {/* END video info  */}
                    </div>
                    {/* End Video */}
                    {/* List of next video */}
                    <div className="list-videos col-sm-12 col-md-3 border bg-light">
                        {/* item video  */}
                        <a href="/h" className="card item-video">
                            <div  className="row">
                                {/* img-thumbnail */}
                                <div className="col-sm-12 col-md-4">
                                    <img src={require('../videos/fs.jpg')} class="img-thumbnail" alt="..."/>
                                </div>
                                {/*END  img-thumbnail */}
                                {/* title video */}
                                <div className="col-sm-12 col-md-8">
                                    <p className="card-text ">100 viwes 10 likes 20 unlike</p>
                                </div>
                                {/* title video END */}
                            </div>
                        </a>
                        {/* END item video  */}
                        {/* test */}
                        {this.loop()}
                        {this.loop()}
                        {this.loop()}
                        {this.loop()}
                        {this.loop()}
                        {this.loop()}
                        {this.loop()}
                        {this.loop()}
                        {this.loop()}
                        {this.loop()}
                        {this.loop()}
                        {this.loop()}
                        {this.loop()}
                        {/* END test  */}
                    </div>
                    {/*END List of next video */}
                </div>
                {/* div for video and list  */}
            </div>
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