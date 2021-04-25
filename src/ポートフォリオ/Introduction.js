import React, {Component} from 'react';

class Introduction extends Component{

    Style1 = {
        fontSize:"20px",
        padding:"5px 10px",
        backgroundColor:"red",
        textAlign:'left',
        marginTop:'0px',
        borderRadius:'30px'
    }

    Style2 = {
        fontSize:"20px",
        textAlign:'left',
    }

    constructor(props){
        super(props);
        this.state = {
            text1:'略歴',
            text2:'年齢　　：26歳(1994年生まれ)',
            text3:'出身地　：宮崎県',
            text4:'最終学歴：宮崎大学大学院工学研究科',
            text5:'趣味　　：料理、釣り、晩酌',
            text6:'イベント：2020年　婚約しました！！',
        };
    }

    render(){
        return(
            <div>
                <p style={this.Style1}>{this.state.text1}</p>
                <li style={this.Style2}>{this.state.text2}</li>
                <li style={this.Style2}>{this.state.text3}</li>
                <li style={this.Style2}>{this.state.text4}</li>
                <li style={this.Style2}>{this.state.text5}</li>
                <li style={this.Style2}>{this.state.text6}</li>

            </div>
        )
    }
}

export default Introduction;