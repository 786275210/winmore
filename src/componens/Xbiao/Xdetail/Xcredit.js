import React, {
	Component
} from "react";
// css
import "./Xcredit.css";
import {Provider, connect} from 'react-redux';
import Xheader from '../../Xheader/Xheader';
import Xbullet from '../../Xbullet/Xbullet';
import { Link} from "react-router-dom";
import { Progress } from 'antd';
class Xcredit extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			text1:'',
			text2:'',
			percent:'31',
			percent1:'31',
			money:'10000',
			primary:'110000',
			primary1:'110000',
			text3:''
		}
		this.allAmount=this.allAmount.bind(this)
	}
	// onChange输出框数据
	amount(e){
		// console.log(e.target.value)
		this.setState({
			text1:(e.target.value * 0.0474).toFixed(2),
			text2:(e.target.value * 0.005).toFixed(2),
			percent:Math.round(e.target.value / 1600)+ parseInt(this.state.percent1),
			money:10000 - e.target.value,
			primary1:110001 - e.target.value ,
			text3:e.target.value


		})
		if(e.target.value > 10000){
			this.setState({
				money:0
			})
			window.alert("余额不足")
		}
		this.props.amountsw(this.state.text3)
	}

	// 点击时,输出百分比加载数据
	allAmount(e){
		console.log("22")
		this.setState({
			percent1:this.state.percent,
			primary:this.state.primary1
		})
		const percent1 = this.state.percent
		console.log(percent1)
		if (this.state.primary1 <= 0){
			this.setState({
				primary:0
			})
			window.alert("投标结束")
		}else if(this.state.percent1>=100 ){
			window.alert("百分比满了")
		}
	}
	render() {
		return(
			<div>
				<Xheader />
				<Xbullet />
			    <div className="project">
				        <a className="project-checktip" href="https://m.duoying.com/Article/HelpArticleDetails?Id=9065&amp;device=">
				            <span>最后满标用户可额外获得一次新手标出借机会</span>
				            <div className="project-checktip-close"><i>×</i></div>
				        </a>
				    <section className="project-details">
				        <header className="project-details-hd">
				            <h3>
				                    <i className="project-icon car"></i>
				                                <span>车融宝1号XS180921001</span>
				            </h3>
				
				                            <span className="badge pingan"></span>
				                            <span className="badge red">新手专享</span>
				                            <span className="badge raise">6.00%</span>
				                                                    <span className="badge blue">限额2万</span>
				                    </header>
				        <div className="project-details-bd">
						
				            <table>
				                <tbody><tr>
				                        <td><big className="primary">9.00</big><span className="primary">+6.00%</span></td>
				
				                    <td className="text-center">3月</td>
				                    <td className="text-right">
										<div>
											<Progress strokeLinecap="square" type="circle" percent={this.state.percent1} />
										</div>
				                    </td>
				                </tr>
				                <tr>
				                    <th>参考年回报率<i className="doubt-icon orange" style={{marginLeft:"0.1rem",marginBottom:"0.1rem"}} onClick={this.props.orange.bind(this)}></i></th>
				                    <th className="text-center">期限</th>
				                </tr>
				            </tbody></table>
				        </div>
				        <footer className="project-details-ft">
				            <dl>
				                <dd className="text-left"><big>借款<span>16万</span> / </big></dd>
				                <dd className="text-left"><big className="large">可投<span className="primary">{this.state.primary}</span>元</big></dd>
				            </dl>
				        </footer>
				    </section>
				    <form method="post" className="project-form project-form-info form" id="projectForm" action="/Credit/BidPayHandle">
				      
				        <input type="hidden" name="creditId" defaultValue="49258" />
				        <input type="hidden" name="ticketType" id="ticketType" defaultValue="" />
				        <input type="hidden" name="ticketId" id="ticketId" defaultValue="" />
				        <input type="hidden" name="ticketdefaultValue" id="ticketdefaultValue" defaultValue="" />
				        
				        <fieldset>
				            <div className="fieldset-outer">
				                <div className="project-form-group form-group">
				                    <label>出借金额</label>
				                    <input  onChange={this.amount.bind(this)} type="tel" className="project-form-control form-control" name="amount" id="investAmount" placeholder="请输入100的整数倍" defaultValue=""  data-regexp="investAmount" />
				                    <span className="project-form-addon">
				                            <button onClick={this.allAmount} type="button" className="btn btn-large green" id="allAmount">全投</button>
				                    </span>
				                </div>
				                <div className="project-details-bd project-details-info">
				                    <table>
				                        <tbody>
					                        <tr>
					                            <td>预期收益(元)</td>
					                            <td className="text-right">可用余额(元)</td>
					                        </tr>
					                        <tr>
					                            <td className="primary" id="earnings">{this.state.text1}+{this.state.text2}</td>
					                            <td className="primary text-right">{this.state.money}</td>
					                        </tr>
					                        <tr>
					                            <td>可获得赢币<span id="coins">0</span>个</td>
					                            <td className="text-right">新手标限额2万</td>
					                        </tr>
				                    	</tbody>
				                    </table>
				                </div>
				            </div>
				            <div className="list-group">
				                
				                    <div className="list-group-item">
				                        <span className="primary">此标的无法使用卡券</span>
				                    </div>
				
				
				            </div>
				            <div className="form-group">
				                <label>
				                    <input type="checkbox" name="agree" data-regexp="*" data-null="请您阅读并充分了解以上协议！" />
				                    您已阅读并充分了解<a className="green" href="/Contract/RiskRevealBookMobile">《风险提示函》</a><a className="green" href="/Contract/AuthorizationMobile">《电子签章授权协议》</a>
				                </label>
				            </div>
				            <div className="btn-group" id="shouyi">
				                <a href="/Activity/Calculator" className="jiu"></a>
				                        <button type="button" className="btn btn-block gradient" disabled="">还款中</button>
				            </div>
				        </fieldset>
				    </form>
				    <div className="list-group">
				        <div className="list-group-item">
				            <span>还款方式</span>
				            <span className="pull-right">
				                按月付息
				                <i className="doubt-icon orange" id="getway" data-repay="按月付息" onClick={this.props.getway.bind(this)}></i>
				            </span>
				
				        </div>
						<Link className="list-group-item" to={`/detail/ProjectDetail`}>
				                <span>项目详情</span>
				                <i className="arrows-right pull-right"></i>
				            </Link>
				        <Link className="list-group-item" to={`/detail/XBidList`}>
				            <span>出借记录</span>
				            <i className="arrows-right pull-right"></i>
				        </Link>
				        <a className="list-group-item" href="/Credit/RepayMentPlan?id=49258">
				            <span>还款计划</span>
				            <i className="arrows-right pull-right"></i>
				        </a>
				        <a className="list-group-item" href="/Contract/LoanAgreementMobileDemo">
				           
				            <span>借款协议</span>
				            <i className="arrows-right pull-right"></i>
				        </a>
				    </div>
				</div>
			</div>
		)
	}
	componentWillMount(){
		
	}
}


export default connect((state) => {
	return state
},(dispatch) => {
	return {
		orange(){
            dispatch({
                type:"orange",
                isShowactive:true
            })
       },
		getway(){
			dispatch({
                type:"getway",
                isShowgetway:true
            })
		},
		amountsw(text2){
		console.log(text2)
			dispatch({
				type:"amountsw",
				text:text2
            })
		}
	}
})(Xcredit);