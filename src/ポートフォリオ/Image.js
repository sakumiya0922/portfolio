import React, {Component} from 'react';
import profileImage from './image.jpg';

class Image extends Component{

    // style = {
    //     alignItems:'center',
    // }

    constructor(props){
        super(props)
        this.fname = "./ポートフォリオ/image.jpg" 
        // + props.fname;
    }

    render(){
        return(
            <div>
                <img width="100%" border="1" src={profileImage} style={this.style}/>
            </div>
        );
    }
}

export default Image;