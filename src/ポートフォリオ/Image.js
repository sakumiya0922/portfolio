import React, { Component } from 'react';
import profileImage from './image.jpg';
import Title from './Title';

const Image = (props) => {
    const imageStyle = {
        border: "1px",
        width: "100%",
        borderRadius: "70px 70px 70px 70px",

    }
    return (
        <div>
            <Title title="写真" />
            <img src={profileImage} style={imageStyle} />
        </div>
    );



    // class Image extends Component{
    // const imageStyle = {
    //     border: "1px",
    //     width: "100%",
    // }
    //     render(){
    //         return(
    //             <div>
    //                 <img width="100%" border="1" src={profileImage} style={this.style}/>
    //             </div>
    //         );
    //     }
    // }
}
export default Image;