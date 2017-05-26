import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import ListItem from './ListItem.js';


//这个组件进行信息的显示
var List = createReactClass({
    render:function () {
        var row = [];
        var data = this.props.data;
        var filterText = this.props.filterText;
        var _self = this;
        data.forEach(function (ele, index){
            if(ele.name.indexOf(filterText) !== -1){
                //判断是不是符合输入的字符，是的话在进行渲染
               row.push(<ListItem key={index+100} toggleInvite={_self.props.toggleInvite} canInvite={ele.canInvite} id={ele.id} url={ele.avatarUrl} name={ele.name} bio={ele.bio}></ListItem>)
            }
        })
        return (
            <div className="listWrapper">
                <ul>
                    {row}
               </ul>
            </div>
        )
    }
});

export default List;