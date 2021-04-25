import React, { Component, useState, useEffect } from 'react';
import Title from './Title';

const Introduction = () => {
    const [title, setTitle] = useState("略歴")
    const [isDark, setIsDark] = useState(false)
    const [content, setContent] = useState([
        { label: "年齢", text: "26歳(1994年生まれ)" },
        { label: "出身地", text: "宮崎県" },
        { label: "最終学歴", text: "宮崎大学大学院工学研究科" },
        { label: "趣味", text: "料理、釣り、晩酌" },
        { label: "イベント", text: "2020年　婚約しました！！" },
    ])

    useEffect(() => {
        if (isDark === false) {
            setContent(content.slice(0, 5))
        }
        else {
            setContent([
                ...content,
                { label: "隠し事", text: "" }
            ])
        }
    }, [isDark])

    const contentStyle = {
        fontSize: "20px",
        textAlign: 'left',
    }
    const OrganizeRightInputSpaceText = (text, num) => {
        return (text + "　　　　　　　　　　　　　　　").slice(0, num)
    }

    return (
        <div>
            <Title onClick={() => setIsDark(!isDark)} title={title} />
            {content.map(
                item => {
                    return <li style={contentStyle}>{`${OrganizeRightInputSpaceText(item.label, 5)} :　${item.text}`}</li >
                }
            )}
        </div>
    )
}

export default Introduction;