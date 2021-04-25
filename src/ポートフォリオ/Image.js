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

}
export default Image;