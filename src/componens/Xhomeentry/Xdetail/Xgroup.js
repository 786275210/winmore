import React, {
	Component
} from "react";
// css
import "./Xgroup.css";
import Xheader from '../../Xheader/Xheader';
class Xgroup extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			tabs:[{
				title:"网贷合规备案再提速  多赢普惠多项合规成果引关注",
				ion:"2018-11-16 19:49:25",
				more:"查看详情"
			},{
				title:"多赢普惠正式提交自查报告，合规备案再上新台阶",
				ion:"2018-11-16 19:49:25",
				more:"查看详情"
			},{
				title:"P2P自查倒计时 多赢普惠合规提速迎接监管验收",
				ion:"2018-11-16 19:49:25",
				more:"查看详情"
			},{
				title:"行长路，定初心”多赢普惠四周年919公益长跑节圆满落幕",
				ion:"2018-11-16 19:49:25",
				more:"查看详情"
			},{
				title:"多赢普惠开放月圆满收官，杨总重点解读“全国108条",
				ion:"2018-11-16 19:49:25",
				more:"查看详情"
			}]
		}
	}
	toMore(){
//		const list = this.state.tabs.map((item,index)=>{
//			this.state.tabs.push(this.state.tabs[index])
//		})
		this.setState({
	    	tabs:this.state.tabs.concat(this.state.tabs)
	    })
		console.log(this.state.tabs);
	}
	render() {
		return(
			<div>
				<Xheader />
				<div className="article-box">
					<ul className="article-list">
						{(()=>{
							return this.state.tabs.map((item,index)=>{
								return(
									<li key={index}>
										<a href="/Article/ArticleDetails?Id=17021&amp;device=">
											<h1>{item.title}</h1>
											<div className="bottom">
												<p className="left"><i className="ion"></i>{item.ion}</p> 
												<p className="more">{item.more}</p>
											</div>
										</a>
									</li>
								)
							})
						})()}
						
					</ul>
					<ul>
						
					</ul>
		            <a onClick={this.toMore.bind(this)} className="article-more"> 加载更多 </a>
				</div>
			</div>
		)
	}
}

export default Xgroup;