import React, {
	Component
} from "react";
// css
import "./Xlogin.css";
import { Link } from "react-router-dom";
class Xlogin extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			user:'',
			password:''
		}
		this.userChange = this.userChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
	}
	userChange(e){
        this.setState({ user : e.target.value })
    }

    passwordChange(e){
        this.setState({ password : e.target.value })
    }

    submit(e){
		var reg =[{aa:123}]
		if([{this.state.user:this.state.password}]===reg){
			location.href="http://localhost:3000/#/logining/id"
		}
		console.log(reg)
        window.alert("登陆成功")
       
    }
	render() {
		return(
			<div className="bigbox">
			    <div className="tab">
			        <div className="nva">
			            <a href="javascript:;" className="act">登录</a>
			            <a href="/God/Create?device=h5&amp;BackURL=http%3a%2f%2fm.duoying.com%2fGodService%2fHomeMoblie">注册</a>
			        </div>
			    </div>
			
			    <form method="post" className="form" style={{height:"352px"}} id="loginForm" action="/God/EnterGod">
			        <input name="__RequestVerificationToken" type="hidden" defaultValue="-ywZDCL08ghFM5Rpb-M43qLI5nM1LNms7HIdIvzA477TV28pJHHkE9sjyfUmz9jK9w5BB_ReVIJFyjb9A9fDFriuDus1" />
			        <input type="hidden" name="WeiXinId" id="WeiXinId" />
			        <input type="hidden" name="BackURL" id="BackURL" defaultValue="http://m.duoying.com/GodService/HomeMoblie"/>
			        <input type="hidden" name="from" id="txtcode" />
			        <input type="hidden" name="device" id="device" defaultValue="h5" />
			        <fieldset>
			            <div className="form-group" style={{overflow: "visible"}}>
			                <div className="phnone">
			                    <img src="https://file.duoying.com:8092//src/mobile/member/login/img/login/phone.png" />
			                    <input onChange={this.userChange} type="text" className="form-control" name="Mobile" id="mobile" placeholder="请输入手机号或用户名" data-regexp="*" data-null="请输入手机号或用户名！" defaultValue="" />
			                </div>
			            </div>
						{
							this.state.user.length>0?<div className="form-checktip"style= {{display: "none"}}
						
							>请输入手机号或用户名！</div>:<div className="form-checktip" style={{display: "block"}}
							
							>请输入手机号或用户名！</div>
						 }

						
			            <div className="form-group" style={{overflow: "visible"}}>
			                <div className="phnone">
			                    <img src="https://file.duoying.com:8092//src/mobile/member/login/img/login/pass.png" className="pass" />
			                    <input onChange={this.passwordChange} type="password" className="form-control" name="password" id="password" placeholder="请输入登录密码" data-regexp="[\w\W]{6,20}" data-null="请输入登录密码！" data-error="请输入正确的密码！" />
			                </div>
			            </div>
						<div className="form-checktip" style={{display:"none"}}>请输入登录密码！</div>
			            <div className="form-group" id="codeGroup" style={{display:"none"}}>
			                <div className="input-group">
			                    <input type="text" className="form-control" name="Code" id="code" placeholder="请输入验证码" data-regexp="[0-9a-zA-Z]{4}" data-null="请输入验证码！" data-error="请输入4位验证码！" />
			                    <span className="input-addon">
			                        <img id="yanzhengma" src="/Common/GetValidateCode" />
			                    </span>
			                </div>
			            </div>
			        </fieldset>
			        <div className="form-group rember">
			            <label className="rember_labe">
			                <div className="check">
			                    <input type="checkbox" name="reme" id="reme" />
		                    {/*<label for="reme"></label>*/}
			                </div>
			                <span>记住用户名</span>
			            </label>
			        </div>
			        <div className="btn-group deng">
			            <a onClick={this.submit} type="submit" className="btn btn-block gradient">登录</a>
			            <p className="clearfix pd text-center">
			                <a className="hui" href="/God/ForgotPwd?Clear=true&amp;device=h5">忘记密码?</a>
			            </p>
			        </div>
			    </form>
			</div>
		)
	}
}

export default Xlogin;