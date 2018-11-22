import React, {
	Component
} from "react";

import "./Xbiao.css";
import { Link} from "react-router-dom";
class Xbiao extends Component {
	constructor(props) {
		super(props);
		// props states
		this.props = props;
		// model  data
		this.state = {
					tabs:[{
						title:"累计交易总额",
						num:"112亿5721万9013元"
					},{
						title:"为出借人赚取",
						num:"1亿9581万7206元"
					}]
		}
	}
	// html
	render() {
		return(
			<div className="biao">
			    <div className="title">
				<b>新手标</b><span>新手独享 收益更高</span>
			    </div>
			    <div className="box">
			            <table>
			                <tbody>
				                <tr>
				                    <td>
				                        <p className="num1">
				                               9.00<span>+</span>6.00<span>%</span>
				                        </p>
				                        <p className="hui">参考年回报率</p>
				                    </td>
				                    <td>
				                        <p className="month">
				                             3<span>个月</span>
				                        </p>
				                        <p className="hui">期限</p>
				                    </td>
				                    <td>
				                        <Link to={`/detail/credit`} className="btn gradient btn-block">还款中</Link>
				                    </td>
				                </tr>
			            </tbody>
			          	</table>
			    </div>
			    <div className="home-notice">
		            <a className="notice-more" href="/Article/ArticleList?articleType=12">更多</a>
		            <a className="notice-words" href="/Article/ArticleDetails?id=17020"><span>关于新安银行停机维护更新公告</span></a>
		        </div>
		        <div className="top">
				    <div className="box">
				        <table className="">
				           <tbody>
										<tr>
											{(()=>{
												return this.state.tabs.map((item,index)=>{
													return(
													<td key={index} className="notice">
				                    <p className="num">{item.title}</p>
				                    <p>{item.num}</p>
													</td>
													)
												})
											})()}
				            </tr>
									</tbody>
								</table>
				        
				       <div className="disclosure">
				            信息披露
				        </div>
				    </div>
				</div>
				<div>
				</div>
			</div>
			
	        
          )
	}
}

export default Xbiao;