import React, { Component } from "react";
// css
import "./Xkefu.css"; 
class Xkefu extends Component {
    constructor(props) { 
        super(props); 
        this.props = props;
        this.state = { }
    }
	btn(){

		var msgList = document.getElementsByClassName("msg-list")[0];
            var output = msgList.children[0];
            var msg = msgList.children[1];
            var btn = msgList.children[2]; 
            var qArr = "你好,在吗,约吗,你爱我吗".split(",");
            var aArr = "滚,不在、滚,叔叔我们不约,爱过".split(",");
            console.log(qArr,aArr);
                var _msg = msg.value;
                var li = document.createElement("li");
                li.innerHTML = _msg;
                li.className = "active";
                output.appendChild(li);
                setTimeout(function(){
                    var li = document.createElement("li");
                    if(qArr.indexOf(_msg) != -1){
                        var idx = qArr.indexOf(_msg);
                        li.innerHTML = aArr[idx];
                    }else{
                        li.innerHTML = "风太大，我听不见";
                    }
                    output.appendChild(li);
                },2000)
                msg.value = "";
                msg.focus();
            
	}
    render() { 
        return(
        	<div className="app">
		        <div className="mobiles_wrap">
		            <div className="mobiles">
		                <div className="title">
		                    <font>多赢普惠</font>
		                    <div className="btns">
		                        <span>转人工<i className="my-fa my-icon-user1"></i></span>
		                    </div>
		                </div>
		            </div>
		        </div>
			    <div id="autoAnswer" className="msg-list">
			        <ul>
			        	
			        </ul>
			        <textarea></textarea>
			        <button onClick={this.btn.bind(this)}>提交</button>
			    </div>
		    </div>
            )
        }
    } export default Xkefu;