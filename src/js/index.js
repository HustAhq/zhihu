import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import SearchBar from './Components/SearchBar.js';
import List from './Components/List.js';
import '../less/AppInvite.less';




var AppInvite = createReactClass({
    getInitialState : function () {
       return {
           list : [],
           orderListInvite : [],
           filterText : ''
       }
    },
    componentDidMount : function () {
        var list = [];
        var data = this.props.data;
        var togglePerson = null;
        data.forEach(function (ele, index){
           ele.canInvite = true;
           list.push(ele)
        })
        this.setState({
            list: list
        })
    },
    toggleInvite: function (id) {
       var togglePerson = null;
       var list = this.state.list.map(function (ele, index){
           if(ele.id === id){
               togglePerson = ele;
               ele.canInvite = !ele.canInvite;
           }
           return ele;
       })
       this.setState({//只有这样写的时候才会触发第二次渲染
           list:list
       })

       var orderList = [...this.state.orderListInvite];
       if(!togglePerson.canInvite){
           orderList.push(togglePerson);
       }else{
           orderList = orderList.filter(function (ele, index){
               return !(ele.id === togglePerson.id);
           });
       }
       this.setState({
           orderListInvite : orderList
       })
       
    },
    onfilterText: function (text){
        this.setState({
            filterText: text
        })
    },
    render: function () {
        return (
             <div className="wrapper">
                <SearchBar data={this.state.orderListInvite} filterText={this.onfilterText}></SearchBar>
                <List data={this.state.list} toggleInvite={this.toggleInvite} filterText={this.state.filterText}></List>
             </div>
        )
    }
})
var data = [
    {
        "name" : "magali",
        "slug" : "magali",
        "avatarUrl" : "./user_1.jpg",
        "bio" : "电影杂志《虹膜》主编（支持iOS/Android平台）",
        "id" : 1
    },
    {
        "name" : "程毅楠",
        "slug" : "cheng-yi-nan",
        "avatarUrl" : "./user_1.jpg",
        "bio" : "美国心理学和经济学本科毕业。 强退《知识分子与社会》",
        "id" : 2
    },
    {
        "name" : "田吉顺",
        "slug" : "tian-ji-shun",
        "avatarUrl" : "./user_3.jpg",
        "bio" : "妇产科医生",
        "id" : 3
    },
    {
        "name" : "周源",
        "slug" : "zhouyuan",
        "avatarUrl" : "./user_4.jpg",
        "bio" : "知乎 001 号员工",
        "id" : 4
    },
    {
        "name" : "黄继新",
        "slug" : "huang-ji-xin",
        "avatarUrl" : "./user_5.jpg",
        "bio" : "和知乎在一起",
        "id" : 5
    },
    {
        "name" : "李申申",
        "slug" : "li-shen-shen",
        "avatarUrl" : "./user_6.jpg",
        "bio" : "知乎 002 号员工",
        "id" : 6
    },
    {
        "name" : "Raymod Wang",
        "slug" : "Raymod Wang",
        "avatarUrl" : "./user_7.jpg",
        "bio" : "lawyer",
        "id" : 7
    }
]
ReactDOM.render(
    <AppInvite data={data}/>,
    document.getElementById('root')
)