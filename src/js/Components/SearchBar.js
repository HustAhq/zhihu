import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

var SearchBar = createReactClass({
    onHandleText : function () {
       this.props.filterText(this.refs.inp.value);
    },
    render: function () {
        var data = this.props.data;
        var row = [];
        data.forEach(function (ele, index) {
           row.push(<span key={index}>{ele.name}</span>)
        })
        return (
            <div className="search">
                <input type="text" ref='inp' onChange={this.onHandleText}/>
                <span>你已经邀请{row}等{row.length}人</span>
            </div>
        )
    }
});

export default SearchBar;