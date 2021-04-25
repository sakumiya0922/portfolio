import React, { Component, useState, useEffect } from 'react';

const Header = () => {
    const [name, setName] = useState("宮島 朔太郎")
    const [furigana, setFurigana] = useState("みやじま　さくたろう")

    const furiganaStyle = {
        fontSize: "20px",
        padding: "5px 10px",
        backgroundColor: "#D9E5FF",
        textAlign: 'center',
        marginTop: '0px',
        marginBottom: '0px',
    }
    const nameStyle = {
        fontSize: "30px",
        textAlign: 'center',
        marginTop: '0px',
    }
    return (
        <div>
            <p style={furiganaStyle}>{furigana}</p>
            <p style={nameStyle}>{name}</p>
        </div>
    )
}

export default Header;