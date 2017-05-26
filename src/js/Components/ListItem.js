import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

var ListItem = createReactClass({
    onHandleToggle: function (){
       this.props.toggleInvite(this.props.id);
    },
    render: function () {
        var canInvite = this.props.canInvite;
        var style = {};
        canInvite ? style.background = '#8ab923' : style.background = "#f1f1f2";
        return (
            <li>
                <img src={"./src/img/" + this.props.url} alt=""/>
                <a href=""><div>{this.props.name}</div></a>
                <div className="bio">{this.props.bio}</div>
                <button style={style} onClick={this.onHandleToggle}>{canInvite ? '邀请回答':'收回邀请'}</button>
            </li>
        )
    }
});

export default ListItem;