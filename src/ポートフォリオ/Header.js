import React, {Component} from 'react';

class Header extends Component{

    name1Style = {
        fontSize:"20px",
        padding:"5px 10px",
        backgroundColor:"red",
        textAlign:'center',
        marginTop:'0px',
        marginBottom:'0px',
    }

    name2Style = {
        fontSize:"40px",
        textAlign:'center',
        marginTop:'0px',
        // marginBottom:'0px',
    }

    constructor(props){
        super(props);
        this.state = {
            name1:'みやじま　さくたろう',
            name2:'宮島　朔太郎',
        };
    }

    render(){
        return(
            <div>
                <p style={this.name1Style}>{this.state.name1}</p>
                <p style={this.name2Style}>{this.state.name2}</p>
            </div>
        )
    }
}

export default Header;